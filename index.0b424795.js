function e(e){const n=new URLSearchParams({api_key:"live_KhQV1oKIS4BCvrcPDeozPUb3E9SMkjS0ykizMr5iBCwxr7OS8E0iDtuzHjzD1OGJ",breed_ids:e});return fetch(`https://api.thecatapi.com/v1/images/search?${n}`).then((e=>{if(!e.ok)throw new Errow("404 not found!");return e.json()}))}function n(e){const{url:n}=e[0],{name:t,description:r,temperament:o}=e[0].breeds[0];return`<div class="cat-card">\n<img src="${n}" alt="${t} width="600" height="400>\n<div class="cat-card-info">\n    <h1>${t}</h1>\n    <p>${r}</p>\n    <p><span class="temperament">Temperament: </span> ${o}</p>\n</div>\n</div>`}const t={breedSelect:document.querySelector(".breed-select"),loader:document.querySelector(".loader"),error:document.querySelector(".error"),catInfo:document.querySelector(".cat-info")};function r(r){t.loader.style.display="block";e(r.target.value).then((e=>{t.catInfo.innerHTML=n(e)})).catch((e=>{t.error.style.display="block",console.log(e)})).finally((()=>{t.loader.style.display="none",t.catInfo.style.display="block",t.error.style.display="none"}))}t.breedSelect.style.display="none",t.catInfo.style.display="none",t.loader.style.display="block",t.error.style.display="none",function(){const e=new URLSearchParams({api_key:"live_KhQV1oKIS4BCvrcPDeozPUb3E9SMkjS0ykizMr5iBCwxr7OS8E0iDtuzHjzD1OGJ"});return fetch(`https://api.thecatapi.com/v1/breeds?${e}`).then((e=>{if(!e.ok)throw new Errow("404 not found!");return e.json()}))}().then((e=>{t.breedSelect.innerHTML=e.map((e=>`<option value="${e.id}">${e.name}</option>`)).join(""),t.breedSelect.addEventListener("change",r)})).catch((e=>{t.error.style.display="block",console.log(e)})).finally((()=>{t.breedSelect.style.display="block",t.loader.style.display="none",t.error.style.display="none"}));
//# sourceMappingURL=index.0b424795.js.map