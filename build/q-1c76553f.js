import{t as lt,j as Z,k as j,Q as $,r as tt,m as et,l as ot,n as B,o as ct,q as ut,v as _t,w as T,x as D,y as dt,z as mt,A as vt,B as pt,c as ft,C as yt,d as ht,D as Et,R as St,e as Ct,f as Lt,h as Rt,i as gt}from"./q-35b72284.js";import{e as r,u as rt,l as nt,m as wt,n as It,o as Dt,p as Pt,r as bt,i as H,s as At,j as M,k as E,t as qt,d as Tt,q as N,S as kt,v as Ot}from"./q-ad056fda.js";const Vt=":root{view-transition-name:none}";const a=()=>r(()=>import("./q-39bd8167.js"),[]),J=[["/",[a,()=>r(()=>import("./q-830364d0.js"),[])]],["about/",[a,()=>r(()=>import("./q-3ce5b126.js"),[])]],["automation/",[a,()=>r(()=>import("./q-aa43b215.js"),[])]],["blogs/",[a,()=>r(()=>import("./q-1550d82f.js"),[])]],["checklist/",[a,()=>r(()=>import("./q-478a0f20.js"),[])]],["framework/",[a,()=>r(()=>import("./q-9a5360a7.js"),[])]],["infra/",[a,()=>r(()=>import("./q-bfd03258.js"),[])]],["research/",[a,()=>r(()=>import("./q-2f9dd650.js"),[])]],["tools/",[a,()=>r(()=>import("./q-bdc795a1.js"),[])]],["automation/[slug]/",[a,()=>r(()=>import("./q-e5bc4b72.js"),[])]],["checklist/[title]/",[a,()=>r(()=>import("./q-77a3e3da.js"),[])]],["infra/[slug]/",[a,()=>r(()=>import("./q-50c0f623.js"),[])]],["tools/[slug]/",[a,()=>r(()=>import("./q-b0808ddd.js"),[])]]],X=[];const Y=!0;const xt=async(d,n)=>{const[S,R,s,g]=rt(),{type:c="link",forceReload:p=d===void 0,replaceState:f=!1,scroll:w=!0}=typeof n=="object"?n:{forceReload:n};if(typeof d=="number"){history.go(d);return}const u=s.value.dest,o=d===void 0?u:lt(d,g.url);if(!Z(o,u)){location.href=o.href;return}if(!p&&j(o,u)){{c==="link"&&o.href!==location.href&&history.pushState(null,"",o);const y=document.getElementById($)??document.documentElement;tt(c,o,new URL(location.href),y,et()),c==="popstate"&&(window._qCityScrollEnabled=!0)}return}return s.value={type:c,dest:o,forceReload:p,replaceState:f,scroll:w},ot(o,nt()),B(J,X,Y,o.pathname),S.value=void 0,g.isNavigating=!0,new Promise(y=>{R.r=y})},Ut=({track:d})=>{const[n,S,R,s,g,c,p,f,w,u,o]=rt();async function y(){var F;const[m,P]=d(()=>[u.value,n.value]),it=wt(""),b=o.url,v=P?"form":m.type,st=m.replaceState;let i,A,Q=null,k;{i=new URL(m.dest,location),i.pathname.endsWith("/")||(i.pathname+="/");let O=B(J,X,Y,i.pathname);k=nt();const V=A=await ot(i,k,{action:P,clearCache:!0});if(!V){u.untrackedValue={type:v,dest:i};return}const x=V.href,U=new URL(x,i);ct(U,i)||(i=U,O=B(J,X,Y,i.pathname));try{Q=await O}catch{window.location.href=x;return}}if(Q){const[O,V,x,U]=Q,q=x,at=q[q.length-1];o.prevUrl=b,o.url=i,o.params={...V},u.untrackedValue={type:v,dest:i};const I=ut(A,o,q,it);S.headings=at.headings,S.menu=U,R.value=It(q),s.links=I.links,s.meta=I.meta,s.styles=I.styles,s.scripts=I.scripts,s.title=I.title,s.frontmatter=I.frontmatter;{w.viewTransition!==!1&&(document.__q_view_transition__=!0);let K;v==="popstate"&&(K=et());const C=document.getElementById($)??document.documentElement;(m.scroll&&(!m.forceReload||!j(i,b))&&(v==="link"||v==="popstate")||v==="form"&&!j(i,b))&&(document.__q_scroll_restore__=()=>tt(v,i,b,C,K));const G=A==null?void 0:A.loaders,t=window;if(G&&Object.assign(p,G),_t.clear(),!t._qCitySPA){if(t._qCitySPA=!0,history.scrollRestoration="manual",t.addEventListener("popstate",()=>{t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),c(location.href,{type:"popstate"})}),t.removeEventListener("popstate",t._qCityInitPopstate),t._qCityInitPopstate=void 0,!t._qCityHistoryPatch){t._qCityHistoryPatch=!0;const l=history.pushState,h=history.replaceState,L=e=>(e===null||typeof e>"u"?e={}:(e==null?void 0:e.constructor)!==Object&&(e={_data:e}),e._qCityScroll=e._qCityScroll||D(C),e);history.pushState=(e,_,z)=>(e=L(e),l.call(history,e,_,z)),history.replaceState=(e,_,z)=>(e=L(e),h.call(history,e,_,z))}document.body.addEventListener("click",l=>{if(l.defaultPrevented)return;const h=l.target.closest("a[href]");if(h&&!h.hasAttribute("preventdefault:click")){const L=h.getAttribute("href"),e=new URL(location.href),_=new URL(L,e);if(Z(_,e)&&j(_,e)){if(l.preventDefault(),!_.hash&&!_.href.endsWith("#")){_.href!==e.href&&history.pushState(null,"",_),t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),T({...D(C),x:0,y:0}),location.reload();return}c(h.getAttribute("href"))}}}),document.body.removeEventListener("click",t._qCityInitAnchors),t._qCityInitAnchors=void 0,window.navigation||(document.addEventListener("visibilitychange",()=>{if(t._qCityScrollEnabled&&document.visibilityState==="hidden"){const l=D(C);T(l)}},{passive:!0}),document.removeEventListener("visibilitychange",t._qCityInitVisibility),t._qCityInitVisibility=void 0),t.addEventListener("scroll",()=>{t._qCityScrollEnabled&&(clearTimeout(t._qCityScrollDebounce),t._qCityScrollDebounce=setTimeout(()=>{const l=D(C);T(l),t._qCityScrollDebounce=void 0},200))},{passive:!0}),removeEventListener("scroll",t._qCityInitScroll),t._qCityInitScroll=void 0,(F=t._qCityBootstrap)==null||F.remove(),t._qCityBootstrap=void 0,dt.resolve()}if(v!=="popstate"){t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce);const l=D(C);T(l)}mt(window,v,b,i,st),Dt(k).then(()=>{var L;vt(k).setAttribute("q:route",O);const h=D(C);T(h),t._qCityScrollEnabled=!0,o.isNavigating=!1,(L=f.r)==null||L.call(f)})}}}y()},Ht=d=>{Pt(N(()=>r(()=>Promise.resolve().then(()=>W),void 0),"s_RPDJAz33WLA"));const n=pt();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data for help visit https://github.com/QwikDev/qwik/issues/6237");const S=bt("url");if(!S)throw new Error("Missing Qwik URL Env Data");const R=new URL(S),s=H({url:R,params:n.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),g={},c=At(H(n.response.loaders,{deep:!1})),p=M({type:"initial",dest:R,forceReload:!1,replaceState:!1,scroll:!0}),f=H(ft),w=H({headings:void 0,menu:void 0}),u=M(),o=n.response.action,y=o?n.response.loaders[o]:void 0,m=M(y?{id:o,data:n.response.formData,output:{result:y,status:n.response.status}}:void 0),P=N(()=>r(()=>Promise.resolve().then(()=>W),void 0),"s_fX0bDjeJa0E",[m,g,p,s]);return E(yt,w),E(ht,u),E(Et,f),E(St,s),E(Ct,P),E(Lt,c),E(Rt,m),E(gt,p),qt(N(()=>r(()=>Promise.resolve().then(()=>W),void 0),"s_02wMImzEAbk",[m,w,u,f,n,P,c,g,d,p,s])),Tt(kt,null,3,"qY_0")},W=Object.freeze(Object.defineProperty({__proto__:null,_hW:Ot,s_02wMImzEAbk:Ut,s_RPDJAz33WLA:Vt,s_TxCFOy819ag:Ht,s_fX0bDjeJa0E:xt},Symbol.toStringTag,{value:"Module"}));export{Ot as _hW,Ut as s_02wMImzEAbk,Vt as s_RPDJAz33WLA,Ht as s_TxCFOy819ag,xt as s_fX0bDjeJa0E};
