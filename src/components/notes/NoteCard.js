//create a NoteCard function that displays the note title, date, and content in a card in tailwind that pulls from the NoteManager
import React, { useEffect, useState } from "react"
import { getAllNotes } from "../../managers/NoteManager"
import { useNavigate } from "react-router-dom"
import { Card } from "flowbite-react"




export const NoteCard = ({ note }) => {
    const navigate = useNavigate()
    const [notes, setNotes] = useState([])
    const getNotes = () => {
        return getAllNotes().then(notesFromAPI => {
            setNotes(notesFromAPI)
        })
    }
    useEffect(() => {
        getNotes()
    }, [])

    
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-6xl font-bold">All Notes</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Card>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-6xl font-bold">{note.title}</h1>
                        <h1 className="text-6xl font-bold">{note.date}</h1>
                        <h1 className="text-6xl font-bold">{note.content}</h1>
                    </div>
                </Card>
            </div>
        </div>
    )
}






