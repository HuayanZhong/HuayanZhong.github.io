import{e as ge,T as pe,c as ae,u as lt,h as it,j as Be,t as ee,a as H,m as ce,k as Oe,l as ot,o as rt,p as oe,q as fe,r as Ce,w as ne,b as je,s as Y,v as Te,x as p,I as te,y as ct,z as st,i as ut,A as dt,f as ft,F as vt,C as Ne,D as gt,E as Fe,G as ht,H as mt,J as bt,K as _t,L as We,M as qe}from"./index-D5IVMRjW.js";import{G as wt,a as yt}from"./index-EaPSiNOB.js";import{S as kt}from"./index-OOE-zaCZ.js";import{N as xt}from"./index-C3MT3zNx.js";import{i as It}from"./request-CYPSLcde.js";import{g as Ke,r as I,d as F,h as Le,a as P,i as Q,j as Me,k as St,l as Ct,n as Tt,c,p as re,q as Et,m as Ue,f as Ge,s as Lt,v as Pt,b as ve,t as Ae,F as Ee,o as Z,u as D,x as Ie,y as Vt,_ as Je,w as se,z as He}from"./index-CoNTkAIC.js";import{r as $t,u as Rt}from"./use-route-DTI4ojFM.js";import{o as Qe}from"./use-placeholder-CGb2ZCAm.js";function he(e){const a=Ke();a&&ge(a.proxy,e)}function At(e,a){return e>a?"horizontal":a>e?"vertical":""}function Bt(){const e=I(0),a=I(0),i=I(0),s=I(0),l=I(0),n=I(0),b=I(""),f=I(!0),r=()=>b.value==="vertical",v=()=>b.value==="horizontal",o=()=>{i.value=0,s.value=0,l.value=0,n.value=0,b.value="",f.value=!0};return{move:k=>{const L=k.touches[0];i.value=(L.clientX<0?0:L.clientX)-e.value,s.value=L.clientY-a.value,l.value=Math.abs(i.value),n.value=Math.abs(s.value);const w=10;(!b.value||l.value<w&&n.value<w)&&(b.value=At(l.value,n.value)),f.value&&(l.value>pe||n.value>pe)&&(f.value=!1)},start:k=>{o(),e.value=k.touches[0].clientX,a.value=k.touches[0].clientY},reset:o,startX:e,startY:a,deltaX:i,deltaY:s,offsetX:l,offsetY:n,direction:b,isVertical:r,isHorizontal:v,isTap:f}}let Mt=0;function Ze(){const e=Ke(),{name:a="unknown"}=(e==null?void 0:e.type)||{};return`${a}-${++Mt}`}const[et,Se]=ae("swipe"),Dt={loop:ee,width:H,height:H,vertical:Boolean,autoplay:ce(0),duration:ce(500),touchable:ee,lazyRender:Boolean,initialSwipe:ce(0),indicatorColor:String,showIndicators:ee,stopPropagation:ee},tt=Symbol(et);var zt=F({name:et,props:Dt,emits:["change","dragStart","dragEnd"],setup(e,{emit:a,slots:i}){const s=I(),l=I(),n=Le({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let b=!1;const f=Bt(),{children:r,linkChildren:v}=lt(tt),o=P(()=>r.length),_=P(()=>n[e.vertical?"height":"width"]),y=P(()=>e.vertical?f.deltaY.value:f.deltaX.value),k=P(()=>n.rect?(e.vertical?n.rect.height:n.rect.width)-_.value*o.value:0),L=P(()=>_.value?Math.ceil(Math.abs(k.value)/_.value):o.value),w=P(()=>o.value*_.value),m=P(()=>(n.active+o.value)%o.value),E=P(()=>{const u=e.vertical?"vertical":"horizontal";return f.direction.value===u}),T=P(()=>{const u={transitionDuration:`${n.swiping?0:e.duration}ms`,transform:`translate${e.vertical?"Y":"X"}(${+n.offset.toFixed(2)}px)`};if(_.value){const S=e.vertical?"height":"width",x=e.vertical?"width":"height";u[S]=`${w.value}px`,u[x]=e[x]?`${e[x]}px`:""}return u}),X=u=>{const{active:S}=n;return u?e.loop?Ce(S+u,-1,o.value):Ce(S+u,0,L.value):S},A=(u,S=0)=>{let x=u*_.value;e.loop||(x=Math.min(x,-k.value));let R=S-x;return e.loop||(R=Ce(R,k.value,0)),R},d=({pace:u=0,offset:S=0,emitChange:x})=>{if(o.value<=1)return;const{active:R}=n,$=X(u),U=A($,S);if(e.loop){if(r[0]&&U!==k.value){const t=U<k.value;r[0].setOffset(t?w.value:0)}if(r[o.value-1]&&U!==0){const t=U>0;r[o.value-1].setOffset(t?-w.value:0)}}n.active=$,n.offset=U,x&&$!==R&&a("change",m.value)},M=()=>{n.swiping=!0,n.active<=-1?d({pace:o.value}):n.active>=o.value&&d({pace:-o.value})},le=()=>{M(),f.reset(),oe(()=>{n.swiping=!1,d({pace:-1,emitChange:!0})})},j=()=>{M(),f.reset(),oe(()=>{n.swiping=!1,d({pace:1,emitChange:!0})})};let me;const K=()=>clearTimeout(me),W=()=>{K(),+e.autoplay>0&&o.value>1&&(me=setTimeout(()=>{j(),W()},+e.autoplay))},q=(u=+e.initialSwipe)=>{if(!s.value)return;const S=()=>{var x,R;if(!Oe(s)){const $={width:s.value.offsetWidth,height:s.value.offsetHeight};n.rect=$,n.width=+((x=e.width)!=null?x:$.width),n.height=+((R=e.height)!=null?R:$.height)}o.value&&(u=Math.min(o.value-1,u),u===-1&&(u=o.value-1)),n.active=u,n.swiping=!0,n.offset=A(u),r.forEach($=>{$.setOffset(0)}),W()};Oe(s)?re().then(S):S()},be=()=>q(n.active);let _e;const we=u=>{!e.touchable||u.touches.length>1||(f.start(u),b=!1,_e=Date.now(),K(),M())},Pe=u=>{e.touchable&&n.swiping&&(f.move(u),E.value&&(!e.loop&&(n.active===0&&y.value>0||n.active===o.value-1&&y.value<0)||(fe(u,e.stopPropagation),d({offset:y.value}),b||(a("dragStart",{index:m.value}),b=!0))))},ye=()=>{if(!e.touchable||!n.swiping)return;const u=Date.now()-_e,S=y.value/u;if((Math.abs(S)>.25||Math.abs(y.value)>_.value/2)&&E.value){const R=e.vertical?f.offsetY.value:f.offsetX.value;let $=0;e.loop?$=R>0?y.value>0?-1:1:0:$=-Math[y.value>0?"ceil":"floor"](y.value/_.value),d({pace:$,emitChange:!0})}else y.value&&d({pace:0});b=!1,n.swiping=!1,a("dragEnd",{index:m.value}),W()},ke=(u,S={})=>{M(),f.reset(),oe(()=>{let x;e.loop&&u===o.value?x=n.active===0?0:u:x=u%o.value,S.immediate?oe(()=>{n.swiping=!1}):n.swiping=!1,d({pace:x-n.active,emitChange:!0})})},Ve=(u,S)=>{const x=S===m.value,R=x?{backgroundColor:e.indicatorColor}:void 0;return c("i",{style:R,class:Se("indicator",{active:x})},null)},$e=()=>{if(i.indicator)return i.indicator({active:m.value,total:o.value});if(e.showIndicators&&o.value>1)return c("div",{class:Se("indicators",{vertical:e.vertical})},[Array(o.value).fill("").map(Ve)])};return he({prev:le,next:j,state:n,resize:be,swipeTo:ke}),v({size:_,props:e,count:o,activeIndicator:m}),Q(()=>e.initialSwipe,u=>q(+u)),Q(o,()=>q(n.active)),Q(()=>e.autoplay,W),Q([ot,rt,()=>e.width,()=>e.height],be),Q(it(),u=>{u==="visible"?W():K()}),Me(q),St(()=>q(n.active)),Qe(()=>q(n.active)),Ct(K),Tt(K),Be("touchmove",Pe,{target:l}),()=>{var u;return c("div",{ref:s,class:Se()},[c("div",{ref:l,style:T.value,class:Se("track",{vertical:e.vertical}),onTouchstartPassive:we,onTouchend:ye,onTouchcancel:ye},[(u=i.default)==null?void 0:u.call(i)]),$e()])}}});const pt=ne(zt),[Ot,Nt]=ae("swipe-item");var Ft=F({name:Ot,setup(e,{slots:a}){let i;const s=Le({offset:0,inited:!1,mounted:!1}),{parent:l,index:n}=je(tt);if(!l)return;const b=P(()=>{const v={},{vertical:o}=l.props;return l.size.value&&(v[o?"height":"width"]=`${l.size.value}px`),s.offset&&(v.transform=`translate${o?"Y":"X"}(${s.offset}px)`),v}),f=P(()=>{const{loop:v,lazyRender:o}=l.props;if(!o||i)return!0;if(!s.mounted)return!1;const _=l.activeIndicator.value,y=l.count.value-1,k=_===0&&v?y:_-1,L=_===y&&v?0:_+1;return i=n.value===_||n.value===k||n.value===L,i}),r=v=>{s.offset=v};return Me(()=>{re(()=>{s.mounted=!0})}),he({setOffset:r}),()=>{var v;return c("div",{class:Nt(),style:b.value},[f.value?(v=a.default)==null?void 0:v.call(a):null])}}});const Wt=ne(Ft),[qt,ie]=ae("cell"),at={tag:Y("div"),icon:String,size:String,title:H,value:H,label:H,center:Boolean,isLink:Boolean,border:ee,iconPrefix:String,valueClass:Te,labelClass:Te,titleClass:Te,titleStyle:null,arrowDirection:String,required:{type:[Boolean,String],default:null},clickable:{type:Boolean,default:null}},Ht=ge({},at,$t);var Yt=F({name:qt,props:Ht,setup(e,{slots:a}){const i=Rt(),s=()=>{if(a.label||p(e.label))return c("div",{class:[ie("label"),e.labelClass]},[a.label?a.label():e.label])},l=()=>{var r;if(a.title||p(e.title)){const v=(r=a.title)==null?void 0:r.call(a);return Array.isArray(v)&&v.length===0?void 0:c("div",{class:[ie("title"),e.titleClass],style:e.titleStyle},[v||c("span",null,[e.title]),s()])}},n=()=>{const r=a.value||a.default;if(r||p(e.value))return c("div",{class:[ie("value"),e.valueClass]},[r?r():c("span",null,[e.value])])},b=()=>{if(a.icon)return a.icon();if(e.icon)return c(te,{name:e.icon,class:ie("left-icon"),classPrefix:e.iconPrefix},null)},f=()=>{if(a["right-icon"])return a["right-icon"]();if(e.isLink){const r=e.arrowDirection&&e.arrowDirection!=="right"?`arrow-${e.arrowDirection}`:"arrow";return c(te,{name:r,class:ie("right-icon")},null)}};return()=>{var r;const{tag:v,size:o,center:_,border:y,isLink:k,required:L}=e,w=(r=e.clickable)!=null?r:k,m={center:_,required:!!L,clickable:w,borderless:!y};return o&&(m[o]=!!o),c(v,{class:ie(m),role:w?"button":void 0,tabindex:w?0:void 0,onClick:i},{default:()=>{var E;return[b(),l(),n(),f(),(E=a.extra)==null?void 0:E.call(a)]}})}}});const Xt=ne(Yt);function nt(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function jt(e,a){if(nt(e)){if(a.required)return!1;if(a.validateEmpty===!1)return!0}return!(a.pattern&&!a.pattern.test(String(e)))}function Kt(e,a){return new Promise(i=>{const s=a.validator(e,a);if(ut(s)){s.then(i);return}i(s)})}function Ye(e,a){const{message:i}=a;return dt(i)?i(e,a):i||""}function Ut({target:e}){e.composing=!0}function Xe({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function Gt(e,a){const i=ct();e.style.height="auto";let s=e.scrollHeight;if(ft(a)){const{maxHeight:l,minHeight:n}=a;l!==void 0&&(s=Math.min(s,l)),n!==void 0&&(s=Math.max(s,n))}s&&(e.style.height=`${s}px`,st(i))}function Jt(e){return e==="number"?{type:"text",inputmode:"decimal"}:e==="digit"?{type:"tel",inputmode:"numeric"}:{type:e}}function N(e){return[...e].length}function Re(e,a){return[...e].slice(0,a).join("")}const[Qt,B]=ae("field"),De={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:H,max:Number,min:Number,formatter:Function,clearIcon:Y("clear"),modelValue:ce(""),inputAlign:String,placeholder:String,autocomplete:String,autocapitalize:String,autocorrect:String,errorMessage:String,enterkeyhint:String,clearTrigger:Y("focus"),formatTrigger:Y("onChange"),spellcheck:{type:Boolean,default:null},error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},Zt=ge({},at,De,{rows:H,type:Y("text"),rules:Array,autosize:[Boolean,Object],labelWidth:H,labelClass:Te,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var ea=F({name:Qt,props:Zt,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(e,{emit:a,slots:i}){const s=Ze(),l=Le({status:"unvalidated",focused:!1,validateMessage:""}),n=I(),b=I(),f=I(),{parent:r}=je(vt),v=()=>{var t;return String((t=e.modelValue)!=null?t:"")},o=t=>{if(p(e[t]))return e[t];if(r&&p(r.props[t]))return r.props[t]},_=P(()=>{const t=o("readonly");if(e.clearable&&!t){const g=v()!=="",h=e.clearTrigger==="always"||e.clearTrigger==="focus"&&l.focused;return g&&h}return!1}),y=P(()=>f.value&&i.input?f.value():e.modelValue),k=P(()=>{var t;const g=o("required");return g==="auto"?(t=e.rules)==null?void 0:t.some(h=>h.required):g}),L=t=>t.reduce((g,h)=>g.then(()=>{if(l.status==="failed")return;let{value:C}=y;if(h.formatter&&(C=h.formatter(C,h)),!jt(C,h)){l.status="failed",l.validateMessage=Ye(C,h);return}if(h.validator)return nt(C)&&h.validateEmpty===!1?void 0:Kt(C,h).then(V=>{V&&typeof V=="string"?(l.status="failed",l.validateMessage=V):V===!1&&(l.status="failed",l.validateMessage=Ye(C,h))})}),Promise.resolve()),w=()=>{l.status="unvalidated",l.validateMessage=""},m=()=>a("endValidate",{status:l.status,message:l.validateMessage}),E=(t=e.rules)=>new Promise(g=>{w(),t?(a("startValidate"),L(t).then(()=>{l.status==="failed"?(g({name:e.name,message:l.validateMessage}),m()):(l.status="passed",g(),m())})):g()}),T=t=>{if(r&&e.rules){const{validateTrigger:g}=r.props,h=Fe(g).includes(t),C=e.rules.filter(V=>V.trigger?Fe(V.trigger).includes(t):h);C.length&&E(C)}},X=t=>{var g;const{maxlength:h}=e;if(p(h)&&N(t)>+h){const C=v();if(C&&N(C)===+h)return C;const V=(g=n.value)==null?void 0:g.selectionEnd;if(l.focused&&V){const G=[...t],J=G.length-+h;return G.splice(V-J,J),G.join("")}return Re(t,+h)}return t},A=(t,g="onChange")=>{var h,C;const V=t;t=X(t);const G=N(V)-N(t);if(e.type==="number"||e.type==="digit"){const z=e.type==="number";t=ht(t,z,z),g==="onBlur"&&t!==""&&(t=Ce(+t,(h=e.min)!=null?h:-1/0,(C=e.max)!=null?C:1/0).toString())}let J=0;if(e.formatter&&g===e.formatTrigger){const{formatter:z,maxlength:O}=e;if(t=z(t),p(O)&&N(t)>+O&&(t=Re(t,+O)),n.value&&l.focused){const{selectionEnd:xe}=n.value,ze=Re(V,xe);J=N(z(ze))-N(ze)}}if(n.value&&n.value.value!==t)if(l.focused){let{selectionStart:z,selectionEnd:O}=n.value;if(n.value.value=t,p(z)&&p(O)){const xe=N(t);G?(z-=G,O-=G):J&&(z+=J,O+=J),n.value.setSelectionRange(Math.min(z,xe),Math.min(O,xe))}}else n.value.value=t;t!==e.modelValue&&a("update:modelValue",t)},d=t=>{t.target.composing||A(t.target.value)},M=()=>{var t;return(t=n.value)==null?void 0:t.blur()},le=()=>{var t;return(t=n.value)==null?void 0:t.focus()},j=()=>{const t=n.value;e.type==="textarea"&&e.autosize&&t&&Gt(t,e.autosize)},me=t=>{l.focused=!0,a("focus",t),re(j),o("readonly")&&M()},K=t=>{l.focused=!1,A(v(),"onBlur"),a("blur",t),!o("readonly")&&(T("onBlur"),re(j),mt())},W=t=>a("clickInput",t),q=t=>a("clickLeftIcon",t),be=t=>a("clickRightIcon",t),_e=t=>{fe(t),a("update:modelValue",""),a("clear",t)},we=P(()=>{if(typeof e.error=="boolean")return e.error;if(r&&r.props.showError&&l.status==="failed")return!0}),Pe=P(()=>{const t=o("labelWidth"),g=o("labelAlign");if(t&&g!=="top")return{width:Ne(t)}}),ye=t=>{t.keyCode===13&&(!(r&&r.props.submitOnEnter)&&e.type!=="textarea"&&fe(t),e.type==="search"&&M()),a("keypress",t)},ke=()=>e.id||`${s}-input`,Ve=()=>l.status,$e=()=>{const t=B("control",[o("inputAlign"),{error:we.value,custom:!!i.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(i.input)return c("div",{class:t,onClick:W},[i.input()]);const g={id:ke(),ref:n,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:t,disabled:o("disabled"),readonly:o("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,autocapitalize:e.autocapitalize,autocorrect:e.autocorrect,enterkeyhint:e.enterkeyhint,spellcheck:e.spellcheck,"aria-labelledby":e.label?`${s}-label`:void 0,onBlur:K,onFocus:me,onInput:d,onClick:W,onChange:Xe,onKeypress:ye,onCompositionend:Xe,onCompositionstart:Ut};return e.type==="textarea"?c("textarea",g,null):c("input",Ue(Jt(e.type),g),null)},u=()=>{const t=i["left-icon"];if(e.leftIcon||t)return c("div",{class:B("left-icon"),onClick:q},[t?t():c(te,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},S=()=>{const t=i["right-icon"];if(e.rightIcon||t)return c("div",{class:B("right-icon"),onClick:be},[t?t():c(te,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},x=()=>{if(e.showWordLimit&&e.maxlength){const t=N(v());return c("div",{class:B("word-limit")},[c("span",{class:B("word-num")},[t]),Ge("/"),e.maxlength])}},R=()=>{if(r&&r.props.showErrorMessage===!1)return;const t=e.errorMessage||l.validateMessage;if(t){const g=i["error-message"],h=o("errorMessageAlign");return c("div",{class:B("error-message",h)},[g?g({message:t}):t])}},$=()=>{const t=o("labelWidth"),g=o("labelAlign"),h=o("colon")?":":"";if(i.label)return[i.label(),h];if(e.label)return c("label",{id:`${s}-label`,for:i.input?void 0:ke(),onClick:C=>{fe(C),le()},style:g==="top"&&t?{width:Ne(t)}:void 0},[e.label+h])},U=()=>[c("div",{class:B("body")},[$e(),_.value&&c(te,{ref:b,name:e.clearIcon,class:B("clear")},null),S(),i.button&&c("div",{class:B("button")},[i.button()])]),x(),R()];return he({blur:M,focus:le,validate:E,formValue:y,resetValidation:w,getValidationStatus:Ve}),Et(gt,{customValue:f,resetValidation:w,validateWithTrigger:T}),Q(()=>e.modelValue,()=>{A(v()),w(),T("onChange"),re(j)}),Me(()=>{A(v(),e.formatTrigger),re(j)}),Be("touchstart",_e,{target:P(()=>{var t;return(t=b.value)==null?void 0:t.$el})}),()=>{const t=o("disabled"),g=o("labelAlign"),h=u(),C=()=>{const V=$();return g==="top"?[h,V].filter(Boolean):V||[]};return c(Xt,{size:e.size,class:B({error:we.value,disabled:t,[`label-${g}`]:g}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:Pe.value,valueClass:B("value"),titleClass:[B("label",[g,{required:k.value}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:h&&g!=="top"?()=>h:null,title:C,value:U,extra:i.extra})}}});const ta=ne(ea),[aa,na]=ae("divider"),la={dashed:Boolean,hairline:ee,vertical:Boolean,contentPosition:Y("center")};var ia=F({name:aa,props:la,setup(e,{slots:a}){return()=>{var i;return c("div",{role:"separator",class:na({dashed:e.dashed,hairline:e.hairline,vertical:e.vertical,[`content-${e.contentPosition}`]:!!a.default&&!e.vertical})},[!e.vertical&&((i=a.default)==null?void 0:i.call(a))])}}});const oa=ne(ia),[ra,ue]=ae("notice-bar"),ca={text:String,mode:String,color:String,delay:ce(1),speed:ce(60),leftIcon:String,wrapable:Boolean,background:String,scrollable:{type:Boolean,default:null}};var sa=F({name:ra,props:ca,emits:["close","replay"],setup(e,{emit:a,slots:i}){let s=0,l=0,n;const b=I(),f=I(),r=Le({show:!0,offset:0,duration:0}),v=()=>{if(i["left-icon"])return i["left-icon"]();if(e.leftIcon)return c(te,{class:ue("left-icon"),name:e.leftIcon},null)},o=()=>{if(e.mode==="closeable")return"cross";if(e.mode==="link")return"arrow"},_=m=>{e.mode==="closeable"&&(r.show=!1,a("close",m))},y=()=>{if(i["right-icon"])return i["right-icon"]();const m=o();if(m)return c(te,{name:m,class:ue("right-icon"),onClick:_},null)},k=()=>{r.offset=s,r.duration=0,_t(()=>{oe(()=>{r.offset=-l,r.duration=(l+s)/+e.speed,a("replay")})})},L=()=>{const m=e.scrollable===!1&&!e.wrapable,E={transform:r.offset?`translateX(${r.offset}px)`:"",transitionDuration:`${r.duration}s`};return c("div",{ref:b,role:"marquee",class:ue("wrap")},[c("div",{ref:f,style:E,class:[ue("content"),{"van-ellipsis":m}],onTransitionend:k},[i.default?i.default():e.text])])},w=()=>{const{delay:m,speed:E,scrollable:T}=e,X=p(m)?+m*1e3:0;s=0,l=0,r.offset=0,r.duration=0,clearTimeout(n),n=setTimeout(()=>{if(!b.value||!f.value||T===!1)return;const A=We(b).width,d=We(f).width;(T||d>A)&&oe(()=>{s=A,l=d,r.offset=-l,r.duration=l/+E})},X)};return Qe(w),bt(w),Be("pageshow",w),he({reset:w}),Q(()=>[e.text,e.scrollable],w),()=>{const{color:m,wrapable:E,background:T}=e;return Lt(c("div",{role:"alert",class:ue({wrapable:E}),style:{color:m,background:T}},[v(),L(),y()]),[[Pt,r.show]])}}});const ua=ne(sa),[da,de,fa]=ae("search"),va=ge({},De,{label:String,shape:Y("square"),leftIcon:Y("search"),clearable:ee,actionText:String,background:String,showAction:Boolean});var ga=F({name:da,props:va,emits:["blur","focus","clear","search","cancel","clickInput","clickLeftIcon","clickRightIcon","update:modelValue"],setup(e,{emit:a,slots:i,attrs:s}){const l=Ze(),n=I(),b=()=>{i.action||(a("update:modelValue",""),a("cancel"))},f=d=>{d.keyCode===13&&(fe(d),a("search",e.modelValue))},r=()=>e.id||`${l}-input`,v=()=>{if(i.label||e.label)return c("label",{class:de("label"),for:r()},[i.label?i.label():e.label])},o=()=>{if(e.showAction){const d=e.actionText||fa("cancel");return c("div",{class:de("action"),role:"button",tabindex:0,onClick:b},[i.action?i.action():d])}},_=()=>{var d;return(d=n.value)==null?void 0:d.blur()},y=()=>{var d;return(d=n.value)==null?void 0:d.focus()},k=d=>a("blur",d),L=d=>a("focus",d),w=d=>a("clear",d),m=d=>a("clickInput",d),E=d=>a("clickLeftIcon",d),T=d=>a("clickRightIcon",d),X=Object.keys(De),A=()=>{const d=ge({},s,qe(e,X),{id:r()}),M=le=>a("update:modelValue",le);return c(ta,Ue({ref:n,type:"search",class:de("field",{"with-message":d.errorMessage}),border:!1,onBlur:k,onFocus:L,onClear:w,onKeypress:f,onClickInput:m,onClickLeftIcon:E,onClickRightIcon:T,"onUpdate:modelValue":M},d),qe(i,["left-icon","right-icon"]))};return he({focus:y,blur:_}),()=>{var d;return c("div",{class:de({"show-action":e.showAction}),style:{background:e.background}},[(d=i.left)==null?void 0:d.call(i),c("div",{class:de("content",e.shape)},[v(),A()]),o()])}}});const ha=ne(ga),ma=()=>It.get("/page/detail",{headers:{platform:"H5"}}),ba=["src"],_a={class:"info"},wa=F({__name:"productPage",props:{productList:{type:Array,default:()=>[]}},setup(e){const a=e;return(i,s)=>(Z(!0),ve(Ee,null,Ae(a.productList,l=>(Z(),ve("div",{class:"box",key:l.goods_id},[D("img",{src:l.goods_image,alt:""},null,8,ba),D("div",_a,[D("span",null,Ie(l.goods_name),1),D("span",null," 已售"+Ie(l.goods_sales)+"件 ",1),D("span",null,[D("span",null," ￥"+Ie(l.goods_price_min),1),D("span",{class:Vt({hidden:l.line_price_max==="0.00"})},[D("del",null,"￥"+Ie(l.line_price_max),1)],2)])])]))),128))}}),ya=Je(wa,[["__scopeId","data-v-198d3c98"]]),ka=["src"],xa=["src"],Ia={class:"box"},Sa=F({__name:"HomePage",setup(e){const a=I(""),i=I([]),s=I(""),l=I([]),n=I(""),b=I([]);return ma().then(f=>{a.value=f.data.data.pageData.items[0].params.placeholder,i.value=f.data.data.pageData.items[1].data,s.value=f.data.data.pageData.items[2].params.text,l.value=f.data.data.pageData.items[3].data,n.value=f.data.data.pageData.items[4].data[0].imgUrl,b.value=f.data.data.pageData.items[6].data}),(f,r)=>{const v=xt,o=kt,_=ha,y=Wt,k=pt,L=ua,w=yt,m=wt,E=oa;return Z(),ve(Ee,null,[c(o,null,{default:se(()=>[c(v,{title:"智慧商城"})]),_:1}),c(_,{placeholder:a.value,background:"#f1f1f2"},null,8,["placeholder"]),c(k,{class:"my-swipe",autoplay:1e3,"indicator-color":"white","lazy-render":""},{default:se(()=>[(Z(!0),ve(Ee,null,Ae(i.value,T=>(Z(),He(y,{key:T.imgName},{default:se(()=>[D("img",{src:T.imgUrl,alt:""},null,8,ka)]),_:2},1024))),128))]),_:1}),c(L,{scrollable:"","left-icon":"volume-o",text:s.value},null,8,["text"]),c(m,{"column-num":5},{default:se(()=>[(Z(!0),ve(Ee,null,Ae(l.value,T=>(Z(),He(w,{key:T.imgName,icon:T.imgUrl,text:T.text},null,8,["icon","text"]))),128))]),_:1}),D("img",{src:n.value,alt:""},null,8,xa),c(E,{style:{color:"#000",borderColor:"#000",padding:"0 16px"}},{default:se(()=>r[0]||(r[0]=[Ge(" 猜你喜欢 ")])),_:1}),D("div",Ia,[c(ya,{productList:b.value},null,8,["productList"])])],64)}}}),Aa=Je(Sa,[["__scopeId","data-v-2398ce58"]]);export{Aa as default};
