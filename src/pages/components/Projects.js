import React from "react"
import ProjectCards from "./ProjectCards"

export default function Projects() {
  return (
    <React.Fragment>
      <h1>Projects</h1>
      <div className="grid space-around">
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
      </div>
    </React.Fragment>
  )
}
