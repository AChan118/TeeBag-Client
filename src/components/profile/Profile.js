//Build a profile component that will display the user's name, picture, and bio

import { Tooltip } from "flowbite-react"
import { useEffect, useState } from "react"
import { getCurrentUser } from "../../managers/UserManager"



export const Profile = () => {

    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        getCurrentUser().then((user) => {
            setCurrentUser(user)
        })
    }, [])

    return <>

        <div className="flex flex-col items-center justify-center  bg-cover bg-center relative w-full min-h-screen bg-gradient-to-tl from-green-800 to-blue-800">
            {/* <img src= "https://w0.peakpx.com/wallpaper/550/425/HD-wallpaper-skyscrapers-metropolis-modern-architecture-buildings-city.jpg" 
        className="w-full h-full object-cover  "/> */}

            <div className="w-full pt-10 max-w-sm border border-gray-200 rounded-lg shadow-lg border-none bg-white bg-opacity-10  md:scale-150 ">

                <div className="flex flex-col items-center pb-10 ">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={currentUser.profileImageUrl} alt="Avatar" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{currentUser.firstName} {currentUser.lastName}</h5>
                    <span className="text-sm text-gray-800 dark:text-gray-400 ">@{currentUser.username}</span>
                    <p className="mt-2 text-gray-800 dark:text-gray-300 text-center mr-3 ml-3">{currentUser.bio}</p>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <Tooltip
                            content="Edit profile"
                            placement="right"
                        >
                            <a href="/editProfile" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black bg-blue rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                            </a>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>

    </>
}

