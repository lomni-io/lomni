import {extractRootDomain, getDomainsFromUrl} from "@/components/url";
import {FrameRender} from "@/entity/frame";

export interface RenderData {
    search: string[]
    tags: Tag[]
    windows: Window[]
    frames: WebFrameRender[]
    searchPinneds: PinnedSearchRender[]
}

export interface Tag {
    name:  string
    count: number
    kind: string
}

export interface Tab{
    id: string
    index: number
    url: string
    active: boolean,
    title: string,
    favIconUrl: string
    pinned: boolean
    windowId: number
    selected: boolean
    groupId: number
}

export interface TabGroup{
    id: number
    windowId: number
    title: string
    collapsed: boolean
    color: string
}

export interface Window {
    name:  string
    id: number
    pinneds: WebFrameRender[]
    tabs: (GroupFrameRender|WebFrameRender)[]
}

export interface WebFrameData{
    url:   string
    title: string
    favIconUrl: string
    tags: string[]
    updatedAt: number
}

export interface GroupFrameRender {
    id: number
    title:  string
    color: string
    collapsed: boolean
    frames: WebFrameRender[]
    tags: string[]
    preProcessedTags: string[]
    kind: string
}

export interface PinnedSearchData {
    title:  string
    color: string
    tags: string[]
    preProcessedTags: string[]
}

export interface PinnedSearchRender {
    isDefault: boolean
    title:  string
    collapsed: boolean
    color: string
    tags: string[]
    preProcessedTags: string[]
    frames: WebFrameRender[]
}

export interface WebFrameRender {
    id: string
    windowId: number
    groupId: number
    index: number
    url: string
    favIconUrl: string
    title: string
    tags: string[]
    domain: string
    preProcessedTags: string[]
    isPinned: boolean
    isOpened: boolean
    isSelected: boolean
    kind: string
}

export function createRenderData(framesData: WebFrameData[], tabs: Tab[], tabGroups:TabGroup[], searchInput: string[], pinnedSearchs: PinnedSearchData[]): RenderData{
    const enriched = enrichFrames(framesData, tabs)

    return {
        search: searchInput,
        tags: createTags(enriched, searchInput),
        windows: createWindows(tabs, tabGroups, enriched),
        frames: framesFiltered(enriched, searchInput) as WebFrameRender[],
        searchPinneds: makePinnedSearch(enriched, pinnedSearchs, searchInput)
    }
}

export interface Taggeable {
    tags: string[]
    preProcessedTags: string[]
}


export interface WebTaggeable {
    url: string
    tags: string[]
    preProcessedTags: string[]
}

// TODO add opened TABS to be listed here
export function makePinnedSearch(frames: WebTaggeable[], searchs: PinnedSearchData[] = [], currentSearch: string[] = []): PinnedSearchRender[]{
    let framesCopy = JSON.parse(JSON.stringify(frames)) as WebFrameRender[]
    const result: PinnedSearchRender[] = []

    // get current search
    if (currentSearch.length > 0){
        const framesFiltered = filterFramesBySelection(framesCopy, currentSearch) as WebFrameRender[]
        if (framesFiltered.length > 0){
            result.push({
                isDefault: true,
                tags: currentSearch.filter(t => t.startsWith('#')),
                preProcessedTags: currentSearch.filter(t => t.startsWith('@')),
                title:  'default',
                color: 'grey',
                collapsed: false,
                frames: framesFiltered
            })
            framesCopy = framesCopy.filter(f => !framesFiltered.some(ff => ff.url == f.url))
        }
    }


    // get pinneds
    searchs.forEach(pinned => {
        const framesFiltered = filterFramesBySelection(framesCopy, pinned.tags) as WebFrameRender[]
        result.push({
            isDefault: false,
            tags: pinned.tags.filter(t => t.startsWith('#')),
            preProcessedTags: pinned.preProcessedTags.filter(t => t.startsWith('@')),
            collapsed: false,
            title:  pinned.title,
            color: pinned.color,
            frames: framesFiltered
        })
        framesCopy = framesCopy.filter(f => !framesFiltered.some(ff => ff.url == f.url))
    })

    // get remain
    if (framesCopy.length > 0){
        result.push({
            isDefault: true,
            tags: [],
            preProcessedTags: [],
            title:  'default',
            color: 'grey',
            collapsed: currentSearch.length > 0 || searchs.length > 0,
            frames: framesCopy
        })
    }

    return result
}

export function createTags(framesData: Taggeable[], searchTags: string[] = []): Tag[]{
    let finalList: Tag[] = []

    const framesFiltered = filterFramesBySelection(framesData, searchTags)

    framesFiltered.forEach(frame => {

        frame.tags.forEach(tag => {

            // remove if tag is on selected
            if (searchTags.includes(tag)) {
                return;
            }

            const tagIdx = finalList.findIndex(x => x.name === tag)
            if (tagIdx === -1) {
                finalList.push({name: tag, count: 1, kind: 'tag'})
            }else {
                finalList[tagIdx].count++
            }
        })
        frame.preProcessedTags.forEach(tag => {

            // remove if tag is on selected
            if (searchTags.includes(tag)) {
                return;
            }

            const tagIdx = finalList.findIndex(x => x.name === tag)
            if (tagIdx === -1) {
                finalList.push({name: tag, count: 1, kind: 'preProcessed'})
            }else {
                finalList[tagIdx].count++
            }
        })
    })

    // filter items that not bring less results
    if (searchTags.length > 0){
        finalList = finalList.filter(item => {
            return item.count < framesFiltered.length
        })
    }

    return finalList.sort((x,y) => x.count > y.count ? -1 : 1)
}

export function createWindows(tabs: Tab[], tabGroups: TabGroup[], framesRendered: (GroupFrameRender|WebFrameRender)[]): Window[]{
    const windows: Window[] = []
    tabs.forEach(tab => {
        let window = windows.find(w => w.id === tab.windowId)
        if (!window){
            window = {
                name: 'main',
                id: tab.windowId,
                pinneds: [],
                tabs: []
            }
            windows.push(window)
        }

        if (tab.pinned){
            window.pinneds.push(mountWebFrame(tab, framesRendered))
            return
        }
        if (tab.groupId === -1){
            window.tabs.push(mountWebFrame(tab, framesRendered))
        }

        const tabGroup = tabGroups.find(tabGroup => tabGroup.id === tab.groupId)
        if (tabGroup){
            const groupRender = window.tabs.find(wTab => (<GroupFrameRender>wTab).id === tab.groupId) as GroupFrameRender
            if (groupRender){
                groupRender.frames.push(mountWebFrame(tab, framesRendered))
            }else{
                window.tabs.push({
                    id: tab.groupId,
                    title:  tabGroup.title,
                    color: tabGroup.color,
                    collapsed: tabGroup.collapsed,
                    frames: [mountWebFrame(tab, framesRendered)],
                    tags: [],
                    preProcessedTags: ['@group'],
                    kind: 'group',
                })
            }
        }
    })

    return windows
}

export function enrichFrames(framesData: WebFrameData[], tabs: Tab[] = []): WebFrameRender[]{

    if (framesData.length === 0){
        return []
    }
    const finalWebFrames: WebFrameRender[] = []

    const tags = framesData.map(frame => frame.tags).reduce((acc, val) => {
        acc = acc.concat(val)
        return acc
    });
    const tagsCard = generateTagCardinality(tags)

    framesData.forEach(frame => {
        const isWebFrame = !!(<WebFrameData>frame).url
        if (isWebFrame){
            const webFrame = (<WebFrameData>frame)

            const processedTags = getDomainsFromUrl(webFrame.url).map((x:string) => '@'+ x).sort((x,y) => tagsCard.get(x)||0 < (tagsCard.get(y)||0) ? 1 : -1)

            const tab = tabs.find(tab => tab.url === webFrame.url)

            finalWebFrames.push({
                id: tab ? tab.id : '',
                index: tab ? tab.index : -1,
                groupId: tab ? tab.groupId : -1,
                windowId: tab ? tab.windowId : -1,
                favIconUrl: webFrame.favIconUrl,
                title: webFrame.title,
                preProcessedTags: processedTags,
                tags: frame.tags,
                domain: extractRootDomain(webFrame.url),
                url: webFrame.url,
                isPinned: tab ? tab.pinned : false,
                isSelected: tab ? tab.selected : false,
                isOpened: !!tab,
                kind: 'web',
            })

        }

        frame.tags = frame.tags.sort((x,y) => (tagsCard.get(x)||0) < (tagsCard.get(y)||0) ? 1 : -1)
    })

    return finalWebFrames
}

export function mountWebFrames(urls:string[], webFrames: WebFrameRender[]): WebFrameRender[]{
    const finalWebFrames: WebFrameRender[] = []
    urls.forEach(url => {
        const webFrame = webFrames.find(frame => frame.url === url)
        if (webFrame){
            finalWebFrames.push(webFrame)
        }
    })
    return finalWebFrames
}

export function mountWebFrame(tab:Tab, webFrames: (GroupFrameRender|WebFrameRender)[]): WebFrameRender{
    const webFrame = webFrames.find(frame => (<WebFrameRender>frame).url === tab.url)
    if (webFrame){
        return (<WebFrameRender>webFrame)
    }
    return {
        id: tab.id,
        windowId: tab ? tab.windowId : -1,
        groupId: tab ? tab.groupId : -1,
        index: tab ? tab.index : -1,
        url: tab.url,
        favIconUrl: tab.favIconUrl,
        title: tab.title,
        tags: [],
        domain: extractRootDomain(tab.url),
        preProcessedTags: getDomainsFromUrl(tab.url).map((x:string) => '@'+ x),
        isPinned: tab.pinned,
        isOpened: true,
        isSelected: tab.selected,
        kind: 'web'
    }
}

export function generateTagCardinality(tags: string[]){
    const count = new Map<String, number>()
    tags.forEach(i => { count.set(i, (count.get(i)||0) + 1)});
    return count
}

interface FrameWithTags {
    tags: string[]
    preProcessedTags: string[]
}

export function filterFramesBySelection(frames: FrameWithTags[], tags: string[]): FrameWithTags[] {
    const tagsHash = tags.filter(x => x.startsWith("#"))
    const tagsAt = tags.filter(x => x.startsWith("@"))
    return frames = frames.filter(frame => {
        const hasTagAt = tagsAt.length > 0 ? tagsAt.every(tag => frame.preProcessedTags.includes(tag)) : true
        const hasTagHash = tagsHash.length > 0 ? tagsHash.every(tag => frame.tags.includes(tag)) : true
        return hasTagAt && hasTagHash
    })
}

export function framesFiltered(frames: FrameWithTags[], tags: string[]): FrameWithTags[]{
    if (tags.length > 0) {
        frames = frames.filter(frame => tags.every(
            tag => frame.tags.includes(tag) || frame.preProcessedTags.includes(tag)
        ))
    }

    return framesSort(frames)
}

export function framesSort(frames: FrameWithTags[]): FrameWithTags[]{
    return frames.sort((x,y) => {
        const tagLength = x.tags.length > y.tags.length
        return tagLength ? 1 : -1
    })
}