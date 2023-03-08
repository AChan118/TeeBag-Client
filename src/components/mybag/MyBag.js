// build a club management page with a form to add a new club from a list of clubs
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card, Tooltip } from "flowbite-react"
import { MyClubsList } from "./MyClubList"
import { getBagByGolfer } from "../../managers/BagManager"


export const MyClubs = () => {
    const navigate = useNavigate()
    const [myBag, setMyBag] = useState([])
    const [myClubs, setMyClubs] = useState([])

    const getMyBag = () => {
        getBagByGolfer().then(data => {
            setMyBag(data)
            setMyClubs(data.my_clubs)
        })
    }

    useEffect(() => {
        getMyBag()
    }, [])

    const addMyClub = () => {
        navigate(`/bag/${myBag.id}/addClub`)
    }

    return (
        <>
            <div className="bg-cover bg-center relative w-full min-h-screen bg-gradient-to-tl from-green-800 to-blue-800 ">
                {/* Header */}
                <div className="flex flex-col items-center justify-center p-10 ">
                    <h1 className="text-6xl font-bold">MyBag</h1>
                    <h2 className="text-2xl font-bold text-center">Current clubs in your personalized bag</h2>
                </div>
                {/* Body */}
                <div>
                    <div className="flex items-center justify-center ">
                    </div>
                    {/* Add Club Card */}
                    <div className="flex items-center justify-center ">
                        <Tooltip
                            content="Add club to your bag"
                            placement="right"
                        >
                            <Card className="my-10 px-10 border  border-none rounded-lg bg-opacity-10 shadow-lg hover:bg-opacity-20 hover:scale-125 duration-200 " onClick={addMyClub}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </Card>
                        </Tooltip>
                    </div>
                    {/* My Club Cards */}
                    <div>
                        <MyClubsList myClubs={myClubs} getMyBag={getMyBag}/>
                    </div>
                </div>
            </div>
        </>
    )
}

