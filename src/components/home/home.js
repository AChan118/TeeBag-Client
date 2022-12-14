//build homepage with a start round section and a scroll down to a carosel with3 cards export home page
import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"

export const Home = () => {
    const navigate = useNavigate()
    const startRound = () => {
        navigate("/startRound")
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-6xl font-bold">Teebag</h1>
                    <h2 className="text-2xl font-bold">The best way to track your golf game</h2>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <button onClick={startRound} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Start Round
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-6xl font-bold">Teebag</h1>
                    <h2 className="text-2xl font-bold">The best way to track your golf game</h2>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <button onClick={startRound} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Start Round
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-6xl font-bold">Teebag</h1>
                    <h2 className="text-2xl font-bold">The best way to track your golf game</h2>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <button onClick={startRound} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Start Round
                    </button>
                </div>
            </div>
        </>
    )
}
