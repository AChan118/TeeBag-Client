export const createMyClub = (myClub) => {
    return fetch("https://lobster-app-pl7fb.ondigitalocean.app/myclubs", {
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
    return fetch("https://lobster-app-pl7fb.ondigitalocean.app/myclubs", {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}
export const getMyClubById = (myClub) => {
    return fetch(`https://lobster-app-pl7fb.ondigitalocean.app/myclubs/${myClub.id}`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

export const deleteMyClub = (myClubId) => {
    return fetch(`https://lobster-app-pl7fb.ondigitalocean.app/myclubs/${myClubId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}
export const updateMyClub = (myClub) => {
    return fetch(`https://lobster-app-pl7fb.ondigitalocean.app/myclubs/${myClub.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(myClub)
    })
}
export const getAllClubs = () => {
    return fetch("https://lobster-app-pl7fb.ondigitalocean.app/clubs", {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}
export const getClubById = (clubId) => {
    return fetch(`https://lobster-app-pl7fb.ondigitalocean.app/clubs/${clubId}`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}