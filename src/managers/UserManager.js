export const getAllUsers = () => {
    return fetch("http://localhost:8000/golfers",{
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
    }
    })
        .then(res => res.json())
}
export const updateUser = (user) => {
    return fetch(`http://localhost:8000/golfers/${user.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(user)
    })
}
export const getCurrentUser = () => {
    return fetch("http://localhost:8000/golfers/current", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}