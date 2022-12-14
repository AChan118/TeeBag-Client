export const getAllCourses = () => {
    return fetch("http://localhost:8000/courses", {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}
export const getCourseById = (courseId) => {
    return fetch(`http://localhost:8000/courses/${courseId}`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

export const deleteCourse = (courseId) => {
    return fetch(`http://localhost:8000/courses/${courseId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}
export const updateCourse = (course) => {
    return fetch(`http://localhost:8000/courses/${course.id}`, {
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
    return fetch("http://localhost:8000/courses", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(course)
    })
        .then(res => res.json())
}
