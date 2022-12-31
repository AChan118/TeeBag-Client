//from a card style form select a club from a list of clubs and have a text imput for yards and notes
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "flowbite-react"
import { createMyClub, getAllClubs } from "../../managers/ClubManager"
import { getCurrentUser } from "../../managers/UserManager"

export const AddMyClub = () => {
    const navigate = useNavigate()
    const [myClub, setMyClub] = useState({
        club: "",
        my_bag: "",
        yardage: "",
        brand: "",
        loft: "",
        club_note: ""
    })
    const [clubs, setClubs] = useState([])
    const [currentUser, setCurrentUser] = useState({})


    useEffect(() => {
        getCurrentUser().then((data) => {
            setCurrentUser(data.id)
        })
    }, [])

    useEffect(() => {
        getAllClubs().then(setClubs)
    }, [])

    const changeMyClubState = (domEvent) => {
        const copy = { ...myClub };
        copy[domEvent.target.id] = (domEvent.target.value);
        setMyClub(copy);
    };

    const handleClickSaveMyClub = (event) => {
        event.preventDefault()
        const newMyClub = {
            club: myClub.club,
            my_bag: currentUser.id,
            yardage: parseInt(myClub.yardage) ,
            brand: myClub.brand,
            loft: myClub.loft,
            club_note: myClub.club_note
        }
        createMyClub(newMyClub)
            .then(() => navigate("/mybag"))
    }

    return (
        <>
            {/* form to add a club to the user's bag club select is a dropdown of all clubs by clubname */}
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-6xl font-bold">Add Club</h1>
                    <h2 className="text-2xl font-bold">Add a new club to your bag</h2>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <form className="w-full max-w-sm">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Club
                                </label>

                                {/* dropdown list of clubs by mapping through allClubs */}
                                <div className="relative">

                                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="club" required={true} onChange={changeMyClubState} value={myClub.club}>
                                        {/* map through all clubs and display club name */}
                                        <option value={0}>Select Club</option>
                                        {clubs.map(club => {
                                            return <option key={club.id} value={club.id}>{club.name}</option>
                                        }
                                        )}
                                    </select>
                                </div>




                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-yardage">
                                    Club Yardage
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="yardage" type="text" placeholder="Yards" required={true} onChange={changeMyClubState} value={myClub.yardage}/>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-brand">
                                    Club Brand
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="brand" type="text" placeholder="Brand" required={true} onChange={changeMyClubState} value={myClub.brand} />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-loft">
                                    Club Loft
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="loft" type="text" placeholder="Degrees" required={true} onChange={changeMyClubState} value={myClub.loft}/>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-clubNote">
                                    Notes
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="club_note" type="text" placeholder="Any club notes you want to remember" required={true} onChange={changeMyClubState} value={myClub.club_note}/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
                            type="submit" onClick={handleClickSaveMyClub}>
                                Add Club
                            </Button>
                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}