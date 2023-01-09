// create a round card component that shows the holes grouped by round id date and course name for each round and has the 

import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card } from "flowbite-react"
import { getAllRounds } from "../../managers/RoundManager"
import { getCurrentUser } from "../../managers/UserManager"
import { getHoleByRound } from "../../managers/HoleManager"




export const RoundCard = ({ round }) => {
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
    if(currentUser.id === round.golfer)
    return (
            <div>
            <Card className="flex flex-col items-center justify-center space-x-4 m-8 ">
                   
                        <h1 className="text-6xl">{round.course.name}</h1>
                        <h1 className="text-6xl">Par: {round.course.total_par}</h1>
                        <h1 className="text-6xl">Score: {score}</h1>
            
            </Card>
            </div>
    )
    //}
}

