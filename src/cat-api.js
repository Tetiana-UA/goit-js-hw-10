//Напиши функцію fetchBreeds(), яка виконує HTTP-запит і повертає проміс із масивом порід - результатом запиту. Винеси її у файл cat-api.js та зроби іменований експорт.
export function fetchBreeds() {
    const BASE_URL  = "https://api.thecatapi.com/v1";
    const ENDPOINT = "breeds"
    const APY_KEY ="live_KhQV1oKIS4BCvrcPDeozPUb3E9SMkjS0ykizMr5iBCwxr7OS8E0iDtuzHjzD1OGJ"

    const params=new URLSearchParams({
        api_key:APY_KEY,
    })

return fetch(`${BASE_URL}/${ENDPOINT}?${params}`).then((response)=>{
    if (!response.ok) {
        throw new Errow("404 not found!");
    } 
    return response.json(); 
    })

}


//Напиши функцію fetchCatByBreed(breedId), яка очікує ідентифікатор породи, робить HTTP-запит і повертає проміс із даними про кота - результатом запиту. Винеси її у файл cat-api.js і зроби іменований експорт.
export function fetchCatByBreed(id) {
    const BASE_URL  = "https://api.thecatapi.com/v1";
    const ENDPOINT = "images/search"
    const APY_KEY ="live_KhQV1oKIS4BCvrcPDeozPUb3E9SMkjS0ykizMr5iBCwxr7OS8E0iDtuzHjzD1OGJ"

    const params=new URLSearchParams({
        api_key:APY_KEY,
        breed_ids:breed.value,
    })

return fetch(`${BASE_URL}/${ENDPOINT}?${params}`).then((response)=>{
    if (!response.ok) {
    throw new Errow("404 not found!");
    } 
    return response.json(); 
})
}


