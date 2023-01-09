export const getBagById = (bagId) => {
    return fetch(`http://localhost:8000/mybags/${bagId}`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}
export const deleteBag = (bagId) => {
    return fetch(`http://localhost:8000/mybags/${bagId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}
export const updateBag = (bag) => {
    return fetch(`http://localhost:8000/mybags/${bag.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(bag)
    })
        .then(res => res.json())
}
export const createBag = (bag) => {
    return fetch("http://localhost:8000/mybags", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(bag)
    })
        .then(res => res.json())
}

export const getBagByGolfer = () => {
    return fetch(`http://localhost:8000/mybags/current_bag`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}
