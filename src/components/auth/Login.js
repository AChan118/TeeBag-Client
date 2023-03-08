import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../../managers/AuthManager"
import { HiMail } from "react-icons/hi"
import { Label, TextInput, Button, } from "flowbite-react"

export const Login = ({ setToken }) => {
    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()
    const [isUnsuccessful, setisUnsuccessful] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault()
        const user = {
            email: email.current.value,
            password: password.current.value
        }

        loginUser(user).then(res => {
            if ("valid" in res && res.valid) {
                // if ("token" in res && res.token) {
                setToken(res.token)
                navigate("/home")
            }
            else {
                setisUnsuccessful(true)
            }
        })
    }

    return (
        <div className="py-40 bg-cover bg-center relative w-full min-h-screen bg-gradient-to-tl from-green-800 to-blue-800 ">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row w-10/12 lg:w-8/12 bg-white bg-opacity-30 rounded-xl mx-auto shadow-lg overflow-hidden">
                    <div className="w-full md:w-1/2 py-16 px-12">
                        <h1 className="text-4xl text-green-400 font-semibold mb-4">TeeBag</h1>
                        <h2 className="text-3xl mb-4">Login</h2>
                        <form onSubmit={handleLogin} className="flex flex-col gap-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="email4"
                                        value="Your email"
                                    />
                                </div>
                                <TextInput
                                    id="email4"
                                    type="email"
                                    placeholder="name@teebag.com"
                                    required={true}
                                    icon={HiMail}
                                    ref={email}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="password1"
                                        value="Password"
                                    />
                                </div>
                                <TextInput
                                    id="password1"
                                    type="password"
                                    required={true}
                                    ref={password}
                                />
                            </div>
                            <Button className="button is-link" type="submit">
                                Submit
                            </Button>
                            <div className="control text-center">
                                Not a member yet?
                                <Link to="/register" className="button is-link is-light text-green-500 hover:text-green-400 font-medium"> Sign Up</Link>
                            </div>
                            {
                                isUnsuccessful ? <p className="help is-danger">Username or password not valid</p> : ''
                            }
                        </form>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative">
                        <img className="w-full h-full shadow-lg saturate-200  mix-blend-overlay " src="https://images.pexels.com/photos/6542389/pexels-photo-6542389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}