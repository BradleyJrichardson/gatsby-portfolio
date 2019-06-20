import React from "react"
import Nav from "./Nav"
import { FaLinkedinIn, FaGithubAlt } from "react-icons/fa"

export default function Landing() {
  return (
    <div className="landing-page">
      <Nav />
      <div className="landing-content">
        <h1>
          Bradley
          <span className="wave" role="img">
            {" "}
            👋
          </span>
          <br />
          Richardson
        </h1>
        <h3>Full-stack Web Developer Current Student at CoderAcademy</h3>
        <a
          className="landing-icons"
          href="https://linkedin.com/in/bradleyJakeRichardson"
        >
          <FaLinkedinIn color="rgb(255, 215, 0)" size={25} />
        </a>
        <a
          className="landing-icons"
          href="https://github.com/BradleyJrichardson"
        >
          <FaGithubAlt color="rgb(255, 215, 0)" size={25} />
        </a>
      </div>
    </div>
  )
}
