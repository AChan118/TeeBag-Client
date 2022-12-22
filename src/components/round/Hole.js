//create hole form and incrament hole number by one each time a hole is created and then redirect to the next hole form
import { Button, Card, Label, TextInput } from "flowbite-react"
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { createHole } from "../../managers/HoleManager"



export const Hole = ({setCurrentHole, holes, currentHole, currentRound }) => {
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
        <div className="grid justify-items-stretch">
            {/* <form className="holeForm">
                <h2 className="holeForm__title"> Hole {currentHole} </h2>
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
            </form> */}
            <div className="justify-self-center max-w-2xl my-20">
                <Card imgSrc="https://c4.wallpaperflare.com/wallpaper/600/605/110/golf-high-resolution-desktop-backgrounds-wallpaper-preview.jpg">
                    <h5>{courseTitle}</h5>
                    <h5 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Hole {currentHole}
                    </h5>
                    <div>
                        <div className="mb-2 block ">
                            <Label
                                
                                htmlFor="score"
                                value="Score:"
                            />
                        </div>
                        <TextInput
                            className="w-3/4 "
                            id="score"
                            type="text"
                            sizing="lg"
                            onChange={handleHole} 
                            required autoFocus 
                            placeholder="Score" 
                            value={hole.score}
                        />
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
            {/* <div className="justify-self-center">
                <Card
                    
                    horizontal={true}
                    imgSrc="https://c4.wallpaperflare.com/wallpaper/600/605/110/golf-high-resolution-desktop-backgrounds-wallpaper-preview.jpg"
                >
                    <h5 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Hole {currentHole}
                    </h5>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                
                                htmlFor="score"
                                value="Score:"
                            />
                        </div>
                        <TextInput
                            className="w-3/4 "
                            id="score"
                            type="text"
                            sizing="lg"
                            onChange={handleHole} 
                            required autoFocus 
                            placeholder="Score" 
                            value={hole.score}
                        />
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <div>
                            <Button
                                onClick={handleClickSaveHole}
                                outline={true}
                                gradientDuoTone="greenToBlue"
                            >
                                Save Hole
                            </Button>
                        </div>
                    </div>
                    
                </Card>
            </div> */}
        </div>
    )
}