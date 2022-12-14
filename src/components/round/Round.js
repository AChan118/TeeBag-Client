import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Label } from 'flowbite-react';
import { TextInput } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { Checkbox, Select } from 'flowbite-react';
import { getAllCourses } from '../../managers/CourseManager';
import { getCurrentUser } from '../../managers/UserManager';
import { createRound } from '../../managers/RoundManager';



export const Round = ({setHoles, setCurrentHole}) => {
    const [round, setRound] = useState({
        golfer: "",
        date: "",
        course: "",
        isFullRound: false
    })
    
    const navigate = useNavigate()

    const [currentGolfer, setCurrentGolfer] = useState({})
    const [isChecked, setIsChecked] = useState(false)
    const [courses, setCourses] = useState([])
    

    useEffect(() => {
        getAllCourses().then(setCourses)
    }, [])
    useEffect(() => {
        getCurrentUser().then(setCurrentGolfer)
    }, [])
    

    const changeRoundState = (domEvent) => {
        const copy = { ...round };
        copy[domEvent.target.id] = (domEvent.target.value);
        setRound(copy);
    };


    const handleRound = (e) => {
        e.preventDefault()

        const round = {
            golfer: currentGolfer.id,
            date: round.date,
            course: round.course,
            isFullRound: isChecked
        }
        // In Round component, when Begin Round is clicked, set total state variable to 9 or 18 and also set current hole to 1

        createRound(round).then(res => {
            
            if ("isFullRound" in res && res.isFullRound === true) {
                setHoles(18)
                setCurrentHole(1)
                navigate("/holes/create")
            }
            else {
                setHoles(9)
                setCurrentHole(1)
                navigate("/holes/create")

            }

            
        }
        )
    }




    return <>
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-6xl font-bold">Start Round</h1>
                <form className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="date"
                                value="Date"
                            />
                        </div>
                        <TextInput
                            id="date"
                            type="Date"
                            placeholder="Date"
                            required={true}
                            onChange={changeRoundState}
                            value={round.date}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="course"
                                value="Course"
                            />

                            <Select
                                id="course"
                                type="select"
                                placeholder="Course"
                                required={true}
                                onChange={changeRoundState}
                                value={round.course}
                            >

                                <option value={0} >Select Course</option>
                                {
                                    courses.map(course => {
                                        return <option key={course.id} value={course.id}>{course.name}</option>
                                    }
                                    )
                                }

                            </Select>

                        </div>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="isFullRound"
                                value="Full Round"
                            />
                            <Checkbox
                                id="isFullRound"
                                placeholder="Full Round"
                                required={true}
                                onChange={changeRoundState}
                                onClick={() => setIsChecked(!isChecked)}

                                
                            />
                        </div>

                        <div className="flex flex-row gap-4">
                            <Button className="button is-link" type="submit" onClick={handleRound}> 
                                Begin Round
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>

}