//HTTP-запити
//Використовуй публічний The Cat API. 



//Поки відбувається будь-який HTTP-запит, необхідно показувати завантажувач - елемент p.loader. Поки запитів немає або коли запит завершився, завантажувач необхідно приховувати. Використовуй для цього додаткові CSS класи.

//Якщо у користувача сталася помилка під час будь-якого HTTP-запиту, наприклад, впала мережа, була втрата пакетів тощо, тобто проміс було відхилено, необхідно відобразити елемент p.error, а при кожному наступному запиті приховувати його. Використовуй для цього додаткові CSS класи.

//Додай мінімальне оформлення елементів інтерфейсу.


//                           В И К О Н А Н Н Я

//import SlimSelect from 'slim-select'

import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";

const refs = {
    breedSelect: document.querySelector(".breed-select"),
    loader: document.querySelector(".loader"),
    error: document.querySelector(".error"),
    catInfo: document.querySelector(".cat-info"),
}
//new SlimSelect({
 //   select: '#breed'
 // })

refs.loader.style.display= "none";
refs.error.style.display= "none";
//refs.loader.classList.add("isHidden");
//refs.error.classList.add("isHidden");
//console.log(refs.loader.classList);

//Під час завантаження сторінки має виконуватися HTTP-запит за колекцією порід. Для цього необхідно виконати GET-запит на ресурс https://api.thecatapi.com/v1/breeds, що повертає масив об'єктів. У разі успішного запиту, необхідно наповнити select.breed-select опціями так, щоб value опції містило id породи, а в інтерфейсі користувачеві відображалася назва породи.

//При завантаженні сторінки в селект записуємо результат функції fetchBreeds. Під час обробки результату функції, ми map-ємо 
fetchBreeds()
    .then((breeds)=>{
        refs.breedSelect.innerHTML = breeds.map((breed)=>`<option value="${breed.id}">${breed.name}</option>`)
        .join("")
    })
    .catch((err)=>{
    refs.error.style.display= "block";
    //refs.error.classList.remove("isHidden");
    console.log(err);
    });


//Коли користувач обирає якусь опцію в селекті, необхідно виконувати запит за повною інформацією про кота на ресурс https://api.thecatapi.com/v1/images/search. Не забудь вказати в цьому запиті параметр рядка запиту breed_ids з ідентифікатором породи.
refs.breedSelect.addEventListener("change", handleSelect);

function handleSelect(event) {
    refs.loader.style.display= "block";
    //refs.loader.classList.remove("isHidden");
    const breedId = event.target.value;
    
    fetchCatByBreed(breedId)
        .then((data)=>{
        refs.catInfo.innerHTML = createMarkup(data);
        })
        .catch((err)=>{
        console.log(err)
        })
        .finally(()=>{
            refs.loader.style.display= "none";
            //refs.loader.classList.add("isHidden");
        })
    
    
}

function createMarkup(data) {
    const {url} = data[0];
    const{name, description, temperament}=data[0].breeds[0];

    return `<div class="cat-card">
    <img src="${url}" alt="${name} width="600" height="400>
    <div class="cat-card-info">
        <h1>${name}</h1>
        <p>${description}</p>
        <p><span class="temperament">Temperament: </span> ${temperament}</p>
        </div>
    </div>` 
}       
