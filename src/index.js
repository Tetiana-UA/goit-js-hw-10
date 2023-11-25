//HTTP-запити
//Використовуй публічний The Cat API. 



//Поки відбувається будь-який HTTP-запит, необхідно показувати завантажувач - елемент p.loader. Поки запитів немає або коли запит завершився, завантажувач необхідно приховувати. Використовуй для цього додаткові CSS класи.

//Якщо у користувача сталася помилка під час будь-якого HTTP-запиту, наприклад, впала мережа, була втрата пакетів тощо, тобто проміс було відхилено, необхідно відобразити елемент p.error, а при кожному наступному запиті приховувати його. Використовуй для цього додаткові CSS класи.

//Додай мінімальне оформлення елементів інтерфейсу.


//                           В И К О Н А Н Н Я

//Для використання ключа необхідно використовувати HTTP-заголовок x-api-key. Рекомендується використовувати axios та додати заголовок до всіх запитів.
import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_KhQV1oKIS4BCvrcPDeozPUb3E9SMkjS0ykizMr5iBCwxr7OS8E0iDtuzHjzD1OGJ";

//import SlimSelect from 'slim-select'

import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";

const refs = {
    breedSelect: document.querySelector(".breed-select"),
    loader: document.querySelector(".loader"),
    error: document.querySelector(".error"),
    catInfo: document.querySelector(".cat-info"),
}
//new SlimSelect({
    select: '#breed'
 // })

refs.breedSelect.classList.add("isHidden");
refs.loader.classList.add("isHidden");
refs.error.classList.add("isHidden");
console.log(refs.loader.classList);

//Під час завантаження сторінки має виконуватися HTTP-запит за колекцією порід. Для цього необхідно виконати GET-запит на ресурс https://api.thecatapi.com/v1/breeds, що повертає масив об'єктів. У разі успішного запиту, необхідно наповнити select.breed-select опціями так, щоб value опції містило id породи, а в інтерфейсі користувачеві відображалася назва породи.
const optionsMarkup = fetchBreeds()
.then((breeds)=>{refs.breedSelect.innerHTML = breeds.map((breed)=>`<option value="${breed.id}">${breed.name}</option>`)
.join("")
})
.catch((err)=>{
    refs.error.classList.remove("isHidden");
    console.log(err)});
refs.breedSelect.innerHTML = optionsMarkup;
refs.breedSelect.classList.remove("isHidden");


//console.log(optionsMarkup); //value undefined???
//console.log(fetchBreeds());



//Коли користувач обирає якусь опцію в селекті, необхідно виконувати запит за повною інформацією про кота на ресурс https://api.thecatapi.com/v1/images/search. Не забудь вказати в цьому запиті параметр рядка запиту breed_ids з ідентифікатором породи.
refs.breedSelect.addEventListener("input", handleSubmit);

function handleSubmit(event) {
    const {breed} = event.currentTarget;
    refs.catInfo.classList.add("isHidden");
    refs.loader.classList.remove("isHidden");

    fetchCatByBreed(breed.value)
        .then(({breed})=>{
        refs.catInfo.innerHTML = createMarkup(breed);
        })
        .catch((err)=>{
        console.log(err);
        })
        .finally(()=>select.reset());

    refs.loader.classList.add("isHidden");


        console.log(fetchCatByBreed(breed.value)); //?????????????? breed1 is undefined
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







