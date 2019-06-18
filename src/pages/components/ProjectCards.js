import React from "react"
import { ThemeConsumer } from "./theme"

export default function ProjectCards({ title, about, img, technologies }) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`card ${theme}`}>
          <div className="card-container">
            <div>
              <div className="card-heading">{title}</div>
              <div className="card-information">
                {about}
                <div className="card-sub-heading">Technologies</div>
                {technologies}
              </div>
            </div>

            <div className="image-container">
              <img clasName="project-image" src={img} alt="" />
            </div>
          </div>
        </div>
      )}
    </ThemeConsumer>
  )
}
