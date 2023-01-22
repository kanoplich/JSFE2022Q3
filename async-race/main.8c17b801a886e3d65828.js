(()=>{"use strict";var t,e,a,n,r={647:(t,e,a)=>{a.d(e,{Ag:()=>v,Bo:()=>p,DT:()=>o,H9:()=>u,IO:()=>_,MG:()=>h,P8:()=>m,Rn:()=>c,ix:()=>b,p6:()=>w,tD:()=>l,yQ:()=>y});const n="http://127.0.0.1:3000",r=`${n}/garage`,i=`${n}/engine`,s=`${n}/winners`,c=async(t,e=7)=>{const a=await fetch(`${r}?_page=${t}&_limit=${e}`);return{items:await a.json(),count:a.headers.get("X-Total-Count")}},d=async t=>(await fetch(`${r}/${t}`)).json(),o=async t=>{const e=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});await e.json()},l=async t=>{const e=await fetch(`${r}/${t}`,{method:"DELETE"});await e.json()},p=async(t,e)=>{const a=await fetch(`${r}/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});await a.json()},u=async t=>(await fetch(`${s}/${t}`)).json(),b=async(t,e=10)=>{const a=await fetch(`${s}?_page=${t}&_limit=${e}`),n=await a.json();return{items:await Promise.all(n.map((async t=>({...t,car:await d(t.id)})))),count:a.headers.get("X-Total-Count")}},_=async(t,e)=>{const a=await fetch(`${s}/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});await a.json()},m=async t=>{const e=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});await e.json()},h=async t=>(await fetch(`${s}/${t}`)).status,w=async t=>(await fetch(`${i}?id=${t}&status=started`,{method:"PATCH"})).json(),y=async t=>(await fetch(`${i}?id=${t}&status=stopped`,{method:"PATCH"})).json(),v=async t=>{const e=await fetch(`${i}?id=${t}&status=drive`,{method:"PATCH"}).catch();return 200!==e.status?{success:!1}:{...await e.json()}}},4:(t,e,a)=>{function n(t,e,a){const n=document.createElement(e);return n.classList.add(a),n.innerText=t,n}a.d(e,{Nf:()=>c,Y:()=>l,az:()=>n,bX:()=>p,cz:()=>d,qG:()=>o,sM:()=>u});const r=["BMW","AUDI","TESLA","OPEL","FORD","JAGUAR","MAZDA","SKODA","VOLKSWAGEN","VOLVO"],i=["M5","S7","Model S","Insignia","Mustang","S-Type","RX-7","Superb","Golf GTI","XC90"];function s(){return Math.floor(10*Math.random())}const c=()=>`${r[s()]} ${i[s()]}`,d=()=>`#${s()}${s()}${s()}${s()}${s()}${s()}`,o=(t,e)=>{const a=t,n=document.querySelector(".car__flag").offsetLeft-30;a.style.transition=`transform ${e}ms linear`,a.style.transform=`translateX(${n}px)`},l=t=>{const e=t,a=window.getComputedStyle(t);e.style.transition="transform 0ms linear",e.style.transform=`${a.transform}`},p=t=>{const e=t;e.style.transform="translateX(0px)",e.style.transition="transform 0ms linear"},u=(t,e)=>{const a=document.querySelector(".winner");a.innerText=`${t} first ${(e/1e3).toFixed(2)}s!`,a.style.display="block",window.addEventListener("click",(()=>{a.style.display="none"}))}},607:(t,e,a)=>{a.a(t,(async(t,e)=>{try{var n=a(562),r=t([n]);(0,(n=(r.then?(await r)():r)[0]).O3)(),e()}catch(t){e(t)}}))},562:(t,e,a)=>{a.a(t,(async(t,n)=>{try{a.d(e,{O3:()=>h});var r=a(4),i=a(647);const t={name:"",color:"#e66465"},s={name:"",color:"#e66465"},c={name:"",color:""},d={id:0},o={id:0,wins:0,time:0},{items:l,count:p}=await(0,i.Rn)(1),u={car:l,countCars:p,page:1},b=async()=>{const{items:t,count:e}=await(0,i.Rn)(u.page);u.car=t,u.countCars=e},_=t=>`\n  <?xml version="1.0" standalone="no"?>\n  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"\n   "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">\n  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"\n   width="70.000000pt" height="30.000000pt" viewBox="0 0 1280.000000 640.000000"\n   preserveAspectRatio="xMidYMid meet">\n  <metadata>\n  Created by potrace 1.15, written by Peter Selinger 2001-2017\n  </metadata>\n  <g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"\n  fill="${t}" stroke="none">\n  <path d="M3525 5341 c-72 -18 -79 -28 -90 -121 -4 -30 -11 -62 -16 -71 -4 -9\n  -97 -51 -206 -94 -774 -304 -1348 -540 -1603 -661 -163 -77 -222 -91 -421\n  -104 -85 -5 -170 -14 -189 -20 -101 -32 -362 -58 -620 -63 l-115 -2 -47 -80\n  c-47 -78 -47 -80 -29 -100 34 -36 35 -77 5 -177 -30 -99 -34 -178 -19 -370 5\n  -67 4 -88 -6 -88 -29 0 -83 -56 -110 -114 -50 -106 -74 -343 -48 -467 13 -58\n  13 -62 3 -159 -5 -54 16 -238 28 -244 2 -1 29 -20 61 -41 73 -49 123 -103 132\n  -143 17 -79 167 -155 355 -181 104 -15 969 -97 1087 -104 l32 -2 5 160 c7 230\n  50 394 146 559 281 479 917 673 1405 429 316 -159 530 -424 598 -742 22 -106\n  29 -365 13 -519 l-8 -82 3002 0 c2855 0 3002 1 2995 18 -33 87 -56 325 -45\n  461 28 320 177 567 459 759 399 273 847 282 1243 24 239 -157 397 -392 460\n  -687 18 -84 15 -341 -5 -430 -8 -38 -14 -71 -12 -73 7 -8 386 20 478 34 180\n  28 253 65 304 152 24 41 28 57 28 127 -1 44 -9 117 -20 163 -18 79 -18 88 -2\n  190 31 199 40 306 41 497 1 176 -1 195 -23 260 -46 135 -103 190 -283 274\n  -222 104 -633 220 -1168 330 -523 108 -1524 210 -2054 211 l-229 0 -236 139\n  c-813 477 -1593 884 -1852 966 -498 157 -1598 195 -2892 100 l-188 -14 -47 30\n  c-92 58 -223 89 -297 70z m1912 -311 c13 -45 58 -305 88 -515 33 -226 74 -539\n  71 -542 -7 -7 -1672 40 -2054 58 -357 16 -464 56 -573 215 -62 91 -87 225 -59\n  326 12 40 56 74 192 148 369 198 799 289 1618 340 246 15 290 16 510 16 l194\n  -1 13 -45z m649 10 c383 -36 717 -86 934 -139 210 -52 451 -163 720 -332 141\n  -88 379 -259 380 -271 0 -5 -14 -8 -32 -8 -48 0 -114 -37 -140 -78 -24 -39\n  -30 -113 -15 -189 l9 -43 -904 0 -904 0 -176 540 -175 540 47 0 c25 0 141 -9\n  256 -20z"/>\n  <path d="M2617 3125 c-431 -82 -774 -440 -838 -875 -17 -117 -7 -292 24 -410\n  113 -436 497 -751 947 -777 507 -29 959 313 1076 813 28 117 26 348 -4 467\n  -94 378 -383 670 -760 768 -105 27 -336 34 -445 14z m378 -310 c84 -21 209\n  -85 280 -142 116 -94 210 -242 251 -393 23 -87 24 -260 0 -355 -58 -237 -242\n  -439 -473 -519 -531 -186 -1074 277 -969 828 30 152 94 274 206 386 111 110\n  237 178 385 206 84 16 235 11 320 -11z"/>\n  <path d="M2918 2568 c2 -90 7 -167 12 -172 17 -17 108 58 201 166 l51 57 -48\n  31 c-52 33 -131 65 -185 75 l-34 6 3 -163z"/>\n  <path d="M2591 2700 c-62 -22 -167 -82 -164 -94 3 -13 237 -216 249 -216 7 0\n  15 7 18 16 8 20 8 127 -1 232 -7 95 -8 96 -102 62z"/>\n  <path d="M3209 2355 c-57 -64 -105 -123 -107 -131 -6 -25 46 -35 157 -29 58 3\n  121 8 139 11 33 5 34 6 27 42 -7 44 -64 167 -92 201 l-19 24 -105 -118z"/>\n  <path d="M2260 2409 c-31 -44 -68 -133 -77 -186 l-6 -33 155 0 c165 0 201 9\n  181 44 -13 24 -204 216 -214 216 -5 0 -22 -18 -39 -41z"/>\n  <path d="M2786 2354 c-36 -35 0 -87 44 -64 26 14 26 56 1 70 -25 13 -27 13\n  -45 -6z"/>\n  <path d="M2751 2186 c-57 -32 -68 -111 -22 -157 43 -42 101 -43 143 -1 42 42\n  41 100 -1 143 -33 32 -78 38 -120 15z"/>\n  <path d="M2560 2136 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20\n  -54 2z"/>\n  <path d="M3002 2124 c-27 -19 -28 -36 -3 -58 25 -23 61 -6 61 29 0 33 -30 49\n  -58 29z"/>\n  <path d="M2245 1993 c-77 -6 -76 -5 -59 -65 16 -55 61 -146 92 -186 l18 -23\n  103 122 c57 67 104 129 105 138 1 14 -14 16 -104 17 -58 0 -127 -1 -155 -3z"/>\n  <path d="M3165 1981 c-44 -4 -61 -10 -63 -22 -3 -16 210 -229 228 -229 22 0\n  86 141 105 228 l7 32 -109 -2 c-59 -1 -135 -4 -168 -7z"/>\n  <path d="M2776 1914 c-19 -18 -19 -20 -6 -45 6 -11 21 -19 35 -19 20 0 45 24\n  45 44 0 10 -32 36 -45 36 -7 0 -21 -7 -29 -16z"/>\n  <path d="M2589 1743 c-86 -90 -139 -151 -139 -162 0 -25 179 -101 236 -101\n  l27 0 -7 143 c-9 166 -13 187 -35 187 -9 0 -46 -30 -82 -67z"/>\n  <path d="M2936 1801 c-6 -10 -24 -168 -29 -258 -3 -60 -2 -63 19 -63 79 0 262\n  68 248 92 -5 7 -53 64 -108 126 -93 105 -117 124 -130 103z"/>\n  <path d="M10723 3125 c-318 -58 -597 -266 -743 -555 -223 -441 -98 -996 289\n  -1288 112 -84 188 -125 311 -166 274 -91 545 -70 802 61 552 282 735 983 392\n  1500 -225 339 -651 521 -1051 448z m385 -315 c348 -98 579 -443 532 -796 -67\n  -508 -596 -796 -1055 -574 -239 116 -396 352 -412 620 -20 335 192 640 516\n  745 122 40 289 42 419 5z"/>\n  <path d="M11017 2568 c3 -90 9 -167 14 -172 13 -14 53 18 155 122 l95 97 -23\n  18 c-50 40 -189 97 -235 97 -10 0 -11 -33 -6 -162z"/>\n  <path d="M10705 2706 c-50 -16 -133 -58 -163 -82 l-23 -19 121 -107 c67 -60\n  128 -108 135 -108 23 0 27 39 20 186 -8 162 -4 157 -90 130z"/>\n  <path d="M11307 2354 c-59 -65 -107 -126 -107 -136 0 -11 11 -18 38 -22 44 -7\n  278 7 289 17 15 16 -51 183 -94 236 l-19 24 -107 -119z"/>\n  <path d="M10362 2413 c-39 -62 -70 -134 -78 -184 l-7 -39 152 0 c86 0 161 5\n  172 10 17 10 18 13 5 38 -8 15 -59 71 -114 125 l-99 99 -31 -49z"/>\n  <path d="M10888 2359 c-24 -14 -23 -56 2 -69 44 -23 80 29 44 64 -18 19 -23\n  19 -46 5z"/>\n  <path d="M10851 2187 c-49 -29 -66 -101 -35 -146 9 -13 32 -29 50 -37 29 -12\n  39 -12 68 0 99 41 85 180 -19 192 -24 3 -50 -1 -64 -9z"/>\n  <path d="M10660 2136 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20\n  -54 2z"/>\n  <path d="M11096 2124 c-9 -8 -16 -22 -16 -29 0 -13 26 -45 36 -45 20 0 44 25\n  44 45 0 14 -8 29 -19 35 -25 13 -27 13 -45 -6z"/>\n  <path d="M10335 1991 c-60 -6 -60 -6 -57 -36 9 -69 104 -248 122 -229 57 61\n  210 250 207 258 -4 12 -176 17 -272 7z"/>\n  <path d="M11267 1983 c-68 -5 -79 -19 -47 -60 23 -31 200 -193 210 -193 3 0\n  20 24 37 53 29 48 52 111 67 180 l6 27 -107 -2 c-60 -1 -134 -3 -166 -5z"/>\n  <path d="M10870 1910 c-16 -31 4 -62 38 -58 21 2 28 9 30 32 5 45 -47 65 -68\n  26z"/>\n  <path d="M10651 1703 c-56 -59 -101 -113 -101 -120 0 -28 172 -103 237 -103\n  l26 0 -7 123 c-10 179 -15 207 -36 207 -10 0 -63 -48 -119 -107z"/>\n  <path d="M11035 1801 c-7 -12 -23 -144 -29 -243 -4 -77 -4 -78 19 -78 45 0\n  130 22 193 51 l64 29 -19 23 c-65 82 -198 227 -209 227 -7 0 -15 -4 -19 -9z"/>\n  </g>\n  </svg>\n`,m=(t,e)=>{const a=(0,r.az)("","div","car__wrapper"),n=(0,r.az)("","div","car__wrapper_btn"),c=(0,r.az)("Select","button","car__select"),o=(0,r.az)("Remove","button","car__remove"),l=(0,r.az)(`${e.name}`,"span","car__name"),p=(0,r.az)("","div","car__control_wrapper"),u=(0,r.az)("a","button","car__start"),m=(0,r.az)("b","button","car__stop");m.setAttribute("disabled","disabled");const w=(0,r.az)("","div","car__img");w.setAttribute("id",`car__image_${e.id}`),w.innerHTML=`${_(e.color)}`;const y=(0,r.az)("","img","car__flag");y.setAttribute("src","img/flag.svg"),y.setAttribute("alt","flag");const v=(0,r.az)("","div","car__road");t.appendChild(a),a.appendChild(n),a.appendChild(p),a.append(v),n.append(c,o,l),p.append(u,m,w,y),o.addEventListener("click",(async()=>{await(0,i.tD)(e.id),await b(),await h()})),c.addEventListener("click",(async()=>{d.id=e.id;const t=document.querySelector(".update__name"),a=document.querySelector(".update__color"),n=document.querySelector(".update__car_btn");t.removeAttribute("disabled"),t.value=e.name,a.value=e.color,s.name=t.value,s.color=a.value,a.removeAttribute("disabled"),n.removeAttribute("disabled")})),u.addEventListener("click",(async()=>{u.setAttribute("disabled","disabled"),m.removeAttribute("disabled");const{velocity:t,distance:a}=await(0,i.p6)(e.id),n=Math.round(a/t);(0,r.qG)(w,n),(await(0,i.Ag)(e.id)).success||(0,r.Y)(w)})),m.addEventListener("click",(async()=>{m.setAttribute("disabled","disabled"),u.removeAttribute("disabled"),await(0,i.yQ)(e.id),(0,r.bX)(w)}))},h=async()=>{const e=document.body;e.innerHTML="";const a=(0,r.az)("","div","page__container"),n=(0,r.az)("","div","page__btn_wrapper"),l=(0,r.az)("to garage","button","to_garage_btn"),p=(0,r.az)("to winners","button","to_winners_btn"),_=(0,r.az)("","div","garage__btn_wrapper"),w=(0,r.az)("","div","create__car_wrapper"),y=(0,r.az)("","input","create__name");y.setAttribute("type","text"),y.value=t.name;const v=(0,r.az)("","input","create__color");v.setAttribute("type","color"),v.setAttribute("value",`${t.color}`);const z=(0,r.az)("create","button","create__car_btn"),f=(0,r.az)("","div","update__car_wrapper"),$=(0,r.az)("","input","update__name");$.setAttribute("type","text"),$.setAttribute("disabled","disabled"),$.value=s.name;const A=(0,r.az)("","input","update__color");A.setAttribute("type","color"),A.setAttribute("disabled","disabled"),A.setAttribute("value",`${s.color}`);const M=(0,r.az)("update","button","update__car_btn");M.setAttribute("type","button"),M.setAttribute("disabled","disabled");const E=(0,r.az)("","div","control__btn_wrapper"),S=(0,r.az)("race","button","control__race_btn"),L=(0,r.az)("reset","button","control__reset_btn");L.setAttribute("disabled","disabled");const T=(0,r.az)("generate car","button","control__generate_cars_btn"),C=(0,r.az)(`Garage (${u.countCars})`,"span","garage__title"),x=(0,r.az)(`Page #${u.page}`,"span","garage__page__number"),k=(0,r.az)("","span","winner");e.append(k),e.appendChild(a),a.appendChild(n),a.appendChild(_),a.appendChild(E),a.append(C,x),n.append(l,p),_.appendChild(w),_.appendChild(f),w.append(y,v,z),f.append($,A,M),E.append(S,L,T);const P=(0,r.az)("prev","button","prev__btn"),O=(0,r.az)("next","button","next__btn");if(P.setAttribute("disabled","disabled"),O.setAttribute("disabled","disabled"),Number(u.countCars)>7&&O.removeAttribute("disabled"),1!==u.page&&P.removeAttribute("disabled"),p.addEventListener("click",(async()=>{e.innerHTML="",await g()})),u.car.length)for(let t=0;t<u.car.length;t+=1)m(a,u.car[t]);O.addEventListener("click",(async()=>{const t=Number((await(0,i.Rn)(1)).count);t>7&&Math.ceil(t/7)>u.page&&(u.page+=1,await(0,i.Rn)(u.page),await b(),await h())})),P.addEventListener("click",(async()=>{1!==u.page&&(u.page-=1,await(0,i.Rn)(u.page),await b(),await h())})),a.append(P,O),y.addEventListener("input",(()=>{t.name=y.value})),v.addEventListener("change",(()=>{t.color=v.value})),$.addEventListener("input",(()=>{s.name=$.value})),A.addEventListener("change",(()=>{s.color=A.value})),z.addEventListener("click",(async()=>{t.name&&t.color&&(await(0,i.DT)(t),await b(),t.name="",await h())})),M.addEventListener("click",(async()=>{0!==d.id&&(await(0,i.Bo)(d.id,s),await b(),d.id=0,s.name="",await h())})),T.addEventListener("click",(async()=>{T.setAttribute("disabled","disabled");let t=0;const e=[];for(;t<100;)t+=1,c.name=(0,r.Nf)(),c.color=(0,r.cz)(),e.push(JSON.parse(JSON.stringify(c)));await Promise.all(e.map((async t=>(0,i.DT)(t)))),await b(),await h()})),S.addEventListener("click",(async()=>{S.setAttribute("disabled","disabled"),L.removeAttribute("disabled"),document.querySelectorAll(".car__start").forEach((t=>t.setAttribute("disabled","disabled"))),document.querySelectorAll(".car__stop").forEach((t=>t.removeAttribute("disabled")));let t=!0;const{items:e}=await(0,i.Rn)(u.page),a=await Promise.all(e.map((async t=>(0,i.p6)(t.id))));for(let n=0;n<a.length;n+=1){const s=Math.round(a[n].distance/a[n].velocity),c=document.querySelector(`#car__image_${e[n].id}`);(0,i.Ag)(e[n].id).then((async a=>{if(a.success||(0,r.Y)(c),a.success&&t)if(t=!1,(0,r.sM)(e[n].name,s),404===await(0,i.MG)(e[n].id))o.id=e[n].id,o.wins=1,o.time=Number((s/1e3).toFixed(2)),await(0,i.P8)(o);else{const t=await(0,i.H9)(e[n].id);o.id=e[n].id,o.wins=await t.wins+1,o.time=Number((s/1e3).toFixed(2))<t.time?Number((s/1e3).toFixed(2)):t.time,await(0,i.IO)(e[n].id,o)}})),(0,r.qG)(c,s)}})),L.addEventListener("click",(async()=>{L.setAttribute("disabled","disabled"),S.removeAttribute("disabled"),document.querySelectorAll(".car__stop").forEach((t=>t.setAttribute("disabled","disabled"))),document.querySelectorAll(".car__start").forEach((t=>t.removeAttribute("disabled")));const{items:t}=await(0,i.Rn)(u.page);t.forEach((async t=>{await(0,i.yQ)(t.id);const e=document.querySelector(`#car__image_${t.id}`);e.style.transform="translateX(0px)",e.style.transition="transform 0ms linear"}))}))};let w=1;const y=()=>"\n<thead>\n<tr>\n    <th>Number</th>\n    <th>Car</th>\n    <th>Name</th>\n    <th>Wins</th>\n    <th>Best time (seconds)</th>\n</tr>\n</thead>\n",v=async t=>{const e=t;e.innerHTML="";const a=await(0,i.ix)(w);for(let t=0;t<a.items.length;t+=1){const n=document.createElement("tr");e.appendChild(n);const r=e=>e-1==0?"":9!==t?e-1:e,i=e=>9!==t||1===e?t+1:0;n.innerHTML=`<td>${r(w)}${i(w)}</td>\n                    <td>${_(a.items[t].car.color)}</td>\n                    <td>${a.items[t].car.name}</td>\n                    <td>${a.items[t].wins}</td>\n                    <td>${a.items[t].time}</td>\n                    `}},g=async()=>{const t=await(0,i.ix)(w),e=document.body;e.innerHTML="";const a=(0,r.az)("","div","page__container"),n=(0,r.az)("","div","page__btn_wrapper"),s=(0,r.az)("to garage","button","to_garage_btn"),c=(0,r.az)("to winners","button","to_winners_btn"),d=(0,r.az)(`Winners (${t.count})`,"span","garage__title"),o=(0,r.az)(`Page #${w}`,"span","garage__page__number"),l=(0,r.az)("","table","table__sort"),p=document.createElement("tbody"),u=(0,r.az)("prev","button","prev__btn"),b=(0,r.az)("next","button","next__btn");u.setAttribute("disabled","disabled"),b.setAttribute("disabled","disabled"),Number(t.count)>10&&b.removeAttribute("disabled"),1!==w&&u.removeAttribute("disabled"),e.appendChild(a),a.appendChild(n),n.append(s,c),a.append(d,o),a.appendChild(l),l.innerHTML=y(),l.append(p),v(p),a.append(u,b),s.addEventListener("click",(async()=>{e.innerHTML="",await h()})),b.addEventListener("click",(async()=>{const e=Number(t.count);e>10&&Math.ceil(e/10)>w&&(w+=1,await(0,i.ix)(w),await v(p),o.innerText=`Page #${w}`)})),u.addEventListener("click",(async()=>{1!==w&&(w-=1,await(0,i.ix)(w),await v(p),o.innerText=`Page #${w}`)}))};n()}catch(t){n(t)}}),1)}},i={};function s(t){var e=i[t];if(void 0!==e)return e.exports;var a=i[t]={exports:{}};return r[t](a,a.exports,s),a.exports}t="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",a="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=t=>{t&&!t.d&&(t.d=1,t.forEach((t=>t.r--)),t.forEach((t=>t.r--?t.r++:t())))},s.a=(r,i,s)=>{var c;s&&((c=[]).d=1);var d,o,l,p=new Set,u=r.exports,b=new Promise(((t,e)=>{l=e,o=t}));b[e]=u,b[t]=t=>(c&&t(c),p.forEach(t),b.catch((t=>{}))),r.exports=b,i((r=>{var i;d=(r=>r.map((r=>{if(null!==r&&"object"==typeof r){if(r[t])return r;if(r.then){var i=[];i.d=0,r.then((t=>{s[e]=t,n(i)}),(t=>{s[a]=t,n(i)}));var s={};return s[t]=t=>t(i),s}}var c={};return c[t]=t=>{},c[e]=r,c})))(r);var s=()=>d.map((t=>{if(t[a])throw t[a];return t[e]})),o=new Promise((e=>{(i=()=>e(s)).r=0;var a=t=>t!==c&&!p.has(t)&&(p.add(t),t&&!t.d&&(i.r++,t.push(i)));d.map((e=>e[t](a)))}));return i.r?o:s()}),(t=>(t?l(b[a]=t):o(u),n(c)))),c&&(c.d=0)},s.d=(t,e)=>{for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s(607)})();