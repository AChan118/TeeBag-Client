import { MyClubCard } from "./MyClubCard"

export const MyClubsList = ({ myClubs , getMyBag }) => {

    return (
        <>
            <div className="flex md:flex-row flex-wrap flex-col space-x-4 space-y-4 w-full h-full items-center justify-center mt-3 py-5 px-5">
                {myClubs.map(myClub => {
                    return <MyClubCard key={myClub.id}
                        id={myClub.id}
                        name={myClub.club.name}
                        image_url={myClub.club.name}
                        yardage={myClub.yardage}
                        brand={myClub.brand}
                        club_note={myClub.club_note}
                        getMyBag={getMyBag}
                        />
                }
                )}
            </div>
        </>
    )
}
