import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Home } from "../components/home/home"
import { AddMyClub } from "../components/mybag/AddMyClub"
import { MyClubs } from "../components/mybag/MyBag"
import { MyClubsList } from "../components/mybag/MyClubList"
import { AddNote } from "../components/notes/AddNote"
import { AllNotes } from "../components/notes/AllNotes"
import { UpdateProfile } from "../components/profile/EditProfile"
import { Profile } from "../components/profile/Profile"
import { Hole } from "../components/round/Hole"
import { MyRounds } from "../components/round/MyRounds"
import { Round } from "../components/round/Round"

import { Authorized } from "./Authorized"

/**
1. Create 2 state variable in ApplicationViews
    * One to track how many holes to create (9/18)
    * One to track which hole is being created and will increment from 1.. max
2. Pass setter for total to Round component
3. In Round component, when Begin Round is clicked, set total state variable to 9 or 18 and also set current hole to 1
4. Route user to /holes/create
5. When user clicks Save on the hole creation form, increment current hole by 1
6. If current hole > total holes, route to some other view
 */



export const ApplicationViews = ({ token, setToken }) => {
    const [holes, setHoles] = useState(0)
    const [currentHole, setCurrentHole] = useState(1)
    const [currentRound, setCurrentRound] = useState(0)

    return <>
        <Routes>
            <Route path="/login" element={<Login setToken={setToken}/>} />
            <Route path="/register" element={<Register setToken={setToken} />} />
            <Route path="/" element={<Authorized token={token} />}>
                <Route path="/home" element={<Home />} />
                <Route path="/rounds" element={<MyRounds/>} />
                <Route path="/startRound" element={<Round setHoles={setHoles} setCurrentHole={setCurrentHole} setCurrentRound={setCurrentRound}/>} />
                <Route path="/holes/create" element={<Hole setHoles={setHoles} setCurrentHole={setCurrentHole} currentHole={currentHole} setCurrentRound={setCurrentRound} holes={holes} currentRound={currentRound} />} />
                <Route path="/notes" element={<AllNotes />} />
                <Route path="/addNote" element={<AddNote />} />
                <Route path="/editNote/:noteId(\d+)" element={<AddNote />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/editProfile" element={<UpdateProfile />} />
                <Route path="/bag/:bagId/addClub" element={<AddMyClub />} />
                <Route path="/editClub/:clubId(\d+)" element={<AddMyClub />} />
                <Route path="/MyBag" element={<MyClubs />} />

            </Route>
        </Routes>
    </>
}