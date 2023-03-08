import { deleteNote } from "../../managers/NoteManager"
import { useNavigate } from "react-router-dom"
import { Button, Card } from "flowbite-react"

export const NoteCard = ({ note, getNotes }) => {
    const navigate = useNavigate()

    return (
        <div className="m-10 flex flex-col items-center justify-center w-1/3">
            {/* Note Card */}
            <Card className="px-10 border  border-none rounded-lg bg-opacity-10 shadow-lg hover:bg-opacity-20 hover:scale-110 duration-200 bg-slate-400">
                <div className=" flex flex-col items-center justify-center mx-3">
                    <h1 className="text-3xl font-bold underline">{note.title}</h1>
                    <h1 className="text-2xl font-bold mt-3">{note.content}</h1>
                    <h1 className="text-xl font-bold ">{note.date}</h1>
                </div>
                
                <div className="flex flex-row m-3 space-x-3">
                    {/* edit button */}
                    {/* <Button onClick={() => navigate(`/notes/${note.id}/delete`)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2">
                        Edit
                    </Button> */}
                    {/* delete button */}
                    <Button onClick={() => {
                        deleteNote(note.id).then(getNotes)
                    }} className=" hover:bg-red-400 text-white font-bold py-2 px-4 w-full rounded ">
                        Delete
                    </Button>
                </div>
            </Card>
        </div>
    )
}






