import { Button, Card, Label, TextInput } from "flowbite-react"
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { createHole } from "../../managers/HoleManager"

export const Hole = ({ setCurrentHole, holes, currentHole, currentRound }) => {
    const [hole, setHole] = useState({
        score: 0,
        round: ""
    })

    useEffect(() => {
        setCurrentHole(currentHole)
    }, [])

    const courseName = (currentRound = {}) => {
        const round = currentRound;

        if (!round || !round.course) {
            return null;
        }
        const course = round.course_name;
        return course.name;
    };
    const courseTitle = courseName(currentRound)
    const navigate = useNavigate()

    const handleHole = (event) => {
        const newHole = { ...hole }
        newHole[event.target.id] = event.target.value
        setHole(newHole)
    }

    const handleClickSaveHole = (event) => {
        event.preventDefault()
        const newHole = {
            score: parseInt(hole.score),
            round: currentRound,
        }
        createHole(newHole)
            .then(() => {
                if (currentHole + 1 > holes) {
                    navigate("/home")
                }
                else {
                    setCurrentHole(currentHole + 1)
                    navigate("/holes/create")
                }
            })
    }

    return (
        <div className="grid justify-items-stretch bg-cover bg-center relative w-full min-h-screen bg-gradient-to-tl from-green-800 to-blue-800">
            <div className="justify-self-center max-w-2xl my-20 ">
                <Card className="border  border-none rounded-lg bg-opacity-10 shadow-lg hover:bg-opacity-20 bg-slate-400" >
                    <img className="w-34 h-34 mb-3 shadow-lg saturate-200" src="https://c4.wallpaperflare.com/wallpaper/600/605/110/golf-high-resolution-desktop-backgrounds-wallpaper-preview.jpg" alt="" />
                    <h5>{courseTitle}</h5>
                    <h5 className="text-4xl font-bold tracking-tight text-slate-200">
                        Hole {currentHole} of {holes}
                    </h5>
                    <div>
                        {/* <div className="mb-2 block ">
                            <Label
                                className="text-slate-200"
                                htmlFor="score"
                                value="Score:"
                            />
                        </div>
                        <TextInput
                            className="w-3/4  "
                            id="score"
                            type="text"
                            sizing="lg"
                            onChange={handleHole}
                            required autoFocus
                            placeholder="Score"
                            value={hole.score}
                        /> */}
                        <div className="mb-2 block">
                            <Label className="text-slate-200 font-xl " htmlFor="score" value="Score:" />
                            <div className="flex flex-wrap justify-center">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(score => (
                                    <div key={score} className="w-1/4 max-w-xs  mx-2 my-2">
                                        <label className="block bg-slate-400 text-center rounded-full p-2 hover:bg-green-400 cursor-pointer ">
                                            <input
                                                type="radio"
                                                id="score"
                                                name="score"
                                                value={score}
                                                onChange={handleHole}
                                                checked={hole.score === score}
                                                className="hidden"
                                            />
                                            <span className="text-white">{score}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center text-6xl text-green-400">
                        {hole.score}
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <div>
                            <Button
                                onClick={handleClickSaveHole}
                                outline={true}
                                gradientDuoTone="greenToBlue"
                            >
                                {currentHole === holes ? 'Finish Round' : 'Save Hole'}
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}