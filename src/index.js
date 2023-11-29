//................HTTP-запити............................................
//........Використовуємо публічний The Cat API............................. 



import SlimSelect from 'slim-select';
import "slim-select/dist/styles";


import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";

const refs = {
    breedSelect: document.querySelector(".breed-select"),
    loader: document.querySelector(".loader"),
    error: document.querySelector(".error"),
    catInfo: document.querySelector(".cat-info"),
}


//Поки відбувається будь-який HTTP-запит, необхідно показувати завантажувач - елемент p.loader. А всі інші елементи приховати:
refs.breedSelect.style.display= "none";
refs.catInfo.style.display= "none";
refs.loader.style.display= "block";
refs.error.style.display= "none";



//Під час завантаження сторінки має виконуватися HTTP-запит за колекцією порід - тобто буде викликатися функція fetchBreeds. Під час обробки її результату (масиву breeds), ми map-ємо цей масив (з кожного обєкту масиву  витягуємо необхідні властивості (id, name) і наповнюємо (за доп.innerHTML) ними опції breedSelect так, щоб value опції містило id породи, а в інтерфейсі користувачеві відображалася назва породи:
fetchBreeds()
    .then((breeds)=>{
        refs.breedSelect.innerHTML = breeds.map((breed)=>`<option value="${breed.id}">${breed.name}</option>`)
        .join("")

//Ініціалізуємо SlimSelect після того як ми його наповнили, потім додаємо слухача по події change 
        new SlimSelect({
            select: '#breed'
        })
        refs.breedSelect.addEventListener("change", handleSelect);

    })
    .catch((err)=>{
    //Якщо у користувача сталася помилка під час будь-якого HTTP-запиту, наприклад, впала мережа, була втрата пакетів тощо, тобто проміс було відхилено, необхідно відобразити елемент p.error, а при кожному наступному запиті приховувати його. 
    refs.error.style.display= "block";
        console.log(err);
    })
    .finally(()=>{
        refs.breedSelect.style.display= "block";
        refs.loader.style.display= "none";
       
    }
    );


//Коли користувач обирає якусь опцію в селекті, необхідно виконувати запит за повною інформацією про кота,  тобто при події change в викливається функція fetchCatByBreed, якій для параметра рядка запиту breed_ids передається ідентифікатор породи breedId.


function handleSelect(event) {
    refs.loader.style.display= "block";
    
    const breedId = event.target.value; //ідентифікатор породи беремо з вибраної опції селекту breedSelect, на якому висить слухач події (у опцій value=breed.id).
    
    fetchCatByBreed(breedId)
        .then((data)=>{
        //Результат (data) виклику фунції fetchCatByBreed під час обробки записуємо в catInfo (зробивши розмітку за допомогою функції createMarkup)
        refs.catInfo.innerHTML = createMarkup(data);
        })
        .catch((err)=>{
        console.log(err)
        })
        .finally(()=>{
            refs.loader.style.display= "none";
            refs.catInfo.style.display= "block";
            
        })
}

function createMarkup(data) {
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




