import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../../managers/AuthManager"
import { HiMail } from "react-icons/hi"
import { Label, TextInput, Button, Card } from "flowbite-react"





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

        <div className="max-w-sm">
            <Card>
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

                    <div className="control">
                        <Link to="/register" className="button is-link is-light">Sign Up</Link>
                    </div>

                    {
                        isUnsuccessful ? <p className="help is-danger">Username or password not valid</p> : ''
                    }
                </form>
            </Card>
        </div>
    )
}