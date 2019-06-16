import React from "react"
import { ThemeConsumer } from "./theme"

export default function ProjectCards() {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`card bg-${theme}`}>
          <h4 className="header-lg center-text">This is a Card</h4>
        </div>
      )}
    </ThemeConsumer>
  )
}
