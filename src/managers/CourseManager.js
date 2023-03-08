export const getAllCourses = () => {
    return fetch("https://lobster-app-pl7fb.ondigitalocean.app/courses", {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}
export const getCourseById = (courseId) => {
    return fetch(`https://lobster-app-pl7fb.ondigitalocean.app/courses/${courseId}`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

export const deleteCourse = (courseId) => {
    return fetch(`https://lobster-app-pl7fb.ondigitalocean.app/courses/${courseId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}
export const updateCourse = (course) => {
    return fetch(`https://lobster-app-pl7fb.ondigitalocean.app/courses/${course.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(course)
    })
        .then(res => res.json())
}
export const createCourse = (course) => {
    return fetch("https://lobster-app-pl7fb.ondigitalocean.app/courses", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(course)
    })
        .then(res => res.json())
}
