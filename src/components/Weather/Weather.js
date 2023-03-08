import { useState } from "react";
import { DetailCard } from "./DetailCard";
import { Header } from "./Header";
import { SummaryCard } from "./SummaryCard";

export const Weather = () => {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

    const [noData, setNoData] = useState('No Data to Display')
    const [searchTerm, setSearchTerm] = useState("")
    const [weatherData, setWeatherData] = useState([])
    const [city, setCity] = useState("")
    const [weatherIcon, setWeatherIcon] = useState(`${process.env.REACT_APP_WEATHER_ICON_URL}10n@2x.png`)

    const handleChange = input => {
        const { value } = input.target
        setSearchTerm(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getWeather(searchTerm)
    }

    const getWeather = async (location) => {
        setWeatherData([])
        let how_to_search = (typeof location === 'string') ? `q=${location}` : `lat=${location[0]}&lon=${location[1]}`

        try {
            let res = await fetch(`${process.env.REACT_APP_URL + how_to_search}
          &appid=${API_KEY}&units=metric&cnt=5&exclude=hourly,minutely`)
            let data = await res.json()
            if (data.cod !== 200) {
                setNoData('Location Not Found')
                return
            }
            setWeatherData(data)
            setCity(`${data.city.name}, ${data.city.country}`)
            setWeatherIcon(`${process.env.REACT_APP_ICON_URL + data.list[0].weather[0]["icon"]}@4x.png`)
        } catch (error) {
            console.log(error)
        }
    }

    const myIP = (location) => {
        const { latitude, longitude } = location.coords
        getWeather([latitude, longitude])
    }

    return (

        <div className="flex flex-col lg:flex-row w-full min-h-full rounded-md shadow-lg bg-gray-100 bg-opacity-10">
            {/* Form Card Section */}
            <div className="p-3">
                <div className="flex items-center justify-center">
                    <h3 className="my-auto mr-auto text-xl text-pink-800 font-bold shadow-md py-1 px-3 rounded-md bg-white bg-opacity-30">
                        Forecast
                    </h3>
                    <i className="fa fa-map my-auto" aria-hidden="true"></i>
                    <div className="text-right">
                        <p className="font-semibold text-sm ml-2"></p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center h-full">
                    <h1>The Only Weather You Need</h1>
                    <hr className="h-1 bg-white w-1/4 rounded-full my-5" />
                    <form noValidate onSubmit={handleSubmit} className="flex  justify-center w-full">
                        <input
                            type="text"
                            className="relative w-1/2  rounded-xl shadow-md border-2 border-gray-300 outline-none focus:border-pink-500"
                            onChange={handleChange}
                            required />
                        <button type="submit" className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
                            <i className="fa fa-search text-white ml-10 border-1 my-auto z-10 cursor-pointer p-3"
                                aria-hidden="true"
                                onClick={() => {
                                    navigator.geolocation.getCurrentPosition(myIP)
                                }}></i>
                        </button>
                    </form>
                </div>
            </div>
            {/* Info Card Section */}
            <div className="w-2/4 p-5">
                <Header />
                <div className="flex flex-col my-10">
                    {/* card jsx  */}
                    {weatherData.length === 0 ?
                        <div className="container p-4 flex items-center justify-center h-1/3 mb-auto">
                            <h1 className="text-gray-300 text-4xl font-bold uppercase">{noData}</h1>
                        </div> :
                        <>
                            <h1 className="text-5xl text-gray-800 mt-auto mb-4">Today</h1>
                            <DetailCard weather_icon={weatherIcon} data={weatherData} />
                            <h1 className="text-3xl text-gray-600 mb-4 mt-10">More On {city}</h1>
                            <ul className="grid grid-cols-2  gap-2">
                                {weatherData.list.map((days, index) => {
                                    if (index > 0) {
                                        return (
                                            <SummaryCard key={index} day={days} />
                                        )
                                    }
                                })}
                            </ul>
                        </>
                    }
                </div>

            </div>
        </div>

    )
}