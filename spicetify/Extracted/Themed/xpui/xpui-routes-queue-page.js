"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[7790],{88596:(e,i,t)=>{t.d(i,{U:()=>q});var s=t(41331),a=t(30758),n=t(97500),r=t.n(n),l=t(77),u=t(15231),o=t(57485),c=t(5562),d=t(33130),m=t(83802),x=t(4924),h=t(99186);const p="main-topBar-contentArea",g="queue-tabBar-headerIsCentered",y="queue-tabBar-headerItem",j="queue-tabBar-moreButton",f="queue-tabBar-moreButtonActive",b="yxf_6IsQEmHjijEBUMTP",v="queue-tabBar-active",C="queue-tabBar-headerItemLink",k="queue-tabBar-header",N="queue-tabBar-chevron";var P=t(86070);const I=({items:e,activeItemId:i})=>(0,P.jsx)(x.W,{children:e.map((e=>e.disabled?(0,P.jsx)(h.D,{disabled:!0,role:"menuitemradio",className:b,onClick:e.handleClick,children:e.title},e.uri):(0,P.jsx)(h.D,{role:"menuitemradio",to:e.to,end:!0,"aria-checked":e.itemId===i,className:({isActive:e})=>r()(b,{[v]:e}),onClick:e.handleClick,children:e.title},e.uri)))});var E=t(11892),R=t(70329),w=t(10259);const A=(0,a.memo)((function({isCentered:e,links:i,landmarkLabel:t,className:n}){const x=(0,a.useRef)(null),[h,b]=(0,a.useState)([]),[A,U]=(0,a.useState)(0),[S,O]=(0,a.useState)([]),T=function(){const[e,i]=(0,a.useState)(window.innerWidth),{scrollNodeChildRef:t}=(0,a.useContext)(R.bi),s=(0,E.YQ)((e=>{e?.width&&i(e.width)}),250);return(0,w.w)({refOrElement:t,observeOnly:"width",onResize:s}),e}()??1/0,{pathname:q}=(0,l.zy)(),F=i.find((e=>e.to===q));return(0,a.useEffect)((()=>{x.current&&U(x.current.clientWidth)}),[T]),(0,a.useEffect)((()=>{if(!x.current)return;const e=Array.from(x.current.children).map((e=>e.clientWidth));b(e)}),[i]),(0,a.useEffect)((()=>{if(!x.current)return;if(h.slice(0,-1).reduce(((e,i)=>e+i),0)<=A)return void O([]);const e=h.reduce(((e,i)=>e>i?e:i),0),i=[];let t=e;h.forEach(((e,s)=>{A>=t+e?t+=e:i.push(s)})),O(i)}),[A,h]),(0,P.jsx)("nav",{className:r()(n,p),"aria-label":t,children:(0,P.jsxs)("ul",{className:e?g:k,ref:x,children:[i.filter(((e,i)=>!S.includes(i))).map((e=>{const i=e?.render??(e=>e);return(0,P.jsx)(a.Fragment,{children:i((0,P.jsx)("li",{className:y,children:e.disabled?(0,P.jsx)("div",{className:C,children:(0,P.jsx)(u.E,{variant:"bodySmallBold",children:e.title})}):(0,P.jsx)(m.k,{end:!0,className:({isActive:e})=>r()(C,{[v]:e}),to:e.to,onClick:e.handleClick,children:(0,P.jsx)(u.E,{variant:"bodySmallBold",children:e.title})})}))},e.to)})),S.length||0===h.length?(0,P.jsx)("li",{className:y,children:(0,P.jsx)(d.t,{renderInline:!0,menu:(0,P.jsx)(I,{items:i.filter(((e,i)=>S.includes(i))),activeItemId:F?.itemId}),children:(e,i,t)=>(0,P.jsxs)("button",{className:r()(j,{[f]:F}),type:"button",onClick:i,ref:t,children:[(0,P.jsx)(u.E,{variant:"bodySmallBold",children:F?F.title:s.Ru.get("more")}),e?(0,P.jsx)(o.J,{size:"small",className:N,"aria-hidden":"true"}):(0,P.jsx)(c.y,{size:"small",className:N,"aria-hidden":"true"})]})})}):null]})})}));var U=t(62963);const S="XfifUos51Clgs5a6nf2m",O=()=>{const e=[{title:s.Ru.get("playback-control.queue"),itemId:"queue",to:"/queue",uri:"spotify:app:queue"},{title:s.Ru.get("view.recently-played"),itemId:"history",to:"/history",uri:"spotify:app:history"}];return(0,P.jsx)(U.g,{children:(0,P.jsx)(A,{className:S,links:e})})};var T=t(92909);const q=({children:e})=>{const i=(0,T.y)();return(0,P.jsxs)("section",{className:"contentSpacing",children:[e,i&&(0,P.jsx)(O,{})]})}},79127:(e,i,t)=>{t.r(i),t.d(i,{default:()=>Ue});var s=t(30758),a=t(97500),n=t.n(a),r=t(15231),l=t(70328),u=t(36779),o=t(41331),c=t(62462),d=t(91360),m=t(89531),x=t(86070);const h=({onClick:e})=>(0,x.jsx)(m.n,{onClick:e,size:"small",children:o.Ru.get("queue.clear-queue")});var p=t(51103),g=t(51629),y=t(46457),j=t(12737),f=t(20507),b=t(76276),v=t(17611),C=t(6408),k=t(59677),N=t(93720),P=t(35658),I=t(12953),E=t(89162),R=t(36450),w=t(50597),A=t(57103),U=t(73689),S=t(69197),O=t(58571),T=t(65647),q=t(765),F=t(62385),Q=t(70045),$=t(33589),L=t(74993),M=t(23885),B=t(31845),D=t(78089),z=t(77131),_=t(68732),G=t(3068),K=t(90353),W=t(15339),H=t(68031),Z=t(68702),X=t(30023),Y=t(44817),J=t(98913),V=t(78330),ee=t(65312),ie=t(69180),te=t(2869),se=t(72553),ae=t(4139),ne=t(78487),re=t(42668),le=t(63089);let ue=function(e){return e.TRACK="track",e.EPISODE="episode",e.CHAPTER="chapter",e.LOCAL="local",e.AD="ad",e}({});const oe=s.memo((function({uri:e,uid:i,contextUri:t,name:a,duration_ms:n,artists:r,index:l,rowNumberOffset:u,imgUrl:c,isExplicit:d,isPlayable:m,isMOGEFRestricted:h,album:p,type:g,section:j,usePlayContextItem:f,isAutoPlay:b=!1,isEnhanced:oe,queueSpec:ce,trackContextUri:de}){const me=(0,ae.s)(),xe=(0,ie.z)(),{triggerPlay:he,togglePlay:pe}=f({uid:i,uri:e,index:l}),{spec:ge}=(0,ne.r)(C.i,{data:{position:l,reason:"",uri:e}}),{isActive:ye,isPlaying:je}=(0,te.te)(e),fe=(0,s.useCallback)(((t,s)=>{i?he({loggingParams:s},(()=>xe.skipToNext({uri:e,uid:i}))):he({loggingParams:s})}),[xe,he,e,i]),be=(0,s.useCallback)((t=>{i?pe({loggingParams:t},(()=>ye?je?xe.pause():xe.resume():xe.skipToNext({uri:e,uid:i}))):pe({loggingParams:t})}),[xe,pe,e,i,ye,je]),ve=g===ue.TRACK,Ce=g===ue.EPISODE,ke=g===ue.CHAPTER,Ne=Ce&&"video"===p?.mediaType,Pe=g===ue.LOCAL,Ie=g===ue.AD,Ee=r?.map((e=>e.name)).join(o.Ru.getSeparator())||"",Re=(0,ee.T)(e),{isPlayable:we,isAnyArtistBanned:Ae}=(0,Z.g)(e,{isPlayable:m,isLocal:(0,k.Pk)(e),isOutOfMarket:!1,artistUris:r?.map((e=>e.uri))}),{badges:Ue,hasBadges:Se}=(0,re.b)({downloadAvailability:Re,isExplicit:d,isMOGEFRestricted:h,isEnhanced:oe}),Oe=(0,W.X)();let Te;Te=Ce?(0,x.jsx)(I.b,{uri:e,uid:b?void 0:i,showUri:p.uri,contextUri:t}):ke?(0,x.jsx)(P.r,{uri:e,removeFromQueueData:{uid:b?void 0:i,contextUri:t}}):Pe?(0,x.jsx)(E.A,{uri:e,uid:b?void 0:i,contextUri:t}):Ie?null:(0,x.jsx)(R.P,{uri:e,uid:b?void 0:i,albumUri:p.uri,artists:r,contextUri:t,entityContextUri:de,isSmartRecommendation:oe});const qe=(0,s.useCallback)(((t,s)=>{const{meta:a,uris:n}=t,r=n.map((e=>({uri:e,uid:null})));let l;l=s===_.Y.Before?{before:{uri:e,uid:i??null}}:{after:{uri:e,uid:i??null}},a.section===y.$.NowPlaying?xe.addToQueue(r):a.origin===y.$.NowPlaying?xe.insertIntoQueue(r,l):xe.reorderQueue(r,l)}),[xe,i,e]),Fe=(0,s.useCallback)(((t,s)=>{const{items:a}=t;let n;n=s===_.Y.Before?{before:{uri:e,uid:i??null}}:{after:{uri:e,uid:i??null}},xe.reorderQueue(a,n)}),[xe,i,e]),Qe=b?[]:[H.O[k.NQ.TRACK],H.O[k.NQ.EPISODE]];return(0,x.jsx)(V.pZ,{value:"row",index:l,children:(0,x.jsx)(N.h,{menu:Te,children:(0,x.jsxs)(_.w,{uri:e,contextUri:t,index:l,onTriggerPlay:fe,isActive:j===y.$.NowPlaying&&ye,ariaRowIndex:l,isPlayable:we,isAnyArtistBanned:Ae,ageRestricted:h,spec:ge,dragMetadata:{name:a,createdBy:Ee,sectionId:j},onInsert:(i,t,s,a,n)=>{qe({uris:i,dropIndex:t,meta:n},s),ce&&me.logInteraction(ce.dragAddItemToQueue({itemToAddToQueue:e}))},onMove:(e,i,t,s)=>{Fe({items:e,dropIndex:i,meta:s},t),ce&&me.logInteraction(ce.dragSort())},allowedDropTypes:Qe,children:[(0,x.jsx)(L.y,{ariaColIndex:0,children:(0,x.jsx)(q.$,{uri:e,playAriaLabel:o.Ru.get("tracklist.a11y.play",a,Ee),isPlaying:j===y.$.NowPlaying&&je,isActive:j===y.$.NowPlaying&&ye,spec:ge,onClick:(e,i)=>{be(i)},children:(0,x.jsx)(Q.a,{children:l+u+1})})}),(0,x.jsxs)(M.U,{ariaColIndex:1,children:[(0,x.jsx)(O.e,{src:c,isVideo:Ne,isEpisode:Ce||ke}),(0,x.jsxs)(T.l,{children:[(0,x.jsx)(z.p,{titleText:a,children:a}),Se&&(0,x.jsxs)(U.P,{children:[Ue.enhanced&&(0,x.jsx)(v.R,{size:"small",className:le.A.enhanced,title:o.Ru.get("web-player.smart-shuffle.icon-hover-label"),"aria-label":o.Ru.get("web-player.smart-shuffle.icon-hover-label")}),Ue.download&&(0,x.jsx)(X._,{}),Ue.explicit&&(0,x.jsx)(Y.g,{}),Ue.nineteen&&(0,x.jsx)(J.q,{className:le.A.nineteen,size:16})]}),(0,x.jsxs)(D.p,{children:[ve&&(0,x.jsx)(A.l,{artists:r,spec:ge}),(Ce||Pe)&&!Ne&&Ee]})]})]}),(0,x.jsx)(B.o,{ariaColIndex:2,children:(0,x.jsx)(w.g,{nonInteractive:Pe,uri:p.uri,name:p.name,creatorUri:r?.[0]?.uri,spec:ge,children:p.name})}),(0,x.jsxs)($.l,{ariaColIndex:3,children:[oe&&Oe&&(0,x.jsx)(se.r,{spec:ge,children:(0,x.jsx)(K.o,{className:le.A.rowFeedback,contextUri:de,id:i??void 0,uri:e,isActive:j===y.$.NowPlaying&&ye})}),!ke&&!oe&&(0,x.jsx)(G.d,{uri:e,type:g}),(0,x.jsx)(S.P,{duration:n}),(0,x.jsx)(F.Y,{menu:Te,label:o.Ru.get("more.label.track",a,Ee),spec:ge})]})]})})})}),((e,i)=>e.uri===i.uri&&e.index===i.index&&e.name===i.name&&e.isEnhanced===i.isEnhanced));var ce=t(64375),de=t(45292),me=t(21466),xe=t(45339),he=t(45841),pe=t(40425),ge=t(32415),ye=t(37171),je=t(86317),fe=t(92686);const be=s.memo((function({tracks:e,ariaLabel:i,contextUri:t,currentlyPlayingContextUri:a=t,rowNumberOffset:n=0,section:r,usePlayContextItem:l}){const u=(0,de.W)(),c=(0,ie.z)(),d=(0,s.useCallback)(((e,i)=>{u({intent:"remove-from-queue",type:"click"}),c.removeFromQueue(e).then(i)}),[c,u]),m=(0,s.useCallback)(((e,i)=>{if((0,pe.p)(e)){const s=(0,fe.g)(e.show?.images,{desiredSize:40});return(0,x.jsx)(oe,{index:i,rowNumberOffset:n,imgUrl:s?.url||"",uri:(0,me.a)(e),uid:e.uid??e.uri,contextUri:t,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.show.name,uri:e.show.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:ue.EPISODE,section:r,usePlayContextItem:l,isAutoPlay:"autoplay"===e.provider},`${i}${n}${e.uid}`)}if((0,he.d)(e)){const s=(0,fe.g)(e.images||void 0,{desiredSize:40});return(0,x.jsx)(oe,{index:i,rowNumberOffset:n,imgUrl:s?.url||"",uri:(0,me.a)(e),uid:e.uid??e.uri,contextUri:t,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.book.name,uri:e.book.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:ue.CHAPTER,section:r,usePlayContextItem:l,isAutoPlay:"autoplay"===e.provider},`${i}${n}${e.uid}`)}if((0,xe.N)(e)){const s=(0,fe.g)(e.images||void 0,{desiredSize:40});return(0,x.jsx)(oe,{index:i,rowNumberOffset:n,imgUrl:s?.url||"",uri:e.uri,uid:e.uid??e.uri,contextUri:t,duration_ms:e.duration.milliseconds,name:e.advertiser??e.title??o.Ru.get("ad-formats.advertisement"),artists:[],album:{name:"",uri:""},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:ue.AD,section:r,usePlayContextItem:l,isAutoPlay:"autoplay"===e.provider,isEnhanced:!1},`${i}${n}${e.uid}`)}if((0,ge.v)(e)||(0,ye.v)(e)){const s=(0,fe.g)(e?.album?.images,{desiredSize:40}),u=e.type===je.c.TRACK?e:null;return(0,x.jsx)(oe,{index:i,rowNumberOffset:n,imgUrl:s?.url||"",uri:(0,me.a)(e),uid:e.uid??e.uri,contextUri:t,duration_ms:e.duration.milliseconds,name:e.name,artists:e.artists,album:e.album,isExplicit:u?.isExplicit??!1,isPlayable:!0,isMOGEFRestricted:u?.is19PlusOnly??!1,type:u?.isLocal?ue.LOCAL:ue.TRACK,section:r,usePlayContextItem:l,isAutoPlay:"autoplay"===e.provider,isEnhanced:(0,ce.N)(e),trackContextUri:e.metadata?.context_uri??a},`${i}${n}${e.uid}`)}return(0,x.jsx)(j.nd,{height:`${f.FL}px`})}),[n,t,a,r,l]),h=(0,s.useMemo)((()=>[b.$.INDEX,b.$.TITLE_AND_ARTIST,b.$.ALBUM,b.$.DURATION]),[]),p=(0,s.useCallback)((e=>({uri:e.uri,uid:e.uid??e.uri})),[]);return(0,x.jsx)(f.S4,{ariaLabel:i,tracks:e,nrTracks:e.length,onRemove:d,renderRow:m,resolveItem:p,columns:h})}));var ve=t(16325),Ce=t(82769),ke=t(98882);const Ne="vLZJk3f3zoMmc3u9QMrc",Pe="mP6tR7IgjiamGqpBW5ai",Ie="LIaQPESoX4ijscRRn3lz",Ee="OXu31j8D4EtomwaNzbsk",Re="eJ2FGCSzEv3Bta0m2Haf",we=()=>{const{uri:e,description:i,current:t,nextUp:a,queued:m,isEmpty:j,hasQueuedTracks:f,hasNextTracks:b}=(0,ve.H)(),{spec:v,logger:C,UBIFragment:k}=(0,ne.r)(l.i,{data:{identifier:u.$h.NOWPLAYING_QUEUE,uri:e??""}}),N=(0,s.useMemo)((()=>v.nowPlayingSectionFactory()),[v]),P=(0,s.useMemo)((()=>v.nextInQueueSectionFactory()),[v]),I=(0,s.useMemo)((()=>v.nextFromSectionFactory()),[v]),E=(0,ie.z)(),[R,w]=(0,s.useState)(!1),A=(0,s.useCallback)((()=>{w(!1)}),[w]),U=(0,s.useCallback)((()=>{E.clearQueue(),w(!1)}),[E]),S=(0,s.useCallback)((()=>{let e;const i=P.clearQueueButtonFactory();m.length>0&&(e=i.hitRemoveItemsFromQueue({numberOfItemsToRemoveFromQueue:m.length}),C.logInteraction(e))}),[C,P,m.length]),O=(0,s.useCallback)((async()=>{S(),w(!0)}),[S]),{usePlayContextItem:T}=(0,ke.P)({uri:e??""},{featureIdentifier:"queue"}),q=(0,s.useCallback)((async()=>{if(!b)return;const i=v.nextFromSectionFactory().queueContextLinkFactory().hitUiNavigate({destination:e??""});C.logInteraction(i)}),[b,C,v,e]);return j?(0,x.jsx)(g.K,{}):(0,x.jsxs)("div",{className:Ne,children:[(0,x.jsx)(c.Q,{children:o.Ru.get("queue.page-title")}),(0,x.jsx)(k,{spec:v,children:(0,x.jsx)(Ce.Z,{className:Pe,emptyStateComponent:(0,x.jsx)(r.E,{as:"h1",variant:"titleSmall",semanticColor:"textBase",className:Pe,children:o.Ru.get("playback-control.queue")})})}),t&&e&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r.E,{as:"h2",variant:"bodyMediumBold",semanticColor:"textSubdued",className:Ie,children:o.Ru.get("queue.now-playing")}),(0,x.jsx)(k,{spec:N,children:(0,x.jsx)(V.pZ,{value:"now-playing",children:(0,x.jsx)(be,{ariaLabel:o.Ru.get("queue.now-playing"),tracks:[t],contextUri:e,section:y.$.NowPlaying,usePlayContextItem:T})})})]}),f&&e&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:n()(Re,Ie),children:[(0,x.jsx)(r.E,{as:"h2",variant:"bodyMediumBold",semanticColor:"textSubdued",children:o.Ru.get("queue.next-in-queue")}),f&&(0,x.jsx)(h,{onClick:O})]}),(0,x.jsx)(k,{spec:P,children:(0,x.jsx)(V.pZ,{value:"next-in-queue",children:(0,x.jsx)(be,{ariaLabel:o.Ru.get("queue.next-in-queue"),tracks:m,rowNumberOffset:1,contextUri:"spotify:app:queue:NextInQueue",currentlyPlayingContextUri:e,section:y.$.NextInQueue,usePlayContextItem:T})})})]}),b&&e&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r.E,{as:"h2",variant:"bodyMediumBold",semanticColor:"textSubdued",className:Ie,children:i&&!(0,ve.K)(t)?(0,x.jsxs)("span",{className:"standalone-ellipsis-one-line",children:[o.Ru.get("queue.next-from")," ",(0,x.jsx)(d.N,{className:Ee,to:e,onClick:q,children:i})]}):o.Ru.get("queue.next-up")}),(0,x.jsx)(k,{spec:I,children:(0,x.jsx)(V.pZ,{value:"next-up",children:(0,x.jsx)(be,{ariaLabel:o.Ru.get("queue.next-up"),tracks:a,rowNumberOffset:1+(m?.length||0),contextUri:"spotify:app:queue:NextUp",currentlyPlayingContextUri:e,section:y.$.NextUp,usePlayContextItem:T})})})]}),(0,x.jsx)(p.p,{itemCount:m?.length||0,isOpen:R,onClose:A,onConfirm:U})]})};var Ae=t(88596);const Ue=()=>(0,x.jsx)(Ae.U,{children:(0,x.jsx)(s.Suspense,{fallback:null,children:(0,x.jsx)(we,{})})})},21466:(e,i,t)=>{t.d(i,{a:()=>s});const s=e=>e?.linked_from?.uri||e.uri}}]);
//# sourceMappingURL=xpui-routes-queue-page.js.map