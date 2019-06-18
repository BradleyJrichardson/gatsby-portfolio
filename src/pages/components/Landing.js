import React from "react"
import Sticky from "./Sticky.jsx"
import Nav from "./Nav"
import "../../styles/sticky.css"
import ExampleStuckContent from "./ExampleStuckContent.jsx"
import {
  FaLinkedinIn,
  FaGithubAlt,
  FaCodeBranch,
  FaCodepen,
  FaHackerrank,
} from "react-icons/fa"

export default function Landing() {
  return (
    <React.Fragment>
      <div className="landing-container">
        <div className="landing-content">
          <h1>Bradley Richardson 👋</h1>
          <div className="landing-intro">
            Full-stack Web Developer
            <br />
            Current Student at CoderAcademy <h1> 👨‍💻</h1>
            <br />
            <Sticky>
              <ExampleStuckContent>
                <div className="icon-container">
                  <FaLinkedinIn color="rgb(255, 215, 0)" size={25} />
                </div>
                <div className="icon-container">
                  <FaGithubAlt color="rgb(255, 215, 0)" size={25} />
                </div>
                <div className="icon-container">
                  <FaCodeBranch color="rgb(255, 215, 0)" size={25} />
                </div>
                <div className="icon-container">
                  <FaCodepen color="rgb(255, 215, 0)" size={25} />
                </div>
                <div className="icon-container">
                  <FaHackerrank color="rgb(255, 215, 0)" size={25} />
                </div>
                <Nav />
              </ExampleStuckContent>
            </Sticky>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
