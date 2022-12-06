import React from "react"
import Navbar from "../components/Navbar"

export default function Starters() {
    return (
        <div>
            <Navbar />
            <main className="pp--main">
                <h1>Choose Your Starters!</h1>



                <h2>Context</h2>
                <p>I am an avid Pokémon enthusiast, and as the Pokémon Company keeps pumping out
                    releases, the amount of pokemon grows and grows. For many, it gets difficult to 
                    keep track of the ever-expanding roster of critters and creatures, which include
                    the starter Pokémon, special Pokémon given to players at the start of their
                    journeys. Often ranked highly among people's rankings, starter Pokémon
                    are a common topic of casual discourse as people love to compare them
                    and share their stories. This application was created to be an easy mechanism
                    to view these starter Pokémon.
                </p>
            </main>
        </div>
    )
}