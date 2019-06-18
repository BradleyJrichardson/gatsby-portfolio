import React from "react"
import ProjectCards from "./ProjectCards"
import Nasa from "../../images/nasa.jpg"
import ISS from "../../images/ISS.png"
import portfolio1 from "../../images/portfolio-1.png"
import portfolio2 from "../../images/portfolio-2.png"
import portfolio3 from "../../images/portfolio-3.png"
import spaceX from "../../images/spaceX.png"
import teach2learn from "../../images/teach2learn.png"
import tictactoe from "../../images/tictactoe.png"
export default function Projects() {
  return (
    <React.Fragment>
      <h1 className="project-header">What I've Been Working on</h1>
      <div className="grid space-around">
        <ProjectCards
          title="Nasa POD Portal"
          about="Retrieve the Picture of the day from the Nasa API"
          technologies="Vanilla JS, HTML, CSS"
          img={Nasa}
        ></ProjectCards>
        <ProjectCards
          title="Nasa POD Portal"
          about="Retrieve the Picture of the day from the Nasa API"
          technologies="Vanilla JS, HTML, CSS"
          img={ISS}
        ></ProjectCards>
        <ProjectCards
          title="Nasa POD Portal"
          about="Retrieve the Picture of the day from the Nasa API"
          technologies="Vanilla JS, HTML, CSS"
          img={spaceX}
        ></ProjectCards>
        <ProjectCards
          title="Nasa POD Portal"
          about="Retrieve the Picture of the day from the Nasa API"
          technologies="Vanilla JS, HTML, CSS"
          img={teach2learn}
        ></ProjectCards>
        <ProjectCards
          title="Nasa POD Portal"
          about="Retrieve the Picture of the day from the Nasa API"
          technologies="Vanilla JS, HTML, CSS"
          img={tictactoe}
        ></ProjectCards>
        <ProjectCards
          title="Nasa POD Portal"
          about="Retrieve the Picture of the day from the Nasa API"
          technologies="Vanilla JS, HTML, CSS"
          img={portfolio1}
        ></ProjectCards>
        <ProjectCards
          title="Nasa POD Portal"
          about="Retrieve the Picture of the day from the Nasa API"
          technologies="Vanilla JS, HTML, CSS"
          img={portfolio2}
        ></ProjectCards>
        <ProjectCards
          title="Nasa POD Portal"
          about="Retrieve the Picture of the day from the Nasa API"
          technologies="Vanilla JS, HTML, CSS"
          img={portfolio2}
        ></ProjectCards>
      </div>
    </React.Fragment>
  )
}
