import React from "react"
import { ThemeConsumer } from "./theme"
import Image from "./Image"
import { FaGithubAlt, FaSignInAlt } from "react-icons/fa"
import Tooltip from "./Tooltip"

export default function ProjectCards({
  title,
  about,
  img,
  technologies,
  lessons,
  type,
  githublink,
  livelink,
}) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`card-${theme} ${theme}`}>
          <div className="card-container">
            <div className="spare-time">
              <div className="card-heading">{title}</div>
              <div className="card-information">
                <div className="about">{about} </div>
                <h2>Techniques</h2>
                <div className="lessons">{lessons}</div>
                <h4>Type</h4>
                <div className="type">{type}</div>
                <div className="card-sub-heading">Technologies</div>
                {technologies}
                <div className="project-links-container ">
                  <Tooltip text="Github">
                    <a className="project-links" href={githublink}>
                      <FaGithubAlt color="rgb(255, 215, 0)" size={25} />{" "}
                    </a>
                  </Tooltip>
                  <Tooltip text="Live Application">
                    <a className="project-links" href={livelink}>
                      <FaSignInAlt color="rgb(255, 215, 0)" size={25} />{" "}
                    </a>
                  </Tooltip>
                </div>
              </div>
            </div>

            <div className="image-container">
              <Image src={img} width={330} height={280} mode="fit" />
            </div>
          </div>
        </div>
      )}
    </ThemeConsumer>
  )
}
