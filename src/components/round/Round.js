import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Label } from 'flowbite-react';
import { TextInput } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { Checkbox, Select } from 'flowbite-react';
import { getAllCourses } from '../../managers/CourseManager';
import { getCurrentUser } from '../../managers/UserManager';
import { createRound } from '../../managers/RoundManager';



export const Round = ({setHoles, setCurrentHole, setCurrentRound}) => {
    const [round, setRound] = useState({
        golfer: "",
        date: "",
        course: "",
        isFullRound: false
    })
    
    const navigate = useNavigate()

    
    const [isChecked, setIsChecked] = useState(false)
    const [courses, setCourses] = useState([])
    const [currentUser, setCurrentUser] = useState({id: 0})
    
    useEffect(() => {
        getCurrentUser().then((data) => {
            setCurrentUser(data.id)
        })
    }, [])
    

    useEffect(() => {
        getAllCourses().then(setCourses)
    }, [])
    
    

    const changeRoundState = (domEvent) => {
        const copy = { ...round };
        copy[domEvent.target.id] = (domEvent.target.value);
        setRound(copy);
    };


    const handleRound = (e) => {
        e.preventDefault()

        const newRound = {
            golfer: currentUser.id,
            date: round.date,
            course: round.course,
            isFullRound: isChecked
        }
        // In Round component, when Begin Round is clicked, set total state variable to 9 or 18 and also set current hole to 1

        createRound(newRound).then(res => {
            
            if (isChecked) {
                setHoles(18)
                setCurrentHole(1)
                setCurrentRound(res.id)
                navigate("/holes/create")
            }
            else {
                setHoles(9)
                setCurrentHole(1)
                setCurrentRound(res.id)
                navigate("/holes/create")

            }

            
        }
        )
    }




    return <>
        <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center relative w-full min-h-screen bg-gradient-to-tl from-green-800 to-blue-800">
            <Card className='px-10 border py-10  border-none rounded-lg bg-opacity-10 shadow-lg hover:bg-opacity-20 hover:scale-150 duration-200 bg-slate-400 md:scale-125'>
            <div className="flex flex-col items-center justify-center ">
                <h1 className="text-6xl font-bold">Start Round</h1>
                <form className="flex flex-col gap-4 mt-10">
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
                                className="ml-3"
                                id="isFullRound"
                                placeholder="Full Round"
                                required={true}
                                onChange={changeRoundState}
                                onClick={() => setIsChecked(!isChecked)}

                                
                            />
                        </div>

                        <div className="flex flex-row gap-4 mt-5">
                            <Button className="button is-link" type="submit" onClick={handleRound}> 
                                Begin Round
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
            </Card>
        </div>
    </>

}