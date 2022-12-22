//create a page that shows the finshed current round with the total score and total par for the course the round has been played on

import React, { useState, useEffect } from "react"
import { getAllRounds } from "../../managers/RoundManager"
import { RoundCard } from "./RoundCard"
import { getAllHoles } from "../../managers/holeManager"
import { useNavigate } from "react-router-dom"
import { Card } from "flowbite-react"

export const RoundSummary = () => {
    const [rounds, setRounds] = useState([])
    const [holes, setHoles] = useState([])
    const navigate = useNavigate()

    const getRoundSummary = () => {
        getAllRounds().then(rounds => {
            setRounds(rounds)
        })
    }
    const getHoles = () => {
        getAllHoles().then(holes => {
            setHoles(holes)
        })
    }
    useEffect(() => {
        getRounds()
        getHoles()
    }, [])
    return (
        <>
            <section className="section-content">
                <div className="rounds">
                    {rounds.map(round => <RoundCard key={round.id} round={round} holes={holes} />)}
                </div>
            </section>
        </>
    )
}
