// list of clubs that are the user's clubs thar has their bag Id and club Id
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "flowbite-react"
import { MyClubCard } from "./MyClubCard"
import { getAllMyClubs } from "../../managers/ClubManager"
import { getAllClubs } from "../../managers/ClubManager"

export const MyClubsList = () => {
    const navigate = useNavigate()
    const [myClubs, setMyClubs] = useState([])
    const [clubs, setClubs] = useState([])
    const getMyClubs = () => {
        getAllMyClubs().then(res => setMyClubs(res))
    }
    const getClubs = () => {
        getAllClubs().then(res => setClubs(res))
    }
    useEffect(() => {
        getMyClubs()
        getClubs()
    }, [])
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-6xl font-bold">Teebag</h1>
                    <h2 className="text-2xl font-bold">The best way to track your golf game</h2>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Button onClick={() => navigate("/addClubs")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add Club
                    </Button>
                </div>
                <div className="flex flex-col items-center justify-center">
                    {myClubs.map(myClub => {
                        return <MyClubCard key={myClub.id} myClub={myClub} clubs={clubs} />
                    }
                    )}
                </div>
            </div>
        </>
    )
}
