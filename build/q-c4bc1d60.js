import{J as y,K as b,L as E}from"./q-35b72284.js";import{u as x,l as j,K as q,G as T}from"./q-ad056fda.js";const L=async function(...s){const[d,p,i,h,a]=x(),n=s.length>0&&s[0]instanceof AbortSignal?s.shift():void 0;{const c=j(),w=s.map(t=>t instanceof SubmitEvent&&t.target instanceof HTMLFormElement?new FormData(t.target):t instanceof Event||t instanceof Node?null:t),r=a.getHash();let l="";const f={...d,method:i,headers:{...p,"Content-Type":"application/qwik-json","X-QRL":r},signal:n},u=await q([a,...w]);i==="GET"?l+=`&${E}=${encodeURIComponent(u)}`:f.body=u;const e=await fetch(`${h}?${y}=${r}${l}`,f),o=e.headers.get("Content-Type");if(e.ok&&o==="text/qwik-json-stream"&&e.body)return async function*(){try{for await(const t of b(e.body,c??document.documentElement,n))yield t}finally{n!=null&&n.aborted||await e.body.cancel()}}();if(o==="application/qwik-json"){const t=await e.text(),m=await T(t,c??document.documentElement);if(e.status===500)throw m;return m}else if(o==="application/json"){const t=await e.json();if(e.status===500)throw t;return t}else if(o==="text/plain"||o==="text/html"){const t=await e.text();if(e.status===500)throw t;return t}}};export{L as s_SGytLJ8uq8I};
