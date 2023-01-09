//create a my rounds page that shows all rounds for the user

import { Button, Card, Carousel, Tooltip } from "flowbite-react"
import React, { useState, useEffect } from "react"

import { getAllRounds, getRoundsByGolfer } from "../../managers/RoundManager"
import { getCurrentUser } from "../../managers/UserManager"
import { RoundCard } from "./RoundCard"
import { RoundCarousel } from "./RoundCarousel"

export const MyRounds = () => {
    const [currentUser, setCurrentUser] = useState({ id: 0 })
    const [rounds, setRounds] = useState([])
    const [holes, setHoles] = useState([])


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


    return (
        <>
            <section className="section-content min-h-screen bg-cover bg-center relative w-full bg-gradient-to-tl from-green-800 to-blue-800">


                <div className="h-full sm:h-55  " >
                    {
                        rounds.length !== 0 ?
                            <Carousel className="absolute inset-x-0 bottom-0 mb-3">

                                {rounds.map(round => <RoundCarousel key={round.id} round={round} />)}
                            </Carousel>
                            : null
                            // <Carousel className="absolute inset-x-0 bottom-0 mb-3">
                            //     <div className="flex flex-col h-full bg-gray-400 dark:bg-gray-700 dark:text-white items-center justify-center bg-opacity-20">

                            //         <div className="mb-10">

                            //             <h1 className="text-5xl text-center">Start A New Round To View Recent Rounds</h1>

                            //         </div>
                            //     </div>
                            // </Carousel>
                    }
                </div>
                <div className="p-3">
                    <div className="max-w-sm">
                        <Card className="">
                            <h5 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Stats and Analysis
                            </h5>
                            <p className="font-normal text-xl text-gray-700 dark:text-gray-400">
                                This section could provide users with various statistics and analysis tools,
                                such as graphs and charts that show their progress over time, or tools for analyzing
                                their strengths and weaknesses.
                            </p>
                        </Card>
                    </div>

                    <div className="flex justify-start mt-6">
                        <Card className=" bg-gray-400 bg-opacity-10 border-none">

                            <Tooltip content="Open all rounds">
                                <Button className="text-6xl font-bold text-center ">
                                    All Rounds
                                </Button>
                            </Tooltip>

                            <div className="" >
                                {rounds.map(round => <RoundCard key={round.id} round={round} />)}
                            </div>

                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}