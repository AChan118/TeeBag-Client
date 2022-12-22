//export a All notes function that pulls all notes from the current logged in user

import React, { useEffect, useState } from "react"
import { getAllNotes } from "../../managers/NoteManager"
import { NoteCard } from "./NoteCard"
import { Button } from "flowbite-react"
import { useNavigate } from "react-router-dom"
import { Card } from "flowbite-react"
import { getCurrentUser } from '../../managers/UserManager';

export const AllNotes = () => {
    const navigate = useNavigate()
    const [notes, setNotes] = useState([])
    const [currentGolfer, setCurrentGolfer] = useState({})

    const getNotes = () => {
        return getAllNotes().then(notesFromAPI => {
            setNotes(notesFromAPI)
        })
    }
    useEffect(() => {
        getCurrentUser().then(setCurrentGolfer)
    }, [])

    useEffect(() => {
        getNotes()
    }, [])

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-6xl font-bold">My Notes</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Card>
                    <div className="flex flex-col items-center justify-center">
                        {notes.map(note => <NoteCard key={note.id} note={note} />)}
                    </div>
                    <div>
                        <Button onClick={() => navigate("/addNote")}>Add Note</Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}