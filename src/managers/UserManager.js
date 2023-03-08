export const getAllUsers = () => {
    return fetch("https://lobster-app-pl7fb.ondigitalocean.app/golfers",{
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
    }
    })
        .then(res => res.json())
}
export const updateUser = (user) => {
    return fetch(`https://lobster-app-pl7fb.ondigitalocean.app/golfers/${user.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(user)
    })
}
export const getCurrentUser = () => {
    return fetch("https://lobster-app-pl7fb.ondigitalocean.app/golfers/current", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}