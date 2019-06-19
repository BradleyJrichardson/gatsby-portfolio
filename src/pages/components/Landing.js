import React from "react"
import Nav from "./Nav"
import { FaLinkedinIn, FaGithubAlt, FaPaperclip } from "react-icons/fa"

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
            <hr />
            <br />
            <div className="icon-container">
              <a href="             www.linkedin.com/in/bradleyJakeRichardson">
                <FaLinkedinIn color="rgb(255, 215, 0)" size={25} />
              </a>
            </div>
            <div className="icon-container">
              <a href="https://github.com/BradleyJrichardson">
                <FaGithubAlt color="rgb(255, 215, 0)" size={25} />
              </a>
            </div>
            <div className="icon-container">
              <FaPaperclip color="rgb(255, 215, 0)" size={25} />
            </div>
            <Nav />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
