import React from "react"
import ProjectData from "../ProjectData"
import Project from "./Project"

export default function ProjectList() {
    const projectElements = ProjectData.map(project => {
        return (
            <Project 
                key={project.id}
                title={project.title} 
                desc={project.description} 
                path={project.pagePath}
                img={project.image}
                alt={project.imageAlt}
            />
        )
   })
   
    return (
        <div id="projects" className="projects">
            <div className="project-list-header"><h2>PROJECTS</h2></div>
            {projectElements}
        </div>
    )
}