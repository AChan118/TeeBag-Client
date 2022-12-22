
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card } from "flowbite-react"
import { getAllRounds } from "../../managers/RoundManager"
import { getCurrentUser } from "../../managers/UserManager"
import { getHoleByRound } from "../../managers/HoleManager"




export const RoundCarousel = ({ round }) => {
    const navigate = useNavigate()
  
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


    //if the round id is the same as the hole round id amd the round golfer id is the same as the current user id then return the round id, course name, total par, and total score
    
    //if (round.id === hole.round && round.golfer === currentUser.id)
    //{

    return (
        <div className="flex flex-col h-full items-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                   <h2 className="text-slate">Recent round: {round.date}</h2>
                   <div className="mb-10">
                        <h1 className="text-6xl">|{round.course.name}</h1>
                        <h1 className="text-6xl">|{score}/{round.course.total_par}</h1>
                        <h1 className="text-6xl"></h1>
            
                    </div>
            </div>
    )
    //}
}