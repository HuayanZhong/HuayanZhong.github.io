import{k as p,Q as a}from"./index-CoLxLmKc.js";function m(l,{args:t=[],done:i,canceled:s,error:o}){if(l){const f=l.apply(null,t);p(f)?f.then(r=>{r?i():s&&s()}).catch(o||a):f?i():s&&s()}else i()}export{m as c};
