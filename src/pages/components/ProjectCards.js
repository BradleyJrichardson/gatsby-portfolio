import React from "react"
import { ThemeConsumer } from "./theme"

export default function ProjectCards({ title, about, img }) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`card ${theme}`}>
          <div className="card-heading">{title}</div>
          <div className="card-container">
            <div className="card-information">
              {about}
              <div className="card-sub-heading">Technologies</div>
            </div>
            <div className="image-container">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      )}
    </ThemeConsumer>
  )
}
