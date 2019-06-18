import React from "react"
import ProjectCards from "./ProjectCards"
import Nasa from "../../images/nasa.png"
import ISS from "../../images/ISS.png"
import portfolio1 from "../../images/portfolio-1.png"
import portfolio2 from "../../images/portfolio-2.png"
import portfolio3 from "../../images/portfolio-3.png"
import spaceX from "../../images/spaceX.png"
import teach2learn from "../../images/teach2learn.png"
import tictactoe from "../../images/tictactoe.png"
import spaceClient from "../../images/space-client.png"

export default function Projects() {
  return (
    <React.Fragment>
      <h1 className="project-header">What I've Been Working on</h1>
      <div className="grid space-around">
        <ProjectCards
          title="Nasa POD Portal"
          about="Retrieve the Picture of the day from the Nasa API"
          technologies="Vanilla JS, HTML, CSS"
          lessons="Manipulation of the DOM, interacting with API's"
          type="Personal Project"
          img={Nasa}
        ></ProjectCards>

        <ProjectCards
          title="Space API Client"
          about="A dashboard to view different space related API's. Built to solidify the concepts I learnt while building 'Github Battle'"
          lessons="Using an Express server to make API calls and pass information to React, Async await, Contexts, React router, states, props, lifecyle methods"
          type="Personal Project"
          technologies="React, Express, CSS"
          img={spaceClient}
        ></ProjectCards>

        <ProjectCards
          title="Where's the ISS"
          about="View the current location of the International Space Station."
          lessons="Dom manipulation, Leaflet.js library, API's"
          type="Tutorial"
          technologies="Vanilla JS, HTML, Bulma, leaflet.js"
          img={ISS}
        ></ProjectCards>

        <ProjectCards
          title="SpaceX API Client"
          about="View the lastest launch of SpaceX and lift off with them"
          lessons="Dom manipulation, API's"
          type="Personal Project"
          technologies="Vanilla JS, HTML, Bulma, Axios"
          img={spaceX}
        ></ProjectCards>

        <ProjectCards
          title="Teach 2 Learn"
          about="Teach2Learn can be seen as a lesson board. Anyone that makes an account can advertise a lesson. A lesson that will be based on technologies the developer has just used. Any other registered user can email the teacher in order to organise a time for the lesson to take place. The app will provide a platform that connect mentors to students. Allowing them to both gain knowledge from the interaction."
          lessons="Learning an integreting new technologies by reading the documentation"
          type="Bootcamp Project"
          technologies="Ruby on Rails, PostgresSQL, CSS, Bootstrap, Omniauth, Google maps, Geolocation, AWS S3, 
          Mailgun"
          img={teach2learn}
        ></ProjectCards>

        <ProjectCards
          title="Tic Tac Toe"
          about="Provides the user with the ability to play their friend in Tic Tac Toe. Alternatively if they dont have any friends they can verse a computer"
          technologies="Vanilla JS, HTML, CSS"
          lessons="Programming logic, DOM manipulation"
          type="Bootcamp Project"
          img={tictactoe}
        ></ProjectCards>

        <ProjectCards
          title="Portfolio 1"
          about="My first attemped at a portfolio"
          technologies="Vanilla JS, HTML, CSS"
          lessons="CSS do's and dont's, I abandon this project and took what I learnt and applied it to 'Portfolio 2'"
          type="Bootcamp Project"
          img={portfolio1}
        ></ProjectCards>

        <ProjectCards
          title="Portfolio 2"
          about="Second attempt and remained in place for 3 months"
          technologies="HTML, CSS"
          lessons="Flexbox, REM units, CSS variables"
          type="Bootcamp Project"
          img={portfolio2}
        ></ProjectCards>

        <ProjectCards
          title="Portfolio 3"
          about="Quickly made with Bulma, to refresh my look"
          technologies="HTML, Bulma"
          lessons="Working with Bulma/CSS framworks, using JavaScript animation and utility libraries"
          type="Personal Project"
          img={portfolio3}
        ></ProjectCards>

        <ProjectCards
          title="Portfolio 4"
          about="What your currently viewing, built because react is fun"
          lessons="Using React"
          technologies="React"
          type="Personal Project"
        ></ProjectCards>
      </div>
    </React.Fragment>
  )
}
