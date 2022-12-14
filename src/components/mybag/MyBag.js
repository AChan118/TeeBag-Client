// build a club management page with a form to add a new club from a list of clubs
import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "flowbite-react"
import { addMyClub } from "../../managers/ClubManager"

export const MyClubs = () => {
    const navigate = useNavigate()
    const addMyClub = () => {
        navigate("/addClub")
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-6xl font-bold">MyBag</h1>
                    <h2 className="text-2xl font-bold">Current clubs in your personalized bag</h2>
                </div>
                {/* map all of the clubs in the user's bag */}
                <div className="flex flex-col items-center justify-center">
                    {/* <MyClubCard /> */}
                </div>
                <div className="flex flex-col items-center justify-center">
                    

                    <Button onClick={addMyClub} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add Club
                    </Button>
                </div>
            </div>
        </>
    )
}

