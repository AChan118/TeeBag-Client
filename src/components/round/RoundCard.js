import React, { useEffect, useState } from "react"
import { Button, Card } from "flowbite-react"
import { getCurrentUser } from "../../managers/UserManager"
import { getHoleByRound } from "../../managers/HoleManager"
import { deleteRound } from "../../managers/RoundManager"

export const RoundCard = ({ round , id , getRounds}) => {
    const [currentUser, setCurrentUser] = useState({})
    const [holes, setHoles] = useState([])
    const [score, setScore] = useState("")

    const getHoles = () => {
        getHoleByRound(round.id).then(holes => {
            setHoles(holes)

        })
    }

    useEffect(() => {
        getCurrentUser().then((user) => {
            setCurrentUser(user)
        })
    }, [])

    useEffect(() => {

        getHoles()
    }, [])


    useEffect(() => {
        let totalScore = 0
        holes.forEach(hole => {
            totalScore += hole.score
        })
        setScore(totalScore)
    }
        , [holes])

    if (currentUser.id === round.golfer)
        return (
            <Card className="flex md:w-1/3 flex-col w-full items-center justify-center space-x-4 md:m-8 my-4 bg-gray-400 bg-opacity-20 border-none">
                <div>
                <h1 className="text-6xl">{round.course.name}</h1>
                <h1 className="text-4xl mt-3">Par: {round.course.total_par}</h1>
                <h1 className="text-4xl">Score: {score}</h1>
                <p className="mt-3 text-gray-800 dark:text-gray-300 text-center mr-3 ml-3">Date Played: {round.date}</p>
                <Button onClick={() => {
                        deleteRound(id).then(getRounds)
                    }} className= " hover:bg-red-400 text-white font-bold py-2 px-4 rounded w-full mt-3">
                        Delete
                    </Button>
                </div>     
            </Card>
        )
}

