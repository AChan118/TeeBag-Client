export const loginUser = (user) => {
    return fetch("https://lobster-app-pl7fb.ondigitalocean.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password
      })
    }).then(res => res.json())
  }
  
  export const registerUser = (newUser) => {
    return fetch("https://lobster-app-pl7fb.ondigitalocean.app/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(res => res.json())
  }