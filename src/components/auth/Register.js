import { useRef } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../../managers/AuthManager"

export const Register = ({ setToken }) => {
  const firstName = useRef()
  const lastName = useRef()
  const email = useRef()
  const username = useRef()
  const bio = useRef()
  const password = useRef()
  const verifyPassword = useRef()
  const passwordDialog = useRef()
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()

    if (password.current.value === verifyPassword.current.value) {
      const newUser = {
        username: username.current.value,
        first_name: firstName.current.value,
        last_name: lastName.current.value,
        email: email.current.value,
        password: password.current.value,
        bio: bio.current.value
      }

      registerUser(newUser)
        .then(res => {
          if ("token" in res && res.token) {
            setToken(res.token)
            //  saved in local storage as auth_token
            navigate("/home")
          }
        })
    } else {
      passwordDialog.current.showModal()
    }
  }

  return (
    <div className="py-40 bg-cover bg-center relative w-full min-h-screen bg-gradient-to-tl from-green-800 to-blue-800 ">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row w-10/12 lg:w-8/12 bg-white bg-opacity-30 rounded-xl mx-auto shadow-lg overflow-hidden">
          {/* <-- Left Side --> */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative">
            <img className="w-full h-full shadow-lg saturate-200  mix-blend-overlay " src="https://images.pexels.com/photos/6542389/pexels-photo-6542389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <h1 className="text-6xl mb-3 text-green-600 font-bold absolute "></h1>
          </div>
          {/* <-- Right Side --> */}
          <div className="w-full md:w-1/2 py-16 px-12">
            <h1 className="text-4xl text-center">Sign Up For TeeBag</h1>
            <h2 className="text-3xl my-4">Register</h2>
            <form className="" onSubmit={handleRegister}>
              {/* <-- Full Name --> */}
              <div className="grid grid-cols-2 gap-5">
                <input className="border border-gray-400 py-1 px-2" type="text" placeholder="Firstname" ref={firstName} />
                <input className="border border-gray-400 py-1 px-2" type="text" placeholder="Lastname" ref={lastName} />
              </div>
              {/* <-- Username --> */}
              <div className="mt-5">
                <input className="border border-gray-400 py-1 px-2 w-full" type="text" placeholder="Username" ref={username} />
              </div>
              {/* <-- Email --> */}
              <div className="mt-5">
                <input className="border border-gray-400 py-1 px-2 w-full" type="text" placeholder="Email" ref={email} />
              </div>
              {/* <-- Passwords --> */}
              <div className="mt-5">
                <input className="border border-gray-400 py-1 px-2 w-full" type="password" placeholder="Password" ref={password} />
              </div>
              <div className="mt-5">
                <input className="border border-gray-400 py-1 px-2 w-full" type="password" placeholder="Verify Password" ref={verifyPassword} />
              </div>
              {/* <-- Bio --> */}
              <div className="mt-5">
                <textarea className="border border-gray-400 py-1 px-2 w-full" placeholder="Tell us about yourself..." ref={bio}></textarea>
              </div>
              {/* <-- Buttons --> */}
              <div className="field is-grouped">
                <div className="mt-5">
                  <button className="button is-link w-full bg-green-500 hover:bg-green-600 py-3 text-center text-white" type="submit" >
                    Register Now</button>
                </div>
                <div className="mt-5">
                  <button className="button is-link w-full bg-red-500 hover:bg-red-600 py-3 text-center text-white">
                    <Link to="/login" className="">Back To Login</Link>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}