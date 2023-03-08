import React, { useEffect, useState } from "react"
import { getCurrentUser } from "../../managers/UserManager"
import { getHoleByRound } from "../../managers/HoleManager"

export const RoundCarousel = ({ round }) => {
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

    return (
        <div className="flex flex-col h-full bg-gray-400 dark:bg-gray-700 dark:text-white items-center justify-center bg-opacity-20">
            <h2 className="text-slate">Recent round: {round.date}</h2>
            <div className="mb-10">
                <h1 className="text-6xl">|{round.course.name}</h1>
                <h1 className="text-6xl">|{score}/{round.course.total_par}</h1>
            </div>
        </div>
    )
}