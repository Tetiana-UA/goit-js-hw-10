function e(e){const t=new URLSearchParams({api_key:"live_KhQV1oKIS4BCvrcPDeozPUb3E9SMkjS0ykizMr5iBCwxr7OS8E0iDtuzHjzD1OGJ",breed_ids:e});return fetch(`https://api.thecatapi.com/v1/images/search?${t}`).then((e=>{if(!e.ok)throw new Errow("404 not found!");return e.json()}))}const t={breedSelect:document.querySelector(".breed-select"),loader:document.querySelector(".loader"),error:document.querySelector(".error"),catInfo:document.querySelector(".cat-info")};t.breedSelect.style.display="none",t.catInfo.style.display="none",t.loader.style.display="block",t.error.style.display="none",function(){const e=new URLSearchParams({api_key:"live_KhQV1oKIS4BCvrcPDeozPUb3E9SMkjS0ykizMr5iBCwxr7OS8E0iDtuzHjzD1OGJ"});return fetch(`https://api.thecatapi.com/v1/breeds?${e}`).then((e=>{if(!e.ok)throw new Errow("404 not found!");return e.json()}))}().then((e=>{t.breedSelect.innerHTML=e.map((e=>`<option value="${e.id}">${e.name}</option>`)).join("")})).catch((e=>{t.error.style.display="block",console.log(e)})).finally((()=>{t.breedSelect.style.display="block",t.loader.style.display="none"})),t.breedSelect.addEventListener("change",(function(n){t.loader.style.display="block";e(n.target.value).then((e=>{t.catInfo.innerHTML=function(e){const{url:t}=e[0],{name:n,description:r,temperament:o}=e[0].breeds[0];return`<div class="cat-card">\n    <img src="${t}" alt="${n} width="550" height="350>\n    <div class="cat-card-info">\n        <h1>${n}</h1>\n        <p>${r}</p>\n        <p><span class="temperament">Temperament: </span> ${o}</p>\n        </div>\n    </div>`}(e)})).catch((e=>{console.log(e)})).finally((()=>{t.loader.style.display="none",t.catInfo.style.display="block"}))}));
//# sourceMappingURL=index.e217dd16.js.map
