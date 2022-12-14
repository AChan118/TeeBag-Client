export const getRoundById = (roundId) => {
    return fetch(`http://localhost:8000/rounds/${roundId}`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

export const deleteRound = (roundId) => {
    return fetch(`http://localhost:8000/rounds/${roundId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}
export const updateRound = (round) => {
    return fetch(`http://localhost:8000/rounds/${round.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(round)
    })
}
export const getAllRounds = () => {
    return fetch("http://localhost:8000/rounds", {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}
export const createRound = (round) => {
    return fetch("http://localhost:8000/rounds", {
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
    return fetch(`http://localhost:8000/rounds?golfer=${golferId}`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

