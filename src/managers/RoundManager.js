export const getRoundById = (roundId) => {
    return fetch(`https://lobster-app-pl7fb.ondigitalocean.app/rounds/${roundId}`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

export const deleteRound = (roundId) => {
    return fetch(`https://lobster-app-pl7fb.ondigitalocean.app/rounds/${roundId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}
export const updateRound = (round) => {
    return fetch(`https://lobster-app-pl7fb.ondigitalocean.app/rounds/${round.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(round)
    })
}
export const getAllRounds = () => {
    return fetch("https://lobster-app-pl7fb.ondigitalocean.app/rounds", {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}
export const createRound = (round) => {
    return fetch("https://lobster-app-pl7fb.ondigitalocean.app/rounds", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(round)
    })
        .then(res => res.json())
}
export const getRoundsByGolfer = (golferId) => {
    return fetch(`https://lobster-app-pl7fb.ondigitalocean.app/rounds?golfer=${golferId}`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

