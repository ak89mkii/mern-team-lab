const base_url = '/api/anime'

export function getAll(){
    return fetch(base_url)
    .then(res => res.json())
}