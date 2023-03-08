export const getAllNotes = () => {
    return fetch("https://lobster-app-pl7fb.ondigitalocean.app/notes", {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

export const getNoteById = (noteId) => {
    return fetch(`https://lobster-app-pl7fb.ondigitalocean.app/notes/${noteId}`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

export const deleteNote = (noteId) => {
    return fetch(`https://lobster-app-pl7fb.ondigitalocean.app/notes/${noteId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

export const updateNote = (note) => {
    return fetch(`https://lobster-app-pl7fb.ondigitalocean.app/notes/${note.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(note)
    })
        .then(res => res.json())
}

export const createNote = (note) => {
    return fetch("https://lobster-app-pl7fb.ondigitalocean.app/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(note)
    })
        .then(res => res.json())
}

export const getNotesByGolfer = (golferId) => {
    return fetch(`https://lobster-app-pl7fb.ondigitalocean.app/notes?golfer=${golferId}`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

