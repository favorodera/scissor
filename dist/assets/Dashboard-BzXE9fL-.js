import{f as r,o as n,c as d,g as v,d as p,b as a,a as s,h,i as w,w as m,u as e,t as _,j as y,T as b,p as k,e as x}from"./index-ClxR7N0D.js";import{u as f}from"./authentication-Bh6ZLn2X.js";const $="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='20'%20width='20'%20viewBox='0%200%20512%20512'%3e%3cpath%20fill='%23c9ced6'%20d='M233.4%20406.6c12.5%2012.5%2032.8%2012.5%2045.3%200l192-192c12.5-12.5%2012.5-32.8%200-45.3s-32.8-12.5-45.3%200L256%20338.7%2086.6%20169.4c-12.5-12.5-32.8-12.5-45.3%200s-12.5%2032.8%200%2045.3l192%20192z'/%3e%3c/svg%3e",M="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M5%2012H19'%20stroke='%23c9ced6'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",S={},B={action:"",method:"get"},C=v('<div class="long-url-container" data-v-dab1fb14><label for="long-url" data-v-dab1fb14>Long URL</label><input type="url" name="long-url" id="long-url" placeholder="Enter Long URL" class="long-url-input" data-v-dab1fb14></div><div class="domain-container" data-v-dab1fb14><label for="domain" data-v-dab1fb14>Domain</label><input type="url" name="domain" id="domain" placeholder="Enter Domain" value="https://tinyurl.com" readonly class="domain-input" data-v-dab1fb14></div><div class="alias-container" data-v-dab1fb14><label for="alias" data-v-dab1fb14>Alias</label><input type="text" name="alias" id="alias" placeholder="Enter Alias" class="alias-input" data-v-dab1fb14></div><button type="submit" data-v-dab1fb14>Shorten</button>',4),I=[C];function O(c,t){return n(),d("form",B,I)}const U=r(S,[["render",O],["__scopeId","data-v-dab1fb14"]]),D="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='15'%20width='15'%20viewBox='0%200%20512%20512'%3e%3cpath%20fill='%23C9CED6'%20d='M464%20256A208%20208%200%201%201%2048%20256a208%20208%200%201%201%20416%200zM0%20256a256%20256%200%201%200%20512%200A256%20256%200%201%200%200%20256zM232%20120V256c0%208%204%2015.5%2010.7%2020l96%2064c11%207.4%2025.9%204.4%2033.3-6.7s4.4-25.9-6.7-33.3L280%20243.2V120c0-13.3-10.7-24-24-24s-24%2010.7-24%2024z'/%3e%3c/svg%3e",A={},E={class:"history-block"},L=v('<div class="qr-code-and-action-container" data-v-7b1e68cf><div class="qr-code" data-v-7b1e68cf><img src="" alt="" data-v-7b1e68cf></div><button class="delete-button" data-v-7b1e68cf>Delete</button></div><div class="other-history-block-details" data-v-7b1e68cf><div class="long-url" data-v-7b1e68cf><p class="long-url-header" data-v-7b1e68cf>Original:</p><p data-v-7b1e68cf>https://linkly.com/Bn41aCOlnxj</p></div><div class="short-url" data-v-7b1e68cf><p class="short-url-header" data-v-7b1e68cf>Shortened:</p><p data-v-7b1e68cf>https://linkly.com/Bn41aCOlnxj</p></div><div class="time" data-v-7b1e68cf><p class="time-header" data-v-7b1e68cf>Time:</p><p data-v-7b1e68cf>1 day ago</p></div><div class="clicks" data-v-7b1e68cf><p class="clicks-header" data-v-7b1e68cf>Clicks:</p><p data-v-7b1e68cf>1</p></div><div class="status" data-v-7b1e68cf><p class="status-header" data-v-7b1e68cf>Status:</p><p data-v-7b1e68cf>Active</p></div></div>',2),T=[L];function V(c,t){return n(),d("div",E,T)}const o=r(A,[["render",V],["__scopeId","data-v-7b1e68cf"]]),H=v('<div class="history-header-panel" data-v-e5226a36><div class="history-header-container" data-v-e5226a36><div class="history-icon" data-v-e5226a36><img src="'+D+'" alt="clock" data-v-e5226a36></div><p class="history-header" data-v-e5226a36>History</p></div></div>',1),j={class:"history-blocks-container"},z=p({__name:"History",setup(c){return(t,i)=>(n(),d("section",null,[H,a("div",j,[s(o),s(o),s(o),s(o),s(o),s(o),s(o),s(o),s(o)])]))}}),N=r(z,[["__scopeId","data-v-e5226a36"]]),q={key:0,class:"user-menu"},R={class:"user-info"},F={class:"user-image"},W=["src"],G={class:"user-details"},J={class:"username"},K={class:"user-email"},P=p({__name:"UserMenu",setup(c){const t=f(),i=h();return(g,l)=>(n(),w(b,{name:"user-menu",mode:"out-in"},{default:m(()=>[e(i).isUserMenuOpen===!0?(n(),d("div",q,[a("div",R,[a("div",F,[a("img",{src:e(t).userImage,alt:"user-image"},null,8,W)]),a("div",G,[a("p",J,_(e(t).username),1),a("p",K,_(e(t).userEmail),1)])]),a("button",{class:"sign-out-button",onClick:l[0]||(l[0]=(...u)=>e(t).logOut&&e(t).logOut(...u))},"Sign Out")])):y("",!0)]),_:1}))}}),Q=r(P,[["__scopeId","data-v-3445b739"]]),X=c=>(k("data-v-a57ea93a"),c=c(),x(),c),Y={class:"dashboard"},Z={class:"user-text-container"},aa=X(()=>a("p",{class:"welcome-text"},"Welcome",-1)),sa={class:"username"},ea={class:"menu-state-icon"},ta={key:0,src:$,alt:"down-arrow"},oa={key:1,src:M,alt:"minus"},ca=["aria-haspopup"],na=p({__name:"Dashboard",setup(c){const t=f(),i=h();return(g,l)=>(n(),d("section",Y,[a("nav",null,[a("div",{class:"user",onClick:l[0]||(l[0]=(...u)=>e(i).toggleUserMenu&&e(i).toggleUserMenu(...u))},[a("div",Z,[aa,a("p",sa,_(e(t).username),1)]),a("div",ea,[s(b,{name:"menu-state-icon",mode:"out-in"},{default:m(()=>[e(i).isUserMenuOpen===!1?(n(),d("img",ta)):(n(),d("img",oa))]),_:1})])])]),s(Q),a("main",{"aria-haspopup":e(i).isUserMenuOpen},[s(U),s(N)],8,ca)]))}}),la=r(na,[["__scopeId","data-v-a57ea93a"]]);export{la as default};
