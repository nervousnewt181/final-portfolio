import React from "react"
import {useNavigate} from "react-router-dom"

export default function Project(props) {
    let navigate = useNavigate();

    return (
        <div className="entry-container">
            <div className="entry-text">
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <br></br>
                <button onClick={() => {
                    navigate(`/${props.path}`)
                }}>See more</button>
            </div>
            <div className="project-img-container">
                <img src={`/images/${props.img}`} alt={props.alt}></img>
            </div>    
        </div>
    )
}