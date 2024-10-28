import{c as E,u as Re,t as P,w as L,e as G,a as ge,n as C,f as Q,b as Te,I as j,z as Ae,M as Ee,x as ee,p as te,g as Le,h as he,d as V,N as Ne,m as De,O as Me,P as Ve,D as ue,o as $e}from"./index-CoLxLmKc.js";import{B as He}from"./index-Duu42BQG.js";import{u as we,b as be,S as Fe,a as Ue}from"./index-DfV5e9A2.js";import{S as je}from"./index-BHzMD8vK.js";import{N as Ge}from"./index-DlkJL-FJ.js";import{i as Ke}from"./request-2uo1PmCe.js";import{d as z,r as S,c as s,a as A,m as W,D as ye,y as Ye,i as oe,g as Xe,T as _e,E as xe,k as Be,v as Ie,j as Ze,G as qe,p as We,F as J,n as Je,H as Qe,o as F,b as Z,w as R,q as t,t as T,l as et,A as tt,I as ot,x as nt,_ as at}from"./index-45IKlSZ7.js";import{u as lt,P as st}from"./use-placeholder-Fv3Yvx8G.js";import{c as it}from"./interceptor-B_bbnckA.js";import{r as Se,u as Pe}from"./use-route-BAnOwtTZ.js";const[ke,de]=E("action-bar"),ne=Symbol(ke),rt={placeholder:Boolean,safeAreaInsetBottom:P};var ct=z({name:ke,props:rt,setup(e,{slots:o}){const a=S(),i=lt(a,de),{linkChildren:l}=Re(ne);l();const d=()=>{var u;return s("div",{ref:a,class:[de(),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[(u=o.default)==null?void 0:u.call(o)])};return()=>e.placeholder?i(d):d()}});const ut=L(ct);let dt=2e3;const ft=()=>++dt,[vt,mt]=E("action-bar-button"),pt=G({},Se,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var gt=z({name:vt,props:pt,setup(e,{slots:o}){const a=Pe(),{parent:i,index:l}=ge(ne),d=A(()=>{if(i){const c=i.children[l.value-1];return!(c&&"isButton"in c)}}),u=A(()=>{if(i){const c=i.children[l.value+1];return!(c&&"isButton"in c)}});return we({isButton:!0}),()=>{const{type:c,icon:n,text:v,color:g,loading:h,disabled:y}=e;return s(He,{class:mt([c,{last:u.value,first:d.value}]),size:"large",type:c,icon:n,color:g,loading:h,disabled:y,onClick:a},{default:()=>[o.default?o.default():v]})}}});const ht=L(gt),[wt,q]=E("action-bar-icon"),bt=G({},Se,{dot:Boolean,text:String,icon:String,color:String,badge:C,iconClass:Q,badgeProps:Object,iconPrefix:String});var yt=z({name:wt,props:bt,setup(e,{slots:o}){const a=Pe();ge(ne);const i=()=>{const{dot:l,badge:d,icon:u,color:c,iconClass:n,badgeProps:v,iconPrefix:g}=e;return o.icon?s(Te,W({dot:l,class:q("icon"),content:d},v),{default:o.icon}):s(j,{tag:"div",dot:l,name:u,badge:d,color:c,class:[q("icon"),n],badgeProps:v,classPrefix:g},null)};return()=>s("div",{role:"button",class:q(),tabindex:0,onClick:a},[i(),o.default?o.default():e.text])}});const _t=L(yt),xt={show:Boolean,zIndex:C,overlay:P,duration:C,teleport:[String,Object],lockScroll:P,lazyRender:P,beforeClose:Function,overlayStyle:Object,overlayClass:Q,transitionAppear:Boolean,closeOnClickOverlay:P};let M=0;const fe="van-overflow-hidden";function Bt(e,o){const a=be(),i="01",l="10",d=g=>{a.move(g);const h=a.deltaY.value>0?l:i,y=Ee(g.target,e.value),{scrollHeight:x,offsetHeight:B,scrollTop:I}=y;let b="11";I===0?b=B>=x?"00":"01":I+B>=x&&(b="10"),b!=="11"&&a.isVertical()&&!(parseInt(b,2)&parseInt(h,2))&&ee(g,!0)},u=()=>{document.addEventListener("touchstart",a.start),document.addEventListener("touchmove",d,{passive:!1}),M||document.body.classList.add(fe),M++},c=()=>{M&&(document.removeEventListener("touchstart",a.start),document.removeEventListener("touchmove",d),M--,M||document.body.classList.remove(fe))},n=()=>o()&&u(),v=()=>o()&&c();Ae(n),ye(v),Ye(v),oe(o,g=>{g?u():c()})}function Ce(e){const o=S(!1);return oe(e,a=>{a&&(o.value=a)},{immediate:!0}),a=>()=>o.value?a():null}const ve=()=>{var e;const{scopeId:o}=((e=Xe())==null?void 0:e.vnode)||{};return o?{[o]:""}:null},[It,St]=E("overlay"),Pt={show:Boolean,zIndex:C,duration:C,className:Q,lockScroll:P,lazyRender:P,customStyle:Object,teleport:[String,Object]};var kt=z({name:It,props:Pt,setup(e,{slots:o}){const a=S(),i=Ce(()=>e.show||!e.lazyRender),l=u=>{e.lockScroll&&ee(u,!0)},d=i(()=>{var u;const c=G(Le(e.zIndex),e.customStyle);return he(e.duration)&&(c.animationDuration=`${e.duration}s`),Be(s("div",{ref:a,style:c,class:[St(),e.className]},[(u=o.default)==null?void 0:u.call(o)]),[[Ie,e.show]])});return te("touchmove",l,{target:a}),()=>{const u=s(_e,{name:"van-fade",appear:!0},{default:d});return e.teleport?s(xe,{to:e.teleport},{default:()=>[u]}):u}}});const Ct=L(kt),zt=G({},xt,{round:Boolean,position:V("center"),closeIcon:V("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:V("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[Ot,me]=E("popup");var Rt=z({name:Ot,inheritAttrs:!1,props:zt,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:o,attrs:a,slots:i}){let l,d;const u=S(),c=S(),n=Ce(()=>e.show||!e.lazyRender),v=A(()=>{const p={zIndex:u.value};if(he(e.duration)){const _=e.position==="center"?"animationDuration":"transitionDuration";p[_]=`${e.duration}s`}return p}),g=()=>{l||(l=!0,u.value=e.zIndex!==void 0?+e.zIndex:ft(),o("open"))},h=()=>{l&&it(e.beforeClose,{done(){l=!1,o("close"),o("update:show",!1)}})},y=p=>{o("clickOverlay",p),e.closeOnClickOverlay&&h()},x=()=>{if(e.overlay)return s(Ct,W({show:e.show,class:e.overlayClass,zIndex:u.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0},ve(),{onClick:y}),{default:i["overlay-content"]})},B=p=>{o("clickCloseIcon",p),h()},I=()=>{if(e.closeable)return s(j,{role:"button",tabindex:0,name:e.closeIcon,class:[me("close-icon",e.closeIconPosition),Ne],classPrefix:e.iconPrefix,onClick:B},null)};let b;const N=()=>{b&&clearTimeout(b),b=setTimeout(()=>{o("opened")})},w=()=>o("closed"),f=p=>o("keydown",p),r=n(()=>{var p;const{round:_,position:k,safeAreaInsetTop:O,safeAreaInsetBottom:$}=e;return Be(s("div",W({ref:c,style:v.value,role:"dialog",tabindex:0,class:[me({round:_,[k]:k}),{"van-safe-area-top":O,"van-safe-area-bottom":$}],onKeydown:f},a,ve()),[(p=i.default)==null?void 0:p.call(i),I()]),[[Ie,e.show]])}),m=()=>{const{position:p,transition:_,transitionAppear:k}=e,O=p==="center"?"van-fade":`van-popup-slide-${p}`;return s(_e,{name:_||O,appear:k,onAfterEnter:N,onAfterLeave:w},{default:r})};return oe(()=>e.show,p=>{p&&!l&&(g(),a.tabindex===0&&Je(()=>{var _;(_=c.value)==null||_.focus()})),!p&&l&&(l=!1,o("close"))}),we({popupRef:c}),Bt(c,()=>e.show&&e.lockScroll),te("popstate",()=>{e.closeOnPopstate&&(h(),d=!1)}),Ze(()=>{e.show&&g()}),qe(()=>{d&&(o("update:show",!0),d=!1)}),ye(()=>{e.show&&e.teleport&&(h(),d=!0)}),We(st,()=>e.show),()=>e.teleport?s(xe,{to:e.teleport},{default:()=>[x(),m()]}):s(J,null,[x(),m()])}});const Tt=L(Rt);function At(){const e=S([]),o=[];return Qe(()=>{e.value=[]}),[e,i=>(o[i]||(o[i]=l=>{e.value[i]=l}),o[i])]}const[Et,U]=E("rate");function Lt(e,o,a,i){return e>=o?{status:"full",value:1}:e+.5>=o&&a&&!i?{status:"half",value:.5}:e+1>=o&&a&&i?{status:"half",value:Math.round((e-o+1)*1e10)/1e10}:{status:"void",value:0}}const Nt={size:C,icon:V("star"),color:String,count:De(5),gutter:C,clearable:Boolean,readonly:Boolean,disabled:Boolean,voidIcon:V("star-o"),allowHalf:Boolean,voidColor:String,touchable:P,iconPrefix:String,modelValue:Me(0),disabledColor:String};var Dt=z({name:Et,props:Nt,emits:["change","update:modelValue"],setup(e,{emit:o}){const a=be(),[i,l]=At(),d=S(),u=A(()=>e.readonly||e.disabled),c=A(()=>u.value||!e.touchable),n=A(()=>Array(+e.count).fill("").map((f,r)=>Lt(e.modelValue,r+1,e.allowHalf,e.readonly)));let v,g,h=Number.MAX_SAFE_INTEGER,y=Number.MIN_SAFE_INTEGER;const x=()=>{g=ue(d);const f=i.value.map(ue);v=[],f.forEach((r,m)=>{h=Math.min(r.top,h),y=Math.max(r.top,y),e.allowHalf?v.push({score:m+.5,left:r.left,top:r.top,height:r.height},{score:m+1,left:r.left+r.width/2,top:r.top,height:r.height}):v.push({score:m+1,left:r.left,top:r.top,height:r.height})})},B=(f,r)=>{for(let m=v.length-1;m>0;m--)if(r>=g.top&&r<=g.bottom){if(f>v[m].left&&r>=v[m].top&&r<=v[m].top+v[m].height)return v[m].score}else{const p=r<g.top?h:y;if(f>v[m].left&&v[m].top===p)return v[m].score}return e.allowHalf?.5:1},I=f=>{u.value||f===e.modelValue||(o("update:modelValue",f),o("change",f))},b=f=>{c.value||(a.start(f),x())},N=f=>{if(!c.value&&(a.move(f),a.isHorizontal()&&!a.isTap.value)){const{clientX:r,clientY:m}=f.touches[0];ee(f),I(B(r,m))}},w=(f,r)=>{const{icon:m,size:p,color:_,count:k,gutter:O,voidIcon:$,disabled:D,voidColor:ae,allowHalf:le,iconPrefix:se,disabledColor:ie}=e,K=r+1,Y=f.status==="full",H=f.status==="void",ze=le&&f.value>0&&f.value<1;let re;O&&K!==+k&&(re={paddingRight:$e(O)});const Oe=ce=>{x();let X=le?B(ce.clientX,ce.clientY):K;e.clearable&&a.isTap.value&&X===e.modelValue&&(X=0),I(X)};return s("div",{key:r,ref:l(r),role:"radio",style:re,class:U("item"),tabindex:D?void 0:0,"aria-setsize":k,"aria-posinset":K,"aria-checked":!H,onClick:Oe},[s(j,{size:p,name:Y?m:$,class:U("icon",{disabled:D,full:Y}),color:D?ie:Y?_:ae,classPrefix:se},null),ze&&s(j,{size:p,style:{width:f.value+"em"},name:H?$:m,class:U("icon",["half",{disabled:D,full:!H}]),color:D?ie:H?ae:_,classPrefix:se},null)])};return Ve(()=>e.modelValue),te("touchmove",N,{target:d}),()=>s("div",{ref:d,role:"radiogroup",class:U({readonly:e.readonly,disabled:e.disabled}),tabindex:e.disabled?void 0:0,"aria-disabled":e.disabled,"aria-readonly":e.readonly,onTouchstartPassive:b},[n.value.map(w)])}});const Mt=L(Dt),pe="/assets/%E5%A4%B4%E5%83%8F-BXjhwlXD.png",Vt=e=>Ke.get("/goods/detail",{params:{goodsId:e}}),$t=["src"],Ht={class:"custom-indicator"},Ft={class:"title"},Ut={class:"box"},jt={key:0},Gt={class:"twoline-hide"},Kt={class:"review-list"},Yt=["innerHTML"],Xt=z({__name:"indexPage",setup(e){const o=()=>{history.back()},a=S(4.5),i=ot(),l=S({});Vt(i.params.goods_id).then(c=>{l.value=c.data.data.detail,console.log(l.value)});const d=S(!1),u=()=>{d.value=!0};return(c,n)=>{const v=Ge,g=je,h=Ue,y=Fe,x=Tt,B=Mt,I=_t,b=ht,N=ut;return F(),Z(J,null,[s(g,null,{default:R(()=>[s(v,{title:"商品详情页","left-arrow":"",onClickLeft:o})]),_:1}),s(y,{autoplay:3e3,"indicator-color":"black","lazy-render":"",class:"my-swipe"},{indicator:R(({active:w,total:f})=>[t("div",Ht,T(w+1)+"/"+T(f),1)]),default:R(()=>[(F(!0),Z(J,null,et(l.value.goods_images,w=>(F(),nt(h,{key:w.file_id},{default:R(()=>[t("img",{src:w.preview_url,alt:""},null,8,$t)]),_:2},1024))),128))]),_:1}),t("div",Ft,[t("div",Ut,[n[3]||(n[3]=t("span",null,"￥",-1)),t("span",null,T(l.value.goods_price_min),1),l.value.line_price_max!=="0.00"?(F(),Z("span",jt,"￥"+T(l.value.line_price_max),1)):tt("",!0)]),t("span",null,"已售"+T(l.value.goods_sales)+"件",1)]),t("div",Gt,[t("h1",null,T(l.value.goods_name),1)]),t("div",{class:"van-cell van-cell--clickable",onClick:u},n[4]||(n[4]=[t("span",null,[t("svg",{t:"1728393020176",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4300",width:"16",height:"16"},[t("path",{d:"M694.857143 171.885714c10.971429 7.314286 18.285714 18.285714 18.285714 29.257143 0 10.971429-7.314286 21.942857-18.285714 29.257143-10.971429 7.314286-21.942857 7.314286-32.914286 0-135.314286-76.8-299.885714-58.514286-413.257143 43.885714s-142.628571 266.971429-76.8 405.942857 212.114286 215.771429 365.714286 193.828572 270.628571-138.971429 292.571429-288.914286c3.657143-10.971429 10.971429-21.942857 21.942857-25.6 10.971429-3.657143 25.6-3.657143 32.914285 3.657143 10.971429 7.314286 14.628571 18.285714 10.971429 32.914286-29.257143 179.2-171.885714 321.828571-351.085714 347.428571S190.171429 874.057143 109.714286 709.485714 69.485714 351.085714 204.8 226.742857s329.142857-146.285714 490.057143-54.857143z m219.428571 87.771429l7.314286 32.914286c-193.828571 124.342857-365.714286 325.485714-427.885714 431.542857l-204.8-303.542857 54.857143-29.257143 149.942857 160.914285c69.485714-58.514286 219.428571-212.114286 420.571428-292.571428z",fill:"#d81e06","p-id":"4301"})]),t("p",{style:{"padding-left":"3px"}},"七天无理由退货")],-1),t("span",{style:{"margin-left":"5px"}},[t("svg",{t:"1728393020176",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4300",width:"16",height:"16"},[t("path",{d:"M694.857143 171.885714c10.971429 7.314286 18.285714 18.285714 18.285714 29.257143 0 10.971429-7.314286 21.942857-18.285714 29.257143-10.971429 7.314286-21.942857 7.314286-32.914286 0-135.314286-76.8-299.885714-58.514286-413.257143 43.885714s-142.628571 266.971429-76.8 405.942857 212.114286 215.771429 365.714286 193.828572 270.628571-138.971429 292.571429-288.914286c3.657143-10.971429 10.971429-21.942857 21.942857-25.6 10.971429-3.657143 25.6-3.657143 32.914285 3.657143 10.971429 7.314286 14.628571 18.285714 10.971429 32.914286-29.257143 179.2-171.885714 321.828571-351.085714 347.428571S190.171429 874.057143 109.714286 709.485714 69.485714 351.085714 204.8 226.742857s329.142857-146.285714 490.057143-54.857143z m219.428571 87.771429l7.314286 32.914286c-193.828571 124.342857-365.714286 325.485714-427.885714 431.542857l-204.8-303.542857 54.857143-29.257143 149.942857 160.914285c69.485714-58.514286 219.428571-212.114286 420.571428-292.571428z",fill:"#d81e06","p-id":"4301"})]),t("p",{style:{"padding-left":"3px"}},"48小时发货")],-1),t("span",{style:{position:"absolute",right:"0",height:"100%"}},[t("svg",{t:"1728394923460",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5383",width:"12",height:"12"},[t("path",{d:"M307.6 104.6c-14.2 14.2-14.2 37.2 0 51.4L655 503.4c2.8 2.9 2.8 7.5 0 10.3L307.6 861.2c-14.2 14.2-14.2 37.2 0 51.4 14.2 14.2 37.2 14.2 51.4 0l347.4-347.4c15.6-15.6 23.4-36 23.4-56.5s-7.8-41-23.4-56.5L359 104.6c-14.2-14.2-37.2-14.2-51.4 0z","p-id":"5384",fill:"#8a8a8a"})])],-1)])),s(x,{class:"span",closeable:"",show:d.value,"onUpdate:show":n[0]||(n[0]=w=>d.value=w),round:"",position:"bottom",style:{height:"30%"}},{default:R(()=>n[5]||(n[5]=[t("h4",null,"服务",-1),t("span",null,[t("svg",{t:"1728393020176",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4300",width:"16",height:"16"},[t("path",{d:"M694.857143 171.885714c10.971429 7.314286 18.285714 18.285714 18.285714 29.257143 0 10.971429-7.314286 21.942857-18.285714 29.257143-10.971429 7.314286-21.942857 7.314286-32.914286 0-135.314286-76.8-299.885714-58.514286-413.257143 43.885714s-142.628571 266.971429-76.8 405.942857 212.114286 215.771429 365.714286 193.828572 270.628571-138.971429 292.571429-288.914286c3.657143-10.971429 10.971429-21.942857 21.942857-25.6 10.971429-3.657143 25.6-3.657143 32.914285 3.657143 10.971429 7.314286 14.628571 18.285714 10.971429 32.914286-29.257143 179.2-171.885714 321.828571-351.085714 347.428571S190.171429 874.057143 109.714286 709.485714 69.485714 351.085714 204.8 226.742857s329.142857-146.285714 490.057143-54.857143z m219.428571 87.771429l7.314286 32.914286c-193.828571 124.342857-365.714286 325.485714-427.885714 431.542857l-204.8-303.542857 54.857143-29.257143 149.942857 160.914285c69.485714-58.514286 219.428571-212.114286 420.571428-292.571428z",fill:"#d81e06","p-id":"4301"})]),t("div",null,[t("p",null,"七天无理由退货"),t("p",null,"满足相应条件时，消费者可申请7天无理由退货")])],-1),t("span",null,[t("svg",{t:"1728393020176",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4300",width:"16",height:"16"},[t("path",{d:"M694.857143 171.885714c10.971429 7.314286 18.285714 18.285714 18.285714 29.257143 0 10.971429-7.314286 21.942857-18.285714 29.257143-10.971429 7.314286-21.942857 7.314286-32.914286 0-135.314286-76.8-299.885714-58.514286-413.257143 43.885714s-142.628571 266.971429-76.8 405.942857 212.114286 215.771429 365.714286 193.828572 270.628571-138.971429 292.571429-288.914286c3.657143-10.971429 10.971429-21.942857 21.942857-25.6 10.971429-3.657143 25.6-3.657143 32.914285 3.657143 10.971429 7.314286 14.628571 18.285714 10.971429 32.914286-29.257143 179.2-171.885714 321.828571-351.085714 347.428571S190.171429 874.057143 109.714286 709.485714 69.485714 351.085714 204.8 226.742857s329.142857-146.285714 490.057143-54.857143z m219.428571 87.771429l7.314286 32.914286c-193.828571 124.342857-365.714286 325.485714-427.885714 431.542857l-204.8-303.542857 54.857143-29.257143 149.942857 160.914285c69.485714-58.514286 219.428571-212.114286 420.571428-292.571428z",fill:"#d81e06","p-id":"4301"})]),t("div",null,[t("p",null,"48小时发货"),t("p",null,"下单后48小时之内发货")])],-1)])),_:1},8,["show"]),n[14]||(n[14]=t("div",{class:"review"},[t("span",null," 商品评论（14条） "),t("div",null,[t("span",null,"查看更多"),t("span",null,[t("svg",{t:"1728394923460",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5383",width:"12",height:"12"},[t("path",{d:"M307.6 104.6c-14.2 14.2-14.2 37.2 0 51.4L655 503.4c2.8 2.9 2.8 7.5 0 10.3L307.6 861.2c-14.2 14.2-14.2 37.2 0 51.4 14.2 14.2 37.2 14.2 51.4 0l347.4-347.4c15.6-15.6 23.4-36 23.4-56.5s-7.8-41-23.4-56.5L359 104.6c-14.2-14.2-37.2-14.2-51.4 0z","p-id":"5384",fill:"#8a8a8a"})])])])],-1)),t("ul",Kt,[t("li",null,[t("div",null,[t("span",null,[n[6]||(n[6]=t("img",{src:pe,alt:""},null,-1)),n[7]||(n[7]=t("p",null,"谷神不死",-1)),s(B,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=w=>a.value=w),readonly:"",color:"#ffd21e","allow-half":"",size:14},null,8,["modelValue"])])]),n[8]||(n[8]=t("div",null,[t("p",null,"质量很不错 挺喜欢的")],-1)),n[9]||(n[9]=t("span",null," 2023-03-21 15:01:35 ",-1))]),t("li",null,[t("div",null,[t("span",null,[n[10]||(n[10]=t("img",{src:pe,alt:""},null,-1)),n[11]||(n[11]=t("p",null,"谷神不死",-1)),s(B,{modelValue:a.value,"onUpdate:modelValue":n[2]||(n[2]=w=>a.value=w),readonly:"",color:"#ffd21e","allow-half":"",size:14},null,8,["modelValue"])])]),n[12]||(n[12]=t("div",null,[t("p",null,"又买了一台 真的很喜欢")],-1)),n[13]||(n[13]=t("span",null," 2023-03-21 15:02:52 ",-1))])]),n[15]||(n[15]=t("p",{style:{width:"90%",margin:"0 auto","padding-top":"10px","font-size":"12px"}},"商品描述",-1)),t("div",{class:"v-picture",innerHTML:l.value.content},null,8,Yt),s(N,null,{default:R(()=>[s(I,{icon:"wap-home-o",text:"首页",dot:""}),s(I,{icon:"cart-o",text:"购物车",badge:"5"}),s(b,{type:"warning",text:"加入购物车"}),s(b,{type:"danger",text:"立即购买"})]),_:1})],64)}}}),lo=at(Xt,[["__scopeId","data-v-1a7c9c88"]]);export{lo as default};