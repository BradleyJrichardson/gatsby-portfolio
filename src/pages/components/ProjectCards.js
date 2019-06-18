import React from "react"
import { ThemeConsumer } from "./theme"
import Image from "./Image"

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
              <Image src={img} width={500} height={300} mode="fit" />
            </div>
          </div>
        </div>
      )}
    </ThemeConsumer>
  )
}
