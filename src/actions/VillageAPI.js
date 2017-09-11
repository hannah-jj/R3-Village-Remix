export default class VillageAPI {
    static getInfo(url) {
        return fetch(url, {
            method: "GET",
            mode: 'cors', 
            headers: {
                // 'Accepts': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    }

    static addInfo(url, info) {
        return fetch(url, {
            method: "POST",
            mode: 'cors', 
            headers: {
                // 'Accepts': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( info )
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    }

    static updateInfo(url, info) {
        return fetch(url, {
            method: "PATCH",
            mode: 'cors', 
            headers: {
                // 'Accepts': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    }
}

