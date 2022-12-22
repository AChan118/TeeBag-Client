export const getAllNotes = () => {
    return fetch("http://localhost:8000/notes", {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

export const getNoteById = (noteId) => {
    return fetch(`http://localhost:8000/notes/${noteId}`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

export const deleteNote = (noteId) => {
    return fetch(`http://localhost:8000/notes/${noteId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

export const updateNote = (note) => {
    return fetch(`http://localhost:8000/notes/${note.id}`, {
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
    return fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(note)
    })
        .then(res => res.json())
}