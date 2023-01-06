// eslint-disable-next-line no-unused-vars
import {extractRootDomain, getDomainsFromUrl} from "@/components/url";
import {addHashTag} from "@/components/search-tab/filters";
import {FrameRender, FramesData, NoteFrameData, WebFrameData} from "@/entity/frame";

export function enrichFrames(frames : FramesData): FrameRender[]{
    const finalFrameList = new Array<FrameRender>()
    if (frames.length === 0){
        return []
    }
    const tags = frames.map(frame => frame.tags).reduce((acc, val) => {
        acc = acc.concat(val)
        return acc
    });
    const tagsCard = generateTagCardinality(tags)
    frames.forEach(frame => {
        const isWebFrame = !!(<WebFrameData>frame).url
        if (isWebFrame){
            const webFrame = (<WebFrameData>frame)
            finalFrameList.push({
                favIconUrl: webFrame.favIconUrl,
                title: webFrame.title,
                preProcessedTags: getDomainsFromUrl(webFrame.url).map((x:string) => addHashTag(x)).sort((x,y) => tagsCard.get(x)||0 < (tagsCard.get(y)||0) ? 1 : -1),
                tags: frame.tags,
                domain: extractRootDomain(webFrame.url),
                updatedAt: frame.updatedAt,
                url: webFrame.url,
                kind: 'url'
            })
        }

        const isNoteFrame = !!(<NoteFrameData>frame).content
        if (isNoteFrame){
            const noteFrame = (<NoteFrameData>frame)
            finalFrameList.push({
                id: noteFrame.id,
                content: noteFrame.content,
                preProcessedTags: ['#note'],
                tags: frame.tags,
                updatedAt: frame.updatedAt,
                kind: 'note'
            })
        }

        frame.tags = frame.tags.sort((x,y) => (tagsCard.get(x)||0) < (tagsCard.get(y)||0) ? 1 : -1)
    })
    return finalFrameList
}

export function generateTagCardinality(tags: string[]){
    const count = new Map<String, number>()
    tags.forEach(i => { count.set(i, (count.get(i)||0) + 1)});
    return count
}