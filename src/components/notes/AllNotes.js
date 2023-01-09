//export a All notes function that pulls all notes from the current logged in user

import React, { useEffect, useState } from "react"
import { getAllNotes, getNotesByGolfer } from "../../managers/NoteManager"
import { NoteCard } from "./NoteCard"
import { Button, Tooltip } from "flowbite-react"
import { useNavigate } from "react-router-dom"
import { Card } from "flowbite-react"
import { getCurrentUser } from '../../managers/UserManager';

export const AllNotes = () => {
    const navigate = useNavigate()
    const [notes, setNotes] = useState([])
    const [currentUser, setCurrentUser] = useState({ id: 0 })

    const getNotes = () => {
        return getNotesByGolfer(currentUser.id).then(notes => {
            setNotes(notes)
        })
    }
    const getUser = () => {
        getCurrentUser().then((user) => {
            setCurrentUser(user)
        }
        )
    }

    useEffect(() => {
        getUser()

    }, [])

    useEffect(() => {
        getNotes()
    }, [currentUser])

    return (
        <div className="bg-cover bg-center relative w-full min-h-screen bg-gradient-to-tl from-green-800 to-blue-800">

            <div className="flex flex-col items-center justify-center p-20">
                <h1 className="text-6xl font-bold">My Notes</h1>
            </div>
            <div className="flex flex-col items-center space-x-4 justify-center">
                <div className="flex items-center md:flex-row flex-col justify-center ">
                <Tooltip
                            content="Add Note"
                            placement="right"
                        >
                    <Card className="my-10 px-10 border  border-none rounded-lg bg-opacity-10 shadow-lg hover:bg-opacity-20 hover:scale-125 duration-200 " onClick={() => navigate("/addNote")}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </Card>
                    </Tooltip>
                </div>
                <div className="flex flex-row flex-wrap items-center justify-center px-10">
                    {notes.map(note => <NoteCard key={note.id} note={note} getNotes={getNotes} />)}

                </div>


            </div>

        </div>
    )
}