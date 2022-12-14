//from a card style form select a club from a list of clubs and have a text imput for yards and notes
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "flowbite-react"

export const AddMyClub = () => {
    const navigate = useNavigate()
    const [myClubs, setMyClubs] = useState([])
    const [clubs, setClubs] = useState([])
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
                                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                        {/* map through all clubs and display club name */}
                                        {clubs.map(club => {
                                            return <option key={club.id}>{club.clubName}</option>
                                        }
                                        )}
                                    </select>
                                </div>
                                    



                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-yardage">
                                    Club Yardage
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-yardage" type="text" placeholder="Yards" />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-brand">
                                    Club Brand
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-brand" type="text" placeholder="Brand" />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-loft">
                                    Club Loft
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-loft" type="text" placeholder="Club Loft" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-clubNote">
                                    Notes
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-clubNote" type="text" placeholder="Notes" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                                Add Club
                            </Button>
                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}