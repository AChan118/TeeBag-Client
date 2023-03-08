import { Button, Card, Carousel} from "flowbite-react"
import React, { useState, useEffect } from "react"
import { getRoundsByGolfer } from "../../managers/RoundManager"
import { getCurrentUser } from "../../managers/UserManager"
import { RoundCard } from "./RoundCard"
import { RoundCarousel } from "./RoundCarousel"

export const MyRounds = () => {
    const [currentUser, setCurrentUser] = useState({ id: 0 })
    const [rounds, setRounds] = useState([])
    const getRounds = () => {
        getRoundsByGolfer(currentUser.id).then(rounds => {
            setRounds(rounds)
        })
    }
    const recentRounds = rounds.slice(0, 5)

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
                                {recentRounds.map(round => <RoundCarousel key={round.id} round={round} />)}
                            </Carousel>
                            : null
                    }
                </div>
                <div className="md:p-6">
                    <div className="max-w-sm">
                        {/* <Card className="">
                            <h5 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Stats and Analysis
                            </h5>
                            <p className="font-normal text-xl text-gray-700 dark:text-gray-400">
                                This section will provide users with various statistics and analysis tools,
                                such as graphs and charts that show their progress over time, or tools for analyzing
                                their strengths and weaknesses.
                            </p>
                        </Card> */}
                    </div>
                    <Card className=" bg-gray-400 bg-opacity-10 border-none md:p-6 mt-6 ">
                        
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                                All Rounds
                            </h2>
                        
                        <div className="flex  md:flex-row flex-wrap items-center flex-col space justify-center">
                            {rounds.map(round => <RoundCard key={round.id} round={round} id={round.id} getRounds={getRounds}/>)}
                        </div>
                    </Card>
                </div>
            </section>
        </>
    )
}