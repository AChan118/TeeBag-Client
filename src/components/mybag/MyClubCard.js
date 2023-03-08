import { Button, Card } from "flowbite-react"
import { useNavigate } from "react-router-dom"
import { deleteMyClub } from "../../managers/ClubManager"

export const MyClubCard = ({ id, name, image_url, brand, yardage, club_note, getMyBag }) => {
    const navigate = useNavigate()
    return (
        <>
            <Card className="px-10 border border-none rounded-lg bg-opacity-10 shadow-lg hover:bg-opacity-20 hover:scale-110 duration-200 bg-slate-400">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-3xl font-bold ">{name}</h2>
                    <p className="text-2xl font-bold text-slate-500">{brand}</p>
                    <p className="text-2xl font-bold text-slate-500">{yardage}yds</p>
                    <p className="text-2xl font-bold ">{club_note}</p>
                </div>
                <div className="flex flex-row m-3 space-x-3">
                    {/* <Button onClick={() => navigate(`/notes/${note.id}/delete`)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2">
                        Edit
                    </Button> */}
                    {/* delete button */}
                    <Button onClick={() => {
                        deleteMyClub(id).then(getMyBag)
                    }} className=" hover:bg-red-400 text-white font-bold py-2 px-4 rounded w-full">
                        Delete
                    </Button>
                </div>
            </Card>
        </>
    )
}