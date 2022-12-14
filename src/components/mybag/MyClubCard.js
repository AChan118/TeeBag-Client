//create and export a my Club card that has the club photo, the club yards and the club note associated with it.  the users bag id and club id
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const MyClubCard = ({ myClub, clubs }) => {
    const navigate = useNavigate()
    const [club, setClub] = useState({})
    const getClub = () => {
        clubs.find(c => c.id === myClub.clubId)
            .then(res => setClub(res))
    }
    useEffect(() => {
        getClub()
    }, [])
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <img src={club.image_url} alt={club.name} />
                    <h3 className="text-2xl font-bold">{club.name}</h3>
                    <h3 className="text-2xl font-bold">{myClub.yards}</h3>
                    <h3 className="text-2xl font-bold">{myClub.note}</h3>
                </div>
            </div>
        </>
    )
}