import React from "react"
import { ThemeConsumer } from "./theme"
import Image from "./Image"

export default function ProjectCards({
  title,
  about,
  img,
  technologies,
  lessons,
  type,
}) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`card-${theme} ${theme}`}>
          <div className="card-container">
            <div>
              <div className="card-heading">{title}</div>
              <div className="card-information">
                <div className="about">{about} </div>
                <h2>Techniques</h2>
                <div className="lessons">{lessons}</div>
                <h4>Type</h4>
                <div className="type">{type}</div>
                <div className="card-sub-heading">Technologies</div>
                {technologies}
              </div>
            </div>

            <div className="image-container">
              <Image src={img} width={300} height={200} mode="fit" />
            </div>
          </div>
        </div>
      )}
    </ThemeConsumer>
  )
}
