export const createMyClub = (myClub) => {
    return fetch("http://localhost:8088/myclubs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(myClub)
    })
        .then(res => res.json())
}

export const getAllMyClubs = () => {
    return fetch("http://localhost:8088/myclubs", {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}
export const getMyClubById = (myClub) => {
    return fetch(`http://localhost:8088/myclubs/${myClub.id}`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

export const deleteMyClub = (myClubId) => {
    return fetch(`http://localhost:8088/myclubs/${myClubId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}
export const updateMyClub = (myClub) => {
    return fetch(`http://localhost:8088/myclubs/${myClub.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(myClub)
    })
}
export const getAllClubs = (userId) => {
    return fetch("http://localhost:8088/clubs", {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}
export const getClubById = (clubId) => {
    return fetch(`http://localhost:8088/clubs/${clubId}`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}