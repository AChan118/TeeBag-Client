export const getAllHoles = () => {
    return fetch(`https://lobster-app-pl7fb.ondigitalocean.app/holes`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

export const getHoleById = (holeId) => {
    return fetch(`https://lobster-app-pl7fb.ondigitalocean.app/holes/${holeId}`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

export const updateHole = (hole) => {
    return fetch(`https://lobster-app-pl7fb.ondigitalocean.app/holes/${hole.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(hole)
    })
        .then(res => res.json())
}

export const createHole = (hole) => {
    return fetch("https://lobster-app-pl7fb.ondigitalocean.app/holes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(hole)
    })
        .then(res => res.json())
}

export const getHoleByRound = (roundId) => {
    return fetch(`https://lobster-app-pl7fb.ondigitalocean.app/holes?round=${roundId}`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

