import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"
import { Navbar, Button } from "flowbite-react"

export const NavBar = ({ token, setToken }) => {
    const navigate = useNavigate()
    const navbar = useRef()
    const logout = () => {
        setToken(null)
        localStorage.removeItem('auth_token')
    }



    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="/home">
                <img
                    src="image2vector (1).svg "
                    className="mr-3 h-12 sm:h-12 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-200"
                    alt="Teebag Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    
                </span>
         
            </Navbar.Brand>
            <div className="flex md:order-2 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-200">
                <Button href="/startRound">
                    Start Round
                </Button>
            <Navbar.Toggle />
            </div>
            <Navbar.Collapse>      
                 {
        token
            ? <>
                <Navbar.Link
                    href="/allNotes"
                    active={true}
                >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/MyBag">
                My Bag
                </Navbar.Link>
                <Navbar.Link href="/rounds">
                My Rounds
                </Navbar.Link>
                <Navbar.Link href="/profile">
                Profile
                </Navbar.Link>
                <Navbar.Link onClick={logout} href="/login">
                Sign out
                </Navbar.Link>
                </>
                :
                ""
                }
            </Navbar.Collapse>
        </Navbar>
          
   

    )

}