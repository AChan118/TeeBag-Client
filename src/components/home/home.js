//build homepage with a start round section and a scroll down to a carosel with3 cards export home page
import { Button, Card, Carousel } from "flowbite-react"
import React, { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllRounds, getRoundsByGolfer } from "../../managers/RoundManager"
import { getCurrentUser } from "../../managers/UserManager"
import { RoundCarousel } from "../round/RoundCarousel"

export const Home = () => {
    const navigate = useNavigate()
    const [rounds, setRounds] = useState([])
    const [currentUser, setCurrentUser] = useState({ id: 0 })

    const getRounds = () => {
        getRoundsByGolfer(currentUser.id).then(rounds => {
            setRounds(rounds)
        })
    }
    const getUser = () => {
        getCurrentUser().then((user) => {
            setCurrentUser(user)
        }
        )
    }

    useEffect(() => {
        getUser()
    }, [])

    useEffect(() => {
        getRounds()
    }, [currentUser])

    const startRound = () => {
        navigate("/startRound")
    }

    return (
        <>
            {/* transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 */}
            <div className=" bg-cover bg-center relative w-full min-h-screen bg-gradient-to-tl from-green-800 to-blue-800">
                <div className="flex flex-col items-center justify-center mb-10 " >
                    {/* add image from public folder */}
                    <div className="bg-gradient-to-tl from-green-800 to-blue-800 h-96 w-full bg-cover bg-center relative">
                        <img src="https://images.pexels.com/photos/914682/pexels-photo-914682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className="w-full h-full object-cover absolute mix-blend-overlay" />
                        <div className="p-24 flex flex-col justify-center bg-local">
                            <h1 className="text-6xl text-white font-bold">TeeBag</h1>
                            <h2 className="text-2xl text-slate-400 font-bold mt-3">Start tracking your rounds the right way</h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center h-96">
                    <div className="flex flex-col justify-start w-1/2 " >
                        <h1 className="text-6xl font-bold underline underline-offset-auto">Start Tracking</h1>
                        <h2 className="text-2xl font-bold text-center mt-3 text-gray-900">Start tracking your game like a pro.
                            Get started today and see the progression of your game in real time.</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-5 mb-10">
                        <button onClick={startRound} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Start Round
                        </button>
                    </div>
                </div>
                <div className="h-full xl:h-80 p-3  " >
                    {
                        rounds.length !== 0 ?
                            <Carousel className="absolute inset-x-0 bottom-0 md:w-1/3">
                                {rounds.map(round => <RoundCarousel key={round.id} round={round} />)}
                            </Carousel>
                            : <Carousel className="absolute inset-x-0 bottom-0 md:w-1/3">
                                <div className="flex flex-col h-full bg-gray-400 dark:bg-gray-700 dark:text-white items-center justify-center bg-opacity-20">
                                    <div className="mb-10">
                                        <h1 className="text-5xl text-center">Start A New Round To View Recent Rounds</h1>
                                    </div>
                                </div>
                            </Carousel>
                    }
                </div>
            </div>
        </>
    )
}
