export function createMarkup(data) {
    const {url} = data[0]; //деструктуризуємо властивість url  обєкта в масиві breeds. Масив містять лише 1 обєкт без імені, тому до нього звертаємося під індексом 0. 
    const{name, description, temperament}=data[0].breeds[0]; //деструктуризуємо властивості обєкта в масиві breeds, який у свою чергу знаходиться в масиві data. Обидва масиви містять лише по одному обєкту, тому до них звертаємося під індексом [0].

return `<div class="cat-card">
<img src="${url}" alt="${name} width="600" height="400>
<div class="cat-card-info">
    <h1>${name}</h1>
    <p>${description}</p>
    <p><span class="temperament">Temperament: </span> ${temperament}</p>
</div>
</div>` 
}     