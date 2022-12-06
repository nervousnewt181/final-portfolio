import React from "react"
import Navbar from "../components/Navbar"
import About from "../components/About"
import ProjectList from "../components/ProjectList"
import Footer from "../components/Footer"


export default function Home() {
    return (
        <div>
            <Navbar />
            <main>
                <About />
                <ProjectList />
                <Footer />
            </main>
            
            
        </div>
    )
}