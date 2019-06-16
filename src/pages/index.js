import React from "react"
import Nav from "./components/Nav"
import Landing from "./components/Landing"
import { ThemeProvider } from "./components/theme"
import "../styles/global.css"

class Index extends React.Component {
  state = {
    theme: "light",
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === "light" ? "dark" : "light",
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
          </div>
        </div>
      </ThemeProvider>
    )
  }
}

export default Index
