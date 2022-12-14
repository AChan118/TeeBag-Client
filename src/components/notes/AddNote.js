//Form for logged in user to add a new note to their list of notes
import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "flowbite-react"
// import { addNote } from "../../managers/NoteManager"
import { Label, TextInput, Card } from "flowbite-react"


export const AddNote = () => {
    const navigate = useNavigate()
    const title = useRef()
    const content = useRef()
    const addNote = () => {
        const note = {
            title: title.current.value,
            content: content.current.value,
            date: Date.now(),
            userId: parseInt(sessionStorage.getItem("teebag_user"))

        }
        addNote(note).then(() => {
            navigate("/notes")
        }
        )
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
                                    ref={title}
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
                                    ref={content}
                                />
                            </div>
                            <div>
                                <Button
                                    onClick={addNote}
                                    value="Add Note"
                                />
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </>
    )
}