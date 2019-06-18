import React from "react"
import { ThemeConsumer } from "./theme"

export default function ProjectCards() {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`card ${theme}`}>
          <div className="card-heading">card content</div>
          <div className="card-container">
            <div className="card-information">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis sapiente, delectus voluptas minus tempora quod
              corporis voluptatum dolor, accusamus officiis fugit modi nemo
              dolorem excepturi non doloribus? Nulla enim quae recusandae atque
              illum ipsam consequatur, eos nobis molestias mollitia aperiam ut
              qui blanditiis consequuntur tenetur porro soluta dolorum nam
              totam.
              <div className="card-sub-heading">Technologies</div>
            </div>
            <div className="image-container"> information </div>
          </div>
        </div>
      )}
    </ThemeConsumer>
  )
}
