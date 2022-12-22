export const getAllHoles = () => {
    return fetch(`http://localhost:8000/holes`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

export const getHoleById = (holeId) => {
    return fetch(`http://localhost:8000/holes/${holeId}`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

export const updateHole = (hole) => {
    return fetch(`http://localhost:8000/holes/${hole.id}`, {
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
    return fetch("http://localhost:8000/holes", {
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
    return fetch(`http://localhost:8000/holes?round=${roundId}`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

