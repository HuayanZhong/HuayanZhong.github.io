import{u as k}from"./use-placeholder-Fv3Yvx8G.js";import{c as D,n as I,t as s,N as f,_ as R,I as w,g as A,w as C}from"./index-CoLxLmKc.js";import{d as N,r as P,c as l}from"./index-45IKlSZ7.js";const[L,t]=D("nav-bar"),S={title:String,fixed:Boolean,zIndex:I,border:s,leftText:String,rightText:String,leftDisabled:Boolean,rightDisabled:Boolean,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,clickable:s};var _=N({name:L,props:S,emits:["clickLeft","clickRight"],setup(e,{emit:r,slots:a}){const n=P(),d=k(n,t),o=i=>{e.leftDisabled||r("clickLeft",i)},h=i=>{e.rightDisabled||r("clickRight",i)},g=()=>a.left?a.left():[e.leftArrow&&l(w,{class:t("arrow"),name:"arrow-left"},null),e.leftText&&l("span",{class:t("text")},[e.leftText])],b=()=>a.right?a.right():l("span",{class:t("text")},[e.rightText]),c=()=>{const{title:i,fixed:x,border:u,zIndex:v}=e,B=A(v),m=e.leftArrow||e.leftText||a.left,T=e.rightText||a.right;return l("div",{ref:n,style:B,class:[t({fixed:x}),{[R]:u,"van-safe-area-top":e.safeAreaInsetTop}]},[l("div",{class:t("content")},[m&&l("div",{class:[t("left",{disabled:e.leftDisabled}),e.clickable&&!e.leftDisabled?f:""],onClick:o},[g()]),l("div",{class:[t("title"),"van-ellipsis"]},[a.title?a.title():i]),T&&l("div",{class:[t("right",{disabled:e.rightDisabled}),e.clickable&&!e.rightDisabled?f:""],onClick:h},[b()])])])};return()=>e.fixed&&e.placeholder?d(c):c()}});const z=C(_);export{z as N};