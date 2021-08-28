const BASE_URL = 'http://localhost:3000/api/v1'

// Session Requests
export const Session = {
    create(params){
        return fetch(`${BASE_URL}/session`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    },
    destroy(){
        return fetch(`${BASE_URL}/session`, {
            method: 'DELETE',
            credentials: 'include',
        }).then(res => res.json())
    }
}

// Auction Requests
export const Auction = {
    index(){
        return fetch(`${BASE_URL}/auctions`)
        .then(res => {
            console.log(res)
            return res.json()
        })
    },
    create(params){
        return fetch(`${BASE_URL}/auctions`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then((res) => res.json());
    },
    show(id){
        return fetch(`${BASE_URL}/auctions/${id}`)
        .then(res => {
            console.log(res)
            return res.json()
        })
    },
    update(id, params){
        return fetch(`${BASE_URL}/auctions/${id}`, {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res => res.json())
    },
    destroy(id) {
        return fetch(`${BASE_URL}/auctions/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            
        })
    }
}

//User Requests
export const User = {
    current() {
        return fetch(`${BASE_URL}/users/current`, {
            credentials: 'include'
        }).then(res => res.json())
    },
    create(params){
        return fetch(`${BASE_URL}/users`, {
            method: 'POST',
            credentials: 'include',
            headers: {
            'Content-Type':'application/json'
            },
            body: JSON.stringify({ user: params })
        }).then(res => res.json())
    }
}