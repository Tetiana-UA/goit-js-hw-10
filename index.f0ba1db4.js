function e(e){const n=new URLSearchParams({api_key:"live_KhQV1oKIS4BCvrcPDeozPUb3E9SMkjS0ykizMr5iBCwxr7OS8E0iDtuzHjzD1OGJ",breed_ids:e});return fetch(`https://api.thecatapi.com/v1/images/search?${n}`).then((e=>{if(!e.ok)throw new Errow("404 not found!");return e.json()}))}const n={breedSelect:document.querySelector(".breed-select"),loader:document.querySelector(".loader"),error:document.querySelector(".error"),catInfo:document.querySelector(".cat-info")};n.loader.style.display="none",n.error.style.display="none",function(){const e=new URLSearchParams({api_key:"live_KhQV1oKIS4BCvrcPDeozPUb3E9SMkjS0ykizMr5iBCwxr7OS8E0iDtuzHjzD1OGJ"});return fetch(`https://api.thecatapi.com/v1/breeds?${e}`).then((e=>{if(!e.ok)throw new Errow("404 not found!");return e.json()}))}().then((e=>{n.breedSelect.innerHTML=e.map((e=>`<option value="${e.id}">${e.name}</option>`)).join("")})).catch((e=>{n.error.style.display="block",console.log(e)})),n.breedSelect.addEventListener("change",(function(t){n.loader.style.display="block";e(t.target.value).then((e=>{n.catInfo.innerHTML=function(e){const{url:n}=e[0],{name:t,description:r,temperament:o}=e[0].breeds[0];return`<div class="cat-card">\n    <img src="${n}" alt="${t} width="600" height="400>\n    <div class="cat-card-info">\n        <h1>${t}</h1>\n        <p>${r}</p>\n        <p><span class="temperament">Temperament: </span> ${o}</p>\n        </div>\n    </div>`}(e)})).catch((e=>{console.log(e)})).finally((()=>{n.loader.style.display="none"}))}));
//# sourceMappingURL=index.f0ba1db4.js.map
