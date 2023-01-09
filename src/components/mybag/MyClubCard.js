//create and export a my Club card that has the club photo, the club yards and the club note associated with it.  the users bag id and club id
import { Card } from "flowbite-react"
import React, { useEffect, useState } from "react"
import { getAllClubs } from "../../managers/ClubManager"


export const MyClubCard = ({ name , image_url , brand , yardage , club_note , }) => {

    return (
        <>  
            <Card className="px-10 border border-none rounded-lg bg-opacity-10 shadow-lg hover:bg-opacity-20 hover:scale-110 duration-200 bg-slate-400">
                <div className="flex flex-col items-center justify-center">
                    <img src={image_url} alt={name} />
                    <h3 className="text-3xl font-bold">{name}</h3>
                    <h3 className="text-2xl font-bold">{brand}</h3>
                    <h3 className="text-2xl font-bold">{yardage}</h3>
                    <h3 className="text-2xl font-bold">{club_note}</h3> 
                </div>
            </Card>
        </>
    )
}