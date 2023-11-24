

export function fetchBreeds() {
    const BASE_URL  = "https://api.thecatapi.com/v1";
    const ENDPOINT = "breeds"
    const APY_KEY ="live_KhQV1oKIS4BCvrcPDeozPUb3E9SMkjS0ykizMr5iBCwxr7OS8E0iDtuzHjzD1OGJ"

    const params=new URLSearchParams({
        api_key:APY_KEY,
    })

return fetch(`${BASE_URL}/${ENDPOINT}?${params}`)

}



export function fetchCatByBreed(breed) {
    const BASE_URL  = "https://api.thecatapi.com/v1";
    const ENDPOINT = "images/search"
    const APY_KEY ="live_KhQV1oKIS4BCvrcPDeozPUb3E9SMkjS0ykizMr5iBCwxr7OS8E0iDtuzHjzD1OGJ"

    const params=new URLSearchParams({
        api_key:APY_KEY,
        breed_ids:breed,
    })

return fetch(`${BASE_URL}/${ENDPOINT}?${params}`)

}