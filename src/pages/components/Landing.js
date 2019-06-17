import React from "react"
import Sticky from "./Sticky.jsx"
import "../../styles/sticky.css"
import ExampleStuckContent from "./ExampleStuckContent.jsx"

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
                <p>
                  This is a stickable component. It will get a prop called
                  "modifiers" containing an array of strings like "stuck-top"
                  when it's been scrolled out of view.
                </p>
              </ExampleStuckContent>
            </Sticky>
          </div>
        </div>
        <div className="down-hand">👇</div>
      </div>
    </React.Fragment>
  )
}
