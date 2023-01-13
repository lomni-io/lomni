(function(){var e={8790:function(e,t,n){"use strict";var r=n(9242),a=n(3396);function o(e,t,n,r,o,i){const s=(0,a.up)("SidebarView");return(0,a.wg)(),(0,a.j4)(s)}var i=n(7139),s=function(e){return(0,a.dD)("data-v-5a897026"),e=e(),(0,a.Cn)(),e},c={key:0},u=s((function(){return(0,a._)("li",null,"Sync",-1)}));function l(e,t,n,r,o,s){var l=(0,a.up)("TabsView"),d=(0,a.up)("FramesView"),f=(0,a.up)("PluginInstallView");return(0,a.wg)(),(0,a.iD)(a.HY,null,[e.hasPlugin?((0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("ul",null,[(0,a._)("li",{class:(0,i.C_)({active:"tabs"===this.selected}),onClick:t[0]||(t[0]=function(t){return e.select("tabs")})},"Tabs",2),(0,a._)("li",{class:(0,i.C_)({active:"frames"===this.selected}),onClick:t[1]||(t[1]=function(t){return e.select("frames")})},"Frames",2),u]),e.renderData&&"tabs"===e.selected?((0,a.wg)(),(0,a.j4)(l,{key:0,"render-data":e.renderData},null,8,["render-data"])):(0,a.kq)("",!0),e.renderData&&"frames"===e.selected?((0,a.wg)(),(0,a.j4)(d,{key:1,"render-data":e.renderData},null,8,["render-data"])):(0,a.kq)("",!0)])):(0,a.kq)("",!0),e.hasPlugin?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(f,{key:1}))],64)}function d(e,t,n,r,o,i){const s=(0,a.up)("SearchBar"),c=(0,a.up)("TabContainer"),u=(0,a.up)("CurrentTabs"),l=(0,a.up)("FramesContainer");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c,{title:"search bar","default-activation":!0},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{"render-data":n.renderData},null,8,["render-data"])])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.renderData.windows,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:t},[(0,a.Wm)(c,{title:"current tab: "+e.name,"default-activation":!0},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{window:e},null,8,["window"])])),_:2},1032,["title"])])))),128)),(0,a.Wm)(c,{title:"frames","default-activation":!0},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{frames:n.renderData.frames},null,8,["frames"])])),_:1})],64)}const f=e=>((0,a.dD)("data-v-768f0fca"),e=e(),(0,a.Cn)(),e),p={id:"tab",ref:"tab",class:"tab"},g=f((()=>(0,a._)("input",{type:"checkbox"},null,-1))),m={class:"tab-content",ref:"content"};function h(e,t,n,o,s,c){return(0,a.wg)(),(0,a.iD)("div",p,[g,(0,a._)("label",{class:(0,i.C_)(["tab-label",{"label-open":c.isActive}]),onClick:t[0]||(t[0]=(...e)=>c.openTab&&c.openTab(...e)),draggable:"true"},(0,i.zw)(n.title),3),(0,a.wy)((0,a._)("div",m,[(0,a.WI)(e.$slots,"default",{},void 0,!0)],512),[[r.F8,c.isActive]])],512)}var v={name:"TabContainer",props:["title","defaultActivation"],data(){return{isActiveButton:null,lastOffetY:null}},watch:{},computed:{isActive(){return null===this.isActiveButton?this.defaultActivation:this.isActiveButton}},methods:{openTab(){null===this.isActiveButton&&this.defaultActivation||this.isActiveButton?this.isActiveButton=!1:this.isActiveButton=!0}}},w=n(89);const b=(0,w.Z)(v,[["render",h],["__scopeId","data-v-768f0fca"]]);var k=b,y={class:"search-container"},I={class:"tag-input-container"},D=["onClick"];function T(e,t,n,o,s,c){var u=(0,a.up)("TagListContainer");return(0,a.wg)(),(0,a.iD)("div",y,[(0,a._)("div",I,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.renderData.search,(function(t,n){return(0,a.wg)(),(0,a.iD)("p",{class:"tag-input",key:n},[(0,a._)("span",{onClick:function(n){return e.removeTag(t)}},(0,i.zw)(t),9,D)])})),128)),(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.searchInput=t}),onKeydown:t[1]||(t[1]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.keydown&&e.keydown.apply(e,t)}),ref:"input"},null,544),[[r.nr,e.searchInput]])]),(0,a.Wm)(u,{tags:e.showTags,class:"tag-list-container",onAddTag:e.addTag},null,8,["tags","onAddTag"])])}const _={class:"tags"},C=["onClick"],S=["onClick","onDragstart"];function M(e,t,n,r,o,s){return(0,a.wg)(),(0,a.iD)("ul",_,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.tags,((e,n)=>((0,a.wg)(),(0,a.iD)("li",{key:n},["preProcessed"===e.kind?((0,a.wg)(),(0,a.iD)("a",{key:0,href:"#",class:"tag",style:(0,i.j5)(s.getCount(e.count)),onClick:t=>s.selectTag(e),draggable:"false"},(0,i.zw)(e.name),13,C)):(0,a.kq)("",!0),"tag"===e.kind?((0,a.wg)(),(0,a.iD)("a",{key:1,href:"#",class:"tag",style:(0,i.j5)(s.getCount(e.count)),onClick:t=>s.selectTag(e),draggable:"true",onDragstart:t=>s.dragstart(e.name),onDragend:t[0]||(t[0]=(...e)=>s.dragend&&s.dragend(...e))},(0,i.zw)(e.name),45,S)):(0,a.kq)("",!0)])))),128))])}n(7658);var x=n(65),E=function(e){var t=new URL(e).hostname;return t=t.replace("www.",""),t};function A(e){return e&&e.startsWith("https://")?(e=e.substring(8),e=e.replace("www.",""),e.split("/")[0]):""}function P(e){var t=A(e),n=t.split(".");return n.pop(),n=n.filter((function(e){return"com"!==e})),n=n.filter((function(e){return e.length>1})),n}function O(e,t,n,r){var a=F(e,t);return{search:r,tags:q(a,r),windows:W(t,n,a),frames:U(a,r)}}function q(e,t){void 0===t&&(t=[]);var n=[],r=G(e,t);return r.forEach((function(e){e.tags.forEach((function(e){if(!t.includes(e)){var r=n.findIndex((function(t){return t.name===e}));-1===r?n.push({name:e,count:1,kind:"tag"}):n[r].count++}})),e.preProcessedTags.forEach((function(e){if(!t.includes(e)){var r=n.findIndex((function(t){return t.name===e}));-1===r?n.push({name:e,count:1,kind:"preProcessed"}):n[r].count++}}))})),t.length>0&&(n=n.filter((function(e){return e.count<r.length}))),n.sort((function(e,t){return e.count>t.count?-1:1}))}function W(e,t,n){var r=[];return e.forEach((function(e){var a=r.find((function(t){return t.id===e.windowId}));if(a||(a={name:"main",id:e.windowId,pinneds:[],tabs:[]},r.push(a)),e.pinned)a.pinneds.push(Z(e,n));else{-1===e.groupId&&a.tabs.push(Z(e,n));var o=t.find((function(t){return t.id===e.groupId}));if(o){var i=a.tabs.find((function(t){return t.id===e.groupId}));i?i.frames.push(Z(e,n)):a.tabs.push({id:e.groupId,title:o.title,color:o.color,collapsed:o.collapsed,frames:[Z(e,n)],tags:[],preProcessedTags:["@group"],kind:"group"})}}})),r}function F(e,t){if(void 0===t&&(t=[]),0===e.length)return[];var n=[],r=[],a=e.map((function(e){return e.tags})).reduce((function(e,t){return e=e.concat(t),e})),o=R(a);e.forEach((function(e){var n=!!e.url;if(n){var a=e,i=P(a.url).map((function(e){return"@"+e})).sort((function(e,t){return o.get(e)||0<(o.get(t)||0)?1:-1})),s=t.find((function(e){return e.url===a.url}));r.push({id:s?s.id:"",index:s?s.index:-1,groupId:s?s.groupId:-1,windowId:s?s.windowId:-1,favIconUrl:a.favIconUrl,title:a.title,preProcessedTags:i,tags:e.tags,domain:E(a.url),url:a.url,isPinned:!!s&&s.pinned,isSelected:!!s&&s.selected,isOpened:!!s,kind:"web"})}e.tags=e.tags.sort((function(e,t){return(o.get(e)||0)<(o.get(t)||0)?1:-1}))})),e.forEach((function(e){var t=!!e.color;if(t){var a=e;n.push({id:-1,collapsed:!1,title:a.title,color:a.color,preProcessedTags:["@group"],tags:e.tags,kind:"group",frames:j(a.frames,r)})}e.tags=e.tags.sort((function(e,t){return(o.get(e)||0)<(o.get(t)||0)?1:-1}))}));var i=[];return i.push.apply(i,r),i.push.apply(i,n),i}function j(e,t){var n=[];return e.forEach((function(e){var r=t.find((function(t){return t.url===e}));r&&n.push(r)})),n}function Z(e,t){var n=t.find((function(t){return t.url===e.url}));return n||{id:e.id,windowId:e?e.windowId:-1,groupId:e?e.groupId:-1,index:e?e.index:-1,url:e.url,favIconUrl:e.favIconUrl,title:e.title,tags:[],domain:E(e.url),preProcessedTags:P(e.url).map((function(e){return"@"+e})),isPinned:e.pinned,isOpened:!0,isSelected:e.selected,kind:"web"}}function R(e){var t=new Map;return e.forEach((function(e){t.set(e,(t.get(e)||0)+1)})),t}function G(e,t){var n=t.filter((function(e){return e.startsWith("#")})),r=t.filter((function(e){return e.startsWith("@")}));return e.filter((function(e){var t=!(r.length>0)||r.every((function(t){return e.preProcessedTags.includes(t)})),a=!(n.length>0)||n.every((function(t){return e.tags.includes(t)}));return t&&a}))}function U(e,t){return t.length>0&&(e=e.filter((function(e){return t.every((function(t){return e.tags.includes(t)||e.preProcessedTags.includes(t)}))}))),z(e)}function z(e){return e.sort((function(e,t){var n=e.tags.length>t.tags.length;return n?1:-1}))}var B=(0,x.MT)({state:function(){return{dragItem:null,storage:{kind:"local",accessKey:"",gistID:""},frames:[],clipboard:null,head:{input:""},frameContainer:{currentSelectedFrameIdx:-1},tabs:[],tabGroups:[],search:[]}},getters:{dragItem:function(e){return e.dragItem},storage:function(e){return e.storage},activeTab:function(e){var t=e.tabs.find((function(e){return e.active}));return t&&t.url?t:null},allTabs:function(e){return e.tabs},renderData:function(e){return O(e.frames,e.tabs,e.tabGroups,e.search)},frames:function(e){return F(e.frames,e.tabs)},rawFrames:function(e){return e.frames}},mutations:{ADD_SEARCH_ITEM:function(e,t){e.search.some((function(e){return e===t}))||e.search.push(t)},REMOVE_SEARCH_ITEM:function(e,t){var n=e.search.findIndex((function(e){return e===t}));~n&&e.search.splice(n,1)},SET_DRAG_ITEM:function(e,t){e.dragItem=t},SET_DROPER_ID:function(e,t){setTimeout((function(){e.dragItem&&e.dragItem.lastUpdate&&Date.now()-200>e.dragItem.lastUpdate&&(e.dragItem.dropperId=null)}),300),e.dragItem&&(e.dragItem.dropperId=t,e.dragItem.lastUpdate=Date.now())},SET_STORAGE:function(e,t){localStorage.setItem("storage",JSON.stringify(t)),e.storage=t},SET_DATA:function(e,t){e.frames=t.frames,e.storage=t.storage},SET_CLIPBOARD:function(e,t){e.clipboard=t},SET_FRAMES:function(e,t){e.frames=t,localStorage.setItem("frames",JSON.stringify(t))},SET_FRAME:function(e,t){t.updatedAt=Date.now();var n=e.frames.findIndex((function(e){return e.url===t.url}));~n?e.frames[n]=t:e.frames.push(t),localStorage.setItem("frames",JSON.stringify(e.frames))},SET_ALL_TABS:function(e,t){e.tabs=t},SET_ALL_TAB_GROUPS:function(e,t){e.tabGroups=t},SET_NOTE:function(e,t){t.updatedAt=Date.now(),e.frames.push(t),localStorage.setItem("frames",JSON.stringify(e.frames))}},actions:{addSearchItem:function(e,t){e.commit("ADD_SEARCH_ITEM",t)},removeSearchItem:function(e,t){e.commit("REMOVE_SEARCH_ITEM",t)},setDragItem:function(e,t){e.commit("SET_DRAG_ITEM",t)},setDropperId:function(e,t){e.commit("SET_DROPER_ID",t)},setClipboard:function(e,t){e.state.clipboard!==t&&e.commit("SET_CLIPBOARD",t)},setAllTabs:function(e,t){e.commit("SET_ALL_TABS",t)},setAllTabGroups:function(e,t){e.commit("SET_ALL_TAB_GROUPS",t)},upsertFrame:function(e,t){e.commit("SET_FRAME",t)},setFrames:function(e,t){e.commit("SET_FRAMES",t)},loadState:function(e){var t=[],n=localStorage.getItem("frames");n&&(t=JSON.parse(n));var r={kind:"local"},a=localStorage.getItem("storage");a&&(r=JSON.parse(a)),e.commit("SET_DATA",{frames:t,storage:r})},setStorage:function(e,t){e.commit("SET_STORAGE",t)}},modules:{}}),V={name:"TagListContainer",emits:["addTag"],props:["tags"],data(){return{styleObject:{"--count":"'12'"}}},computed:{},methods:{getCount(e){return{"--count":`'${e}'`}},selectTag(e){this.$emit("addTag",e.name)},dragstart(e){const t={kind:"tag",object:e};B.dispatch("setDragItem",t)},dragend(){B.dispatch("setDragItem",null)}}};const H=(0,w.Z)(V,[["render",M],["__scopeId","data-v-e2848e8a"]]);var L=H,$=(0,a.aZ)({name:"SearchBar",props:["renderData"],components:{TagListContainer:L},data:function(){return{searchInput:""}},computed:{showTags:function(){var e=this;return this.searchInput.length>0?this.renderData.tags.filter((function(t){return t.name.toLowerCase().includes(e.searchInput.toLowerCase())})):this.renderData.tags}},methods:{removeTag:function(e){B.dispatch("removeSearchItem",e)},addTag:function(e){this.searchInput="",B.dispatch("addSearchItem",e)},keydown:function(){}}});const Y=(0,w.Z)($,[["render",T],["__scopeId","data-v-41f07839"]]);var K=Y,N={class:"container"},J={key:0},X={key:1};function Q(e,t,n,r,o,i){var s=(0,a.up)("ActiveFrameUnit"),c=(0,a.up)("TagContainer"),u=(0,a.up)("ScafoldBar"),l=(0,a.up)("NewGroupContainer");return(0,a.wg)(),(0,a.iD)("div",N,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.window.pinneds,(function(e,t){return(0,a.wg)(),(0,a.iD)("div",{key:t},[(0,a.Wm)(s,{frame:e,minimized:!0},null,8,["frame"])])})),128)),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.window.tabs,(function(e,t){return(0,a.wg)(),(0,a.iD)("div",{key:t},["web"===e.kind?((0,a.wg)(),(0,a.iD)("div",J,[(0,a.Wm)(s,{frame:e},null,8,["frame"])])):(0,a.kq)("",!0),"group"===e.kind?((0,a.wg)(),(0,a.iD)("div",X,[(0,a.Wm)(u,{title:e.title,color:e.color,collapsed:e.collapsed,"group-id":e.id,"count-frames":e.frames.length},{default:(0,a.w5)((function(){return[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.frames,(function(e,t){return(0,a.wg)(),(0,a.iD)("div",{key:t},[(0,a.Wm)(s,{frame:e},null,8,["frame"])])})),128)),(0,a.Wm)(c,{tags:e.tags,color:e.color},null,8,["tags","color"])]})),_:2},1032,["title","color","collapsed","group-id","count-frames"])])):(0,a.kq)("",!0)])})),128)),(0,a.Wm)(l)])}var ee={class:"header"},te={key:0},ne={key:4,class:"edit-mode-container",ref:"input"};function re(e,t,n,o,s,c){return(0,a.wg)(),(0,a.iD)("div",{class:"scafold-container",onFocusout:t[5]||(t[5]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.goToViewMode&&e.goToViewMode.apply(e,t)})},[(0,a._)("div",ee,[e.collapsed||e.editMode?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,i.C_)(["input",e.color]),onClick:t[0]||(t[0]=function(t){return e.collapse(!0)})},"-",2)),e.collapsed&&!e.editMode?((0,a.wg)(),(0,a.iD)("div",{key:1,class:(0,i.C_)(["input",e.color]),onClick:t[1]||(t[1]=function(t){return e.collapse(!1)})},"+",2)):(0,a.kq)("",!0),e.editMode?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("label",{key:2,class:(0,i.C_)(e.color),onClick:t[2]||(t[2]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.goToEditMode&&e.goToEditMode.apply(e,t)})},[(0,a.Uk)((0,i.zw)(e.title.length>0?e.title:"(no name)")+" ",1),e.collapsed?((0,a.wg)(),(0,a.iD)("span",te," - "+(0,i.zw)(e.countFrames)+" item(s)",1)):(0,a.kq)("",!0)],2)),e.collapsed&&!e.editMode?((0,a.wg)(),(0,a.iD)("div",{key:3,class:(0,i.C_)(["collapsed",e.color])},null,2)):(0,a.kq)("",!0),e.editMode?((0,a.wg)(),(0,a.iD)("div",ne,[(0,a._)("div",{class:(0,i.C_)(["input edit-mode",e.color]),onClick:t[3]||(t[3]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.changeColor&&e.changeColor.apply(e,t)})},null,2),(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.newTitle=t}),class:(0,i.C_)(e.color)},null,2),[[r.nr,e.newTitle]])],512)):(0,a.kq)("",!0)]),e.collapsed?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,i.C_)(["content",e.color])},[(0,a.WI)(e.$slots,"default",{},void 0,!0)],2))],32)}var ae=(0,a.aZ)({name:"TabGroupScaffold",props:["title","color","collapsed","groupId","countFrames"],data:function(){return{editMode:!1,newTitle:null}},methods:{collapse:function(e){this.port.postMessage({kind:"collapse-tab-groups",group:this.groupId,collapse:e})},changeColor:function(){var e=this.color;"grey"===this.color&&(e="blue"),"blue"===this.color&&(e="red"),"red"===this.color&&(e="yellow"),"yellow"===this.color&&(e="green"),"green"===this.color&&(e="pink"),"pink"===this.color&&(e="purple"),"purple"===this.color&&(e="cyan"),"cyan"===this.color&&(e="orange"),"orange"===this.color&&(e="grey"),this.port.postMessage({kind:"color-tab-groups",group:this.groupId,color:e})},goToViewMode:function(){this.newTitle&&this.port.postMessage({kind:"title-tab-groups",group:this.groupId,title:this.newTitle}),this.editMode=!1},goToEditMode:function(){var e=this;this.editMode=!0,this.newTitle=this.title,this.$nextTick((function(){var t=e.$refs.input;t.focus()}))}}});const oe=(0,w.Z)(ae,[["render",re],["__scopeId","data-v-75b7cea1"]]);var ie=oe;function se(e,t,n,o,i,s){const c=(0,a.up)("TabGroupScaffold");return s.dragItem&&"frame"===s.dragItem.kind?((0,a.wg)(),(0,a.j4)(c,{key:0,title:"new group"},{default:(0,a.w5)((()=>[(0,a._)("div",{class:"new-group",onDrop:t[0]||(t[0]=(...e)=>s.onDrop&&s.onDrop(...e)),onDragover:t[1]||(t[1]=(0,r.iM)((()=>{}),["prevent"])),onDragenter:t[2]||(t[2]=(0,r.iM)((()=>{}),["prevent"]))},"drop frame here to create group",32)])),_:1})):(0,a.kq)("",!0)}var ce={name:"NewGroupContainer",components:{TabGroupScaffold:ie},computed:{dragItem(){return B.getters.dragItem}},methods:{async onDrop(){if(this.dragItem&&"frame"===this.dragItem.kind){const e=this.dragItem.object;this.port.postMessage({kind:"group-tabs",tabs:e.id})}}}};const ue=(0,w.Z)(ce,[["render",se],["__scopeId","data-v-19012e8a"]]);var le=ue;const de={class:"tags"},fe=["onClick"],pe=["onClick"];function ge(e,t,n,o,s,c){return(0,a.wg)(),(0,a.iD)("ul",de,[(0,a._)("li",{onDragover:[t[0]||(t[0]=(...e)=>c.dragover&&c.dragover(...e)),t[3]||(t[3]=(0,r.iM)((()=>{}),["prevent"]))],onDragleave:t[1]||(t[1]=(...e)=>c.dragleave&&c.dragleave(...e)),onDrop:t[2]||(t[2]=(...e)=>c.onDrop&&c.onDrop(...e)),onDragenter:t[4]||(t[4]=(0,r.iM)((()=>{}),["prevent"]))},[c.dragItem&&"tag"===c.dragItem.kind?((0,a.wg)(),(0,a.iD)("a",{key:0,class:(0,i.C_)(["tag new",{"drag-over":s.isDraggingOver}])},"add here",2)):(0,a.kq)("",!0)],32),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.fixedTags,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{key:t},[(0,a._)("a",{class:"tag fixed",onClick:t=>c.clickedTag(e)},(0,i.zw)(e),9,fe)])))),128)),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.tags,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{key:t},[(0,a._)("a",{class:(0,i.C_)(["tag",n.color]),onClick:t=>c.clickedTag(e),id:"tag",draggable:"true"},(0,i.zw)(e),11,pe)])))),128))])}var me={name:"TagContainer",emits:["addTag"],props:["tags","fixedTags","color"],data(){return{isDraggingOver:!1}},computed:{dragItem(){return B.getters.dragItem}},methods:{clickedTag(e){this.$emit("clickedTag",e)},dragover(){this.isDraggingOver=!0},dragleave(){this.isDraggingOver=!1},onDrop(){this.dragItem&&"tag"===this.dragItem.kind&&this.$emit("addTag",this.dragItem.object)}}};const he=(0,w.Z)(me,[["render",ge],["__scopeId","data-v-2ff4cfef"]]);var ve=he,we={class:"frame-info"},be={class:"frame-header"},ke=["src"],ye={key:0},Ie={class:"frame-header-right"},De={class:"tags"};function Te(e,t,n,o,s,c){var u=(0,a.up)("font-awesome-icon"),l=(0,a.up)("TagContainer");return(0,a.wg)(),(0,a.iD)(a.HY,null,[e.isDropArea?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"drop-container",onDragover:[t[0]||(t[0]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.dragover&&e.dragover.apply(e,t)}),t[2]||(t[2]=(0,r.iM)((function(){}),["prevent"]))],onDrop:t[1]||(t[1]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.onDrop&&e.onDrop.apply(e,t)}),onDragenter:t[3]||(t[3]=(0,r.iM)((function(){}),["prevent"]))},null,32)):(0,a.kq)("",!0),(0,a._)("div",{class:"frame-info-container",draggable:"true",onDragend:t[10]||(t[10]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.dragend&&e.dragend.apply(e,t)}),onDragstart:t[11]||(t[11]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.dragstart&&e.dragstart.apply(e,t)}),ref:"frame",id:"frame"},[e.isDroppable?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,i.C_)(["drop-area",{"drag-over":e.isDropArea}]),onDragover:t[4]||(t[4]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.dragover&&e.dragover.apply(e,t)})},null,34)):(0,a.kq)("",!0),(0,a._)("div",we,[(0,a._)("div",be,[(0,a._)("div",{class:"frame-header-left",onClick:t[5]||(t[5]=(0,r.iM)((function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.goToPage&&e.goToPage.apply(e,t)}),["exact"]))},[(0,a._)("img",{src:e.frame.favIconUrl,width:"16"},null,8,ke),e.minimized?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("small",ye,(0,i.zw)(e.frame.domain),1)),e.minimized?((0,a.wg)(),(0,a.iD)("small",{key:1,class:(0,i.C_)({"current-selected":e.frame.isSelected})},(0,i.zw)(e.frame.title),3)):(0,a.kq)("",!0)]),(0,a._)("div",Ie,[e.frame.isOpened?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"frame-header-close",onClick:t[6]||(t[6]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.closeTab&&e.closeTab.apply(e,t)}),title:"close current tab"},[(0,a.Wm)(u,{icon:"xmark"})])):(0,a.kq)("",!0),e.frame.isPinned?((0,a.wg)(),(0,a.iD)("div",{key:1,class:"frame-header-pinned pinned",onClick:t[7]||(t[7]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.unpinTab&&e.unpinTab.apply(e,t)}),title:"unpin current tab"},[(0,a.Wm)(u,{icon:"thumbtack"})])):(0,a.kq)("",!0),e.frame.isPinned?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",{key:2,class:"frame-header-pinned",onClick:t[8]||(t[8]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.pinTab&&e.pinTab.apply(e,t)}),title:"pin current tab"},[(0,a.Wm)(u,{icon:"thumbtack"})]))])]),e.minimized?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("h1",{key:0,class:(0,i.C_)(["frame-title",{"current-selected":e.frame.isSelected}]),onClick:t[9]||(t[9]=(0,r.iM)((function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.goToPage&&e.goToPage.apply(e,t)}),["exact"]))},(0,i.zw)(e.frame.title),3)),(0,a._)("div",De,[(0,a.Wm)(l,{tags:e.frame.tags,"fixed-tags":e.frame.preProcessedTags},null,8,["tags","fixed-tags"])])])],544)],64)}var _e=function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function i(e){try{c(r.next(e))}catch(t){o(t)}}function s(e){try{c(r["throw"](e))}catch(t){o(t)}}function c(e){e.done?n(e.value):a(e.value).then(i,s)}c((r=r.apply(e,t||[])).next())}))},Ce=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(o){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(a=2&o[0]?r["return"]:o[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(a=i.trys,!(a=a.length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(s){o=[6,s],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},Se=(0,a.aZ)({name:"ActiveFrameUnit",components:{TagContainer:ve},props:["frame","minimized"],data:function(){return{frameId:Math.floor(1e9*Math.random()).toFixed(0)}},computed:{dragItem:function(){return B.getters.dragItem},isDropArea:function(){return this.dragItem&&"frame"===this.dragItem.kind&&this.dragItem.dropperId===this.frameId},isDroppable:function(){return this.dragItem&&"frame"===this.dragItem.kind&&this.dragItem.dropperId!==this.frameId}},methods:{dragstart:function(e){if("frame"===e.toElement.id){var t=this.$refs.frame;t.style.opacity="0.4";var n={draggerId:this.frameId,kind:"frame",object:this.frame};B.dispatch("setDragItem",n)}},onDrop:function(){return _e(this,void 0,void 0,(function(){var e;return Ce(this,(function(t){switch(t.label){case 0:return this.dragItem&&"frame"===this.dragItem.kind?(e=this.dragItem.object,e.isOpened?(this.port.postMessage({kind:"move-tab",tab:e.id,windowId:this.frame.windowId,index:this.frame.index,groupId:this.frame.groupId}),[3,3]):[3,1]):[3,3];case 1:return[4,this.port.postMessage({kind:"open-and-update",url:e.url,windowId:this.frame.windowId,index:this.frame.index,groupId:this.frame.groupId})];case 2:t.sent(),t.label=3;case 3:return[2]}}))}))},dragover:function(){B.dispatch("setDropperId",this.frameId)},dragend:function(){var e=this.$refs.frame;e.style.opacity="1",B.dispatch("setDragItem",null)},pinTab:function(){this.frame.isOpened?this.port.postMessage({kind:"pin-tab",tab:this.frame.id}):this.port.postMessage({kind:"open-request-new-tab",url:this.frame.url,pinned:!0})},unpinTab:function(){this.port.postMessage({kind:"unpin-tab",tab:this.frame.id})},closeTab:function(){this.port.postMessage({kind:"close-tabs",tab:this.frame.id})},goToPage:function(){this.frame.isOpened?this.port.postMessage({kind:"open-request-existing-tab",tab:this.frame.id}):this.port.postMessage({kind:"open-request-new-tab",url:this.frame.url})}}});const Me=(0,w.Z)(Se,[["render",Te],["__scopeId","data-v-505eeae3"]]);var xe=Me,Ee=(0,a.aZ)({name:"CurrentActiveTabs",props:["window"],components:{ActiveFrameUnit:xe,TagContainer:ve,NewGroupContainer:le,ScafoldBar:ie}});const Ae=(0,w.Z)(Ee,[["render",Q],["__scopeId","data-v-037facc6"]]);var Pe=Ae,Oe={class:"frames-container"};function qe(e,t,n,r,o,i){var s=(0,a.up)("FrameUnit"),c=(0,a.up)("FramesScaffold");return(0,a.wg)(),(0,a.iD)("div",Oe,[(0,a.Wm)(c,{title:"default search"},{default:(0,a.w5)((function(){return[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.frames,(function(e,t){return(0,a.wg)(),(0,a.iD)("div",{key:t},[(0,a.Wm)(s,{frame:e},null,8,["frame"])])})),128))]})),_:1})])}var We={class:"frame-info"},Fe={class:"frame-header"},je={class:"frame-header-left"},Ze=["src"],Re={class:"frame-header-right"},Ge={class:"tags"};function Ue(e,t,n,o,s,c){var u=(0,a.up)("font-awesome-icon"),l=(0,a.up)("TagContainer");return(0,a.wg)(),(0,a.iD)("div",{class:"frame-info-container",draggable:"true",onDragend:t[4]||(t[4]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.dragend&&e.dragend.apply(e,t)}),onDragstart:t[5]||(t[5]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.dragstart&&e.dragstart.apply(e,t)}),ref:"frame",id:"frame"},[(0,a._)("div",We,[(0,a._)("div",Fe,[(0,a._)("div",je,[(0,a._)("img",{src:e.frame.favIconUrl,width:"16"},null,8,Ze),(0,a._)("small",null,(0,i.zw)(e.frame.domain),1)]),(0,a._)("div",Re,[e.frame.isOpened?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"frame-header-close",onClick:t[0]||(t[0]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.closeTab&&e.closeTab.apply(e,t)}),title:"close current tab"},[(0,a.Wm)(u,{icon:"xmark"})])):(0,a.kq)("",!0),e.frame.isPinned?((0,a.wg)(),(0,a.iD)("div",{key:1,class:"frame-header-pinned pinned",onClick:t[1]||(t[1]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.unpinTab&&e.unpinTab.apply(e,t)}),title:"unpin current tab"},[(0,a.Wm)(u,{icon:"thumbtack"})])):(0,a.kq)("",!0),e.frame.isPinned?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",{key:2,class:"frame-header-pinned",onClick:t[2]||(t[2]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.pinTab&&e.pinTab.apply(e,t)}),title:"pin current tab"},[(0,a.Wm)(u,{icon:"thumbtack"})]))])]),(0,a._)("h1",{class:(0,i.C_)(["frame-title",{"current-selected":e.frame.isSelected}]),onClick:t[3]||(t[3]=(0,r.iM)((function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.goToPage&&e.goToPage.apply(e,t)}),["exact"]))},(0,i.zw)(e.frame.title),3),(0,a._)("div",Ge,[(0,a.Wm)(l,{tags:e.frame.tags,"fixed-tags":e.frame.preProcessedTags},null,8,["tags","fixed-tags"])])])],544)}var ze=function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function i(e){try{c(r.next(e))}catch(t){o(t)}}function s(e){try{c(r["throw"](e))}catch(t){o(t)}}function c(e){e.done?n(e.value):a(e.value).then(i,s)}c((r=r.apply(e,t||[])).next())}))},Be=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(o){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(a=2&o[0]?r["return"]:o[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(a=i.trys,!(a=a.length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(s){o=[6,s],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},Ve=(0,a.aZ)({name:"FrameUnit",components:{TagContainer:ve},props:["frame"],data:function(){return{frameId:Math.floor(1e9*Math.random()).toFixed(0)}},computed:{dragItem:function(){return B.getters.dragItem}},methods:{dragstart:function(e){if("frame"===e.toElement.id){var t=this.$refs.frame;t.style.opacity="0.4";var n={draggerId:this.frameId,kind:"frame",object:this.frame};B.dispatch("setDragItem",n)}},onDrop:function(){return ze(this,void 0,void 0,(function(){var e;return Be(this,(function(t){switch(t.label){case 0:return this.dragItem&&"frame"===this.dragItem.kind?(e=this.dragItem.object,e.isOpened?(this.port.postMessage({kind:"move-tab",tab:e.id,windowId:this.frame.windowId,index:this.frame.index,groupId:this.frame.groupId}),[3,3]):[3,1]):[3,3];case 1:return[4,this.port.postMessage({kind:"open-and-update",url:e.url,windowId:this.frame.windowId,index:this.frame.index,groupId:this.frame.groupId})];case 2:t.sent(),t.label=3;case 3:return[2]}}))}))},dragover:function(){B.dispatch("setDropperId",this.frameId)},dragend:function(){var e=this.$refs.frame;e.style.opacity="1",B.dispatch("setDragItem",null)},pinTab:function(){this.frame.isOpened?this.port.postMessage({kind:"pin-tab",tab:this.frame.id}):this.port.postMessage({kind:"open-request-new-tab",url:this.frame.url,pinned:!0})},unpinTab:function(){this.port.postMessage({kind:"unpin-tab",tab:this.frame.id})},closeTab:function(){this.port.postMessage({kind:"close-tabs",tab:this.frame.id})},goToPage:function(){this.frame.isOpened?this.port.postMessage({kind:"open-request-existing-tab",tab:this.frame.id}):this.port.postMessage({kind:"open-request-new-tab",url:this.frame.url})}}});const He=(0,w.Z)(Ve,[["render",Ue],["__scopeId","data-v-96f524be"]]);var Le=He,$e={class:"scafold-container"},Ye={class:"header"},Ke={key:0};function Ne(e,t,n,r,o,s){return(0,a.wg)(),(0,a.iD)("div",$e,[(0,a._)("div",Ye,[e.collapsed||e.editMode?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,i.C_)(["input",e.color]),onClick:t[0]||(t[0]=function(t){return e.collapse(!0)})},"-",2)),e.collapsed&&!e.editMode?((0,a.wg)(),(0,a.iD)("div",{key:1,class:(0,i.C_)(["input",e.color]),onClick:t[1]||(t[1]=function(t){return e.collapse(!1)})},"+",2)):(0,a.kq)("",!0),e.editMode?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("label",{key:2,class:(0,i.C_)(e.color)},[(0,a.Uk)((0,i.zw)(e.title)+" ",1),e.collapsed?((0,a.wg)(),(0,a.iD)("span",Ke," - "+(0,i.zw)(e.countFrames)+" item(s)",1)):(0,a.kq)("",!0)],2)),e.collapsed?((0,a.wg)(),(0,a.iD)("div",{key:3,class:(0,i.C_)(["collapsed",e.color])},null,2)):(0,a.kq)("",!0)]),e.collapsed?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,i.C_)(["content",e.color])},[(0,a.WI)(e.$slots,"default",{},void 0,!0)],2))])}var Je=(0,a.aZ)({name:"FramesScaffold",props:["title","color","countFrames"],data:function(){return{collapsed:!1,editMode:!1,newTitle:null}},methods:{collapse:function(e){this.collapsed=e}}});const Xe=(0,w.Z)(Je,[["render",Ne],["__scopeId","data-v-aff387f0"]]);var Qe=Xe,et=(0,a.aZ)({name:"FramesContainer",components:{FramesScaffold:Qe,FrameUnit:Le},props:["frames"]});const tt=(0,w.Z)(et,[["render",qe],["__scopeId","data-v-0aae9166"]]);var nt=tt,rt={name:"TabsView",props:["renderData"],components:{FramesContainer:nt,CurrentTabs:Pe,TabContainer:k,SearchBar:K}};const at=(0,w.Z)(rt,[["render",d]]);var ot=at;function it(e,t,n,r,o,i){const s=(0,a.up)("SearchBar"),c=(0,a.up)("TabContainer"),u=(0,a.up)("FramesContainer");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c,{title:"search bar","default-activation":!0},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{"render-data":n.renderData},null,8,["render-data"])])),_:1}),(0,a.Wm)(c,{title:"frames","default-activation":!0},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{frames:n.renderData.frames},null,8,["frames"])])),_:1})],64)}var st={name:"FramesView",props:["renderData"],components:{FramesContainer:nt,TabContainer:k,SearchBar:K}};const ct=(0,w.Z)(st,[["render",it]]);var ut=ct;function lt(e,t,n,r,o,i){return(0,a.wg)(),(0,a.iD)("h1",null,"How to install lomni plugin")}var dt={name:"PluginInstallView",mounted(){}};const ft=(0,w.Z)(dt,[["render",lt]]);var pt=ft,gt=(0,a.aZ)({name:"SidebarView",components:{PluginInstallView:pt,FramesView:ut,TabsView:ot},data:function(){return{selected:"tabs",hasPlugin:!1}},computed:{renderData:function(){return B.getters.renderData}},methods:{select:function(e){this.selected=e,this.$emit("selected",e)}},mounted:function(){this.port&&(this.hasPlugin=!0,this.port.postMessage({kind:"all-tabs-request"}),this.port.postMessage({kind:"all-tab-groups-request"}),B.dispatch("loadState"))}});const mt=(0,w.Z)(gt,[["render",l],["__scopeId","data-v-5a897026"]]);var ht=mt,vt={components:{SidebarView:ht}};const wt=(0,w.Z)(vt,[["render",o]]);var bt=wt,kt=n(1373),yt=n(3642),It=function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function i(e){try{c(r.next(e))}catch(t){o(t)}}function s(e){try{c(r["throw"](e))}catch(t){o(t)}}function c(e){e.done?n(e.value):a(e.value).then(i,s)}c((r=r.apply(e,t||[])).next())}))},Dt=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(o){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(a=2&o[0]?r["return"]:o[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(a=i.trys,!(a=a.length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(s){o=[6,s],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},Tt=function(){function e(){}return Object.defineProperty(e.prototype,"login",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return It(this,void 0,void 0,(function(){var t;return Dt(this,(function(n){return t=new yt.vd({auth:e}),console.log(t),t.rest.users.getAuthenticated().then((function(e){return console.log("success"),e})).catch((function(e){return console.log("error: ",e),!1})),[2]}))}))}}),e}(),_t=function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function i(e){try{c(r.next(e))}catch(t){o(t)}}function s(e){try{c(r["throw"](e))}catch(t){o(t)}}function c(e){e.done?n(e.value):a(e.value).then(i,s)}c((r=r.apply(e,t||[])).next())}))},Ct=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(o){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(a=2&o[0]?r["return"]:o[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(a=i.trys,!(a=a.length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(s){o=[6,s],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},St=function(){function e(e,t){Object.defineProperty(this,"emitter",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"port",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.emitter=t,this.id=e}return Object.defineProperty(e.prototype,"connect",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this;this.port=chrome.runtime.connect(this.id,{name:"dashboard"}),this.port.onMessage.addListener((function(t){"load-response"===t.kind&&e.emitter.emit("load-response",t),"all-tabs-response"===t.kind&&(console.log("all-tabs-response:: ",t.data),B.dispatch("setAllTabs",t.data)),"all-tab-groups-response"===t.kind&&(console.log("all-tab-groups-response:: ",t.data),B.dispatch("setAllTabGroups",t.data))})),this.port.onDisconnect.addListener((function(){setTimeout((function(){e.connect()}),100),console.log("port.onDisconnect")}))}}),Object.defineProperty(e.prototype,"postMessage",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return _t(this,void 0,void 0,(function(){return Ct(this,(function(t){return this.port.postMessage(e),[2]}))}))}}),e}(),Mt=n(3494),xt=n(8539),Et=n(7749);Mt.vI.add(xt.Mdf,xt.Xcf,xt.EdJ,xt.$aW,xt.bgy,xt.wlW,xt.g6h,xt.RP7,xt.CPW,xt.g82);var At=(0,kt.Z)(),Pt=(0,r.ri)(bt);try{var Ot=new St("aekckpbdaninhmbbajcpedhaidaeofdh",At);Ot.connect(),Pt.config.globalProperties.port=Ot}catch(qt){console.log("error!")}Pt.config.globalProperties.emitter=At,Pt.config.globalProperties.github=new Tt,setInterval((function(){navigator.clipboard.readText().then((function(e){B.dispatch("setClipboard",e)})).catch((function(){}))}),500),Pt.use(B).component("font-awesome-icon",Et.GN).mount("#app")},5696:function(){}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],a=e[l][1],o=e[l][2];for(var s=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(s=!1,o<i&&(i=o));if(s){e.splice(l--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,i=r[0],s=r[1],c=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var l=c(n)}for(t&&t(r);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},r=self["webpackChunklomni"]=self["webpackChunklomni"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8790)}));r=n.O(r)})();
//# sourceMappingURL=app.3abda9ad.js.map