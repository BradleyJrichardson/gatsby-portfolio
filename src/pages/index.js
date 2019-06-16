import React from "react"
import Nav from "./components/Nav"
import Landing from "./components/Landing"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

import { ThemeProvider } from "./components/theme"
import "../styles/global.css"

class Index extends React.Component {
  state = {
    theme: "dark",
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === "dark" ? "light" : "dark",
      }))
    },
  }

  render() {
    return (
      <ThemeProvider value={this.state}>
        <div className={this.state.theme}>
          <div className="container">
            <Nav />
            <Landing />
            <Projects />
            <Contact />
          </div>
        </div>
      </ThemeProvider>
    )
  }
}

export default Index
