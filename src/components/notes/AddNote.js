//Form for logged in user to add a new note to their list of notes using state
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "flowbite-react"
// import { addNote } from "../../managers/NoteManager"
import { Label, TextInput, Card } from "flowbite-react"
import { getCurrentUser } from '../../managers/UserManager';
import { createNote } from "../../managers/NoteManager";


export const AddNote = () => {
    const navigate = useNavigate()
    const [note, setNote] = useState({
        title: "",
        content: "",
        date: ""
    })
    const [currentUser, setCurrentUser] = useState({id: 0})
    
    useEffect(() => {
        getCurrentUser().then((data) => {
            setCurrentUser(data.id)
        })
    }, [])

    

    const handleControlledInputChange = (event) => {
        const newNote = { ...note }
        let selectedVal = event.target.value
        newNote[event.target.id] = selectedVal
        setNote(newNote)
    }

    const handleClickSaveNote = (event) => {
        event.preventDefault()
        const newNote = {
            title: note.title,
            content: note.content,
            golfer: currentUser.id
        }
        createNote(newNote)
            .then(() => navigate("/notes"))
    }

   
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-6xl font-bold">Add Note</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Card>
                        <form className="flex flex-col gap-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="title"
                                        value="Title"
                                    />
                                </div>
                                <TextInput
                                    id="title"
                                    type="text"
                                    placeholder="Title"
                                    required={true}
                                    onChange={handleControlledInputChange}
                                    value={note.title}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="content"
                                        value="Content"
                                    />
                                </div>
                                <TextInput
                                    id="content"
                                    type="text"
                                    placeholder="Content"
                                    required={true}
                                    onChange={handleControlledInputChange}
                                    value={note.content}
                                />
                            </div>
                            <div>
                                <Button
                                    onClick={handleClickSaveNote}
                                    value="addNote"
                                >
                                    Submit Note
                                </Button>
                                
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </>
    )
}