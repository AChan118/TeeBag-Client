//build homepage with a start round section and a scroll down to a carosel with3 cards export home page
import { Button, Card, Carousel } from "flowbite-react"
import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"






export const Home = () => {
    const navigate = useNavigate()
    const startRound = () => {
        navigate("/startRound")
    }
    return (
        <>
         {/* transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 */}
            <div className="flex flex-col items-center justify-center mb-20 " >
                {/* add image from public folder */}
                <div className="bg-gradient-to-tl from-green-800 to-blue-800 h-96 w-full bg-cover bg-center relative">
                    <img src="https://images.pexels.com/photos/914682/pexels-photo-914682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    className="w-full h-full object-cover absolute mix-blend-overlay"/>
                    <div className="p-24 flex flex-col items-center justify-center bg-local">

                        <h1 className="text-6xl text-white font-bold">TeeBag</h1>
                        <h2 className="text-2xl text-slate-400 font-bold">Start tracking your rounds the right way</h2>
                        
                    </div>

                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-start w-2/3">
                    <h1 className="text-6xl font-bold">Start Tracking</h1>
                    <h2 className="text-2xl font-bold text-center">Start tracking your game like a pro. 
                                Get started today and see the progression of your game in real time.</h2>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <button onClick={startRound} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Start Round
                    </button>
                </div>
            </div>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel slideInterval={5000}>
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                        alt="..."
                    />
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                        alt="..."
                    />
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                        alt="..."
                    />
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                        alt="..."
                    />
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                        alt="..."
                    />
                </Carousel>
            </div>

        </>
    )
}
