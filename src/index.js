//HTTP-запити
//Використовуй публічний The Cat API. 



//Поки відбувається будь-який HTTP-запит, необхідно показувати завантажувач - елемент p.loader. Поки запитів немає або коли запит завершився, завантажувач необхідно приховувати. Використовуй для цього додаткові CSS класи.

//Якщо у користувача сталася помилка під час будь-якого HTTP-запиту, наприклад, впала мережа, була втрата пакетів тощо, тобто проміс було відхилено, необхідно відобразити елемент p.error, а при кожному наступному запиті приховувати його. Використовуй для цього додаткові CSS класи.

//Додай мінімальне оформлення елементів інтерфейсу.


//                           В И К О Н А Н Н Я

//Для використання ключа необхідно використовувати HTTP-заголовок x-api-key. Рекомендується використовувати axios та додати заголовок до всіх запитів.
import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_KhQV1oKIS4BCvrcPDeozPUb3E9SMkjS0ykizMr5iBCwxr7OS8E0iDtuzHjzD1OGJ";

import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";

const refs = {
    breedSelect: document.querySelector(".breed-select"),
    loader: document.querySelector(".loader"),
    error: document.querySelector(".error"),
    catInfo: document.querySelector(".cat-info"),
}

//Під час завантаження сторінки має виконуватися HTTP-запит за колекцією порід. Для цього необхідно виконати GET-запит на ресурс https://api.thecatapi.com/v1/breeds, що повертає масив об'єктів. У разі успішного запиту, необхідно наповнити select.breed-select опціями так, щоб value опції містило id породи, а в інтерфейсі користувачеві відображалася назва породи.


function onLoad() {
    fetchBreeds()
    .then(({breeds})=>{
    refs.breedSelect.innerHTML = createMarkupForSelect(breeds);
    })
    .catch((err)=>{
    console.log(err);
    })
    .finally(()=>refs.breedSelect.reset());
}
    console.log(onLoad());
       //breed.value=id!!!!!!!!


refs.breedSelect.addEventListener("submit", handleSubmit);

//Коли користувач обирає якусь опцію в селекті, необхідно виконувати запит за повною інформацією про кота на ресурс https://api.thecatapi.com/v1/images/search. Не забудь вказати в цьому запиті параметр рядка запиту breed_ids з ідентифікатором породи.
function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const { breed } = form.elements;


    fetchCatByBreed(breed.value)

    .then(({breeds})=>{
    refs.catInfo.innerHTML = createMarkup(breeds);
    })
    .catch((err)=>{
    console.log(err);
    })
    .finally(()=>form.reset());
    }





function createMarkup(arr) {
    return arr
    .map(({
        cfa_url, description, name
    })=>` 
    <li class="cat-card">
    <img src="${cfa_url}" alt="${name}">
    <h2>${name}</h2>
    <p>${description}</p>
    </li>` 
    )
    .join("");
}

function createMarkupForSelect(arr) {
    return arr
    .map(({
        id,name
    })=>` 
    <option value="${id}">${name}</option>` 
    )
    .join("");
}





