if(!self.define){let e,s={};const i=(i,f)=>(i=new URL(i+".js",f).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(f,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const d=e=>i(e,r),l={module:{uri:r},exports:t,require:d};s[r]=Promise.all(f.map((e=>l[e]||d(e)))).then((e=>(n(...e),t)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"header.bundle.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"index.html",revision:"19e84b3bc6c7a606251684ea33d6f6ff"},{url:"install.bundle.js",revision:"6427f6f2b7b32fc976656798ae66a151"},{url:"install.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"main.bundle.js",revision:"aca1008e6c3dcffa32932c210c3fd28a"},{url:"main.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"src-sw.js",revision:"ffcf30328f5518793dbc80436d06cc6f"}],{})}));
