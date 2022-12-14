//create hole form and incrament hole number by one each time a hole is created and then redirect to the next hole form
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { createHole } from "../../managers/HoleManager"

export const Hole = ({setHoles, setCurrentHole}) => {
    const [hole, setHole] = useState({
        score: 0,
        roundId: 0
    })
    const {roundId} = useParams()
    
    
    const handleHole = (event) => {
        const newHole = { ...hole }
        newHole[event.target.id] = event.target.value
        setHole(newHole)
    }

    const handleClickSaveHole = (event) => {
        event.preventDefault()
        const newHole = {
            score: parseInt(hole.score),
            roundId: parseInt(roundId),

        }
        createHole(newHole)
        .then(() => {    
            setCurrentHole(currentHole + 1)
            if(currentHole > setHoles) {
                navigate("/rounds")
                
            }
        })
    }

    return (
        <form className="holeForm">
            <h2 className="holeForm__title"> Hole {currentHole } </h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="score">Score: </label>
                    <input type="text" id="score" onChange={handleHole} required autoFocus className="form-control" placeholder="Score" value={hole.score} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                onClick={handleClickSaveHole}>
                Save Hole
            </button>
        </form>
    )
}