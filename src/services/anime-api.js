import tokenService from '../services/tokenService'
const base_url = '/api/anime'


export function getAll(){
    return fetch(base_url)
    .then(res => res.json())
}

export function createAnime(anime){
    return fetch(base_url, {
        method: "POST",
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(anime)
    }, { mode: "cors" })
        .then(res => res.json());
}
