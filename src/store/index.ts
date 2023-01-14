import {ActionContext, createStore} from 'vuex'
import {DragItem} from "@/store/dragItem";
import {createRenderData, enrichFrames, PinnedSearchData, Tab, TabGroup, WebFrameData} from "@/store/renderData";

// import md5 from "md5";


// define your typings for the store state
export interface State {
  storage: any
  frames: WebFrameData[]
  pinnedSearchs: PinnedSearchData[]
  tabs:   Tab[]
  tabGroups: TabGroup[]
  clipboard: string|null
  dragItem: DragItem|null,
  search: string[]
}

export const store = createStore<State>({
  state () {
    return {

      dragItem: null,

      storage: {
        kind: 'local',
        accessKey: '',
        gistID: ''
      },

      pinnedSearchs: [],
      // to sync data
      frames: [],

      clipboard: null,

      head: {
        input: ''
      },

      frameContainer: {
        currentSelectedFrameIdx: -1,
      },

      tabs: [],
      tabGroups: [],
      search: []

    }
  },
  getters: {
    dragItem: function (state) {
      return state.dragItem
    },
    storage: function (state) {
      return state.storage
    },
    activeTab: function (state) {
      const tab = state.tabs.find(tab => tab.active)
      if (tab && tab.url){
        return tab
      }
      return null
    },

    allTabs: function (state) {
      return state.tabs
    },

    renderData: function (state) {
      return createRenderData(state.frames, state.tabs, state.tabGroups, state.search, state.pinnedSearchs)
    },

    // add preProcessedTags
    frames: function (state) {
      return enrichFrames(state.frames, state.tabs)
    },
    rawFrames: function (state) {
      return state.frames
    },
  },
  mutations: {
    ADD_SEARCH_ITEM(state, item){
      if (!state.search.some(x => x === item)){
        state.search.push(item)
      }
    },
    REMOVE_SEARCH_ITEM(state, item){
      const idx = state.search.findIndex(x => x === item)
      if (~idx){
        state.search.splice(idx, 1)
      }
    },
    SET_DRAG_ITEM(state, item) {
      state.dragItem = item
    },
    SET_DROPER_ID(state, id){
      setTimeout(function (){
        if (state.dragItem && state.dragItem.lastUpdate){
          if (Date.now() - 200 > state.dragItem.lastUpdate){
            state.dragItem.dropperId = null
          }
        }
      }, 300)
      if (state.dragItem){
        state.dragItem.dropperId = id
        state.dragItem.lastUpdate = Date.now()
      }
    },
    SET_STORAGE(state, storage) {
      localStorage.setItem('storage', JSON.stringify(storage))
      state.storage = storage
    },
    SET_DATA(state, payload) {
      state.frames = payload.frames
      state.storage = payload.storage
    },
    SET_CLIPBOARD(state, clipboard) {
      state.clipboard = clipboard
    },
    SET_FRAMES(state, frames) {
      state.frames = frames
      localStorage.setItem('frames', JSON.stringify(frames))
    },
    SET_FRAME(state, frame:WebFrameData) {
      frame.updatedAt = Date.now()

      const frameIdx = state.frames.findIndex((x:WebFrameData) => {
        return x.url === frame.url
      })
      if (~frameIdx){
        // has frame
        state.frames[frameIdx] = frame
      }else{
        // new frame
        state.frames.push(frame)
      }
      // persist state on storage
      localStorage.setItem('frames', JSON.stringify(state.frames))
    },
    SET_ALL_TABS(state, data) {
      state.tabs = data
    },
    SET_ALL_TAB_GROUPS(state, data){
      state.tabGroups = data
    },
    SET_NOTE(state, note) {
      note.updatedAt = Date.now()

      state.frames.push(note)
      localStorage.setItem('frames', JSON.stringify(state.frames))
    },
  },
  actions: {
    addSearchItem(context, item){
      context.commit('ADD_SEARCH_ITEM', item)
    },
    removeSearchItem(context, item){
      context.commit('REMOVE_SEARCH_ITEM', item)
    },
    setDragItem(context, item){
      context.commit('SET_DRAG_ITEM', item)
    },
    setDropperId(context, id){
      context.commit('SET_DROPER_ID', id)
    },
    setClipboard(context, clipboard){
      if (context.state.clipboard !== clipboard){
        context.commit('SET_CLIPBOARD', clipboard)
      }
    },
    setAllTabs(context, data){
      context.commit('SET_ALL_TABS', data)
    },
    setAllTabGroups(context, data){
      context.commit('SET_ALL_TAB_GROUPS', data)
    },
    upsertFrame(context, frame: WebFrameData){
      context.commit('SET_FRAME', frame)
    },
    setFrames(context, frames: WebFrameData){
      context.commit('SET_FRAMES', frames)
    },

    // process of loading and save

    loadState(context){
      let frames = []
      const framesRaw = localStorage.getItem('frames')
      if (framesRaw){
        frames = JSON.parse(framesRaw)
      }

      let storage = {kind: 'local'}
      const storageRaw = localStorage.getItem('storage')
      if (storageRaw){
        storage = JSON.parse(storageRaw)
      }

      context.commit('SET_DATA', {frames: frames, storage: storage})
    },
    setStorage(context, storage){
      context.commit('SET_STORAGE', storage)
    }
  },
  modules: {
  }
})
