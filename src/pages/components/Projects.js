import React from "react"
import ProjectCards from "./ProjectCards"

export default function Projects() {
  return (
    <React.Fragment>
      <div className="grid space-around">
        <h1>projects Todo</h1>
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
      </div>
    </React.Fragment>
  )
}
