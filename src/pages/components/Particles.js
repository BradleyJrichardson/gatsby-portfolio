import React from "react"
import ParticleField from "react-particles-webgl"

export default function Particles() {
  /**
   * Config Builder: https://timellenberger.now.sh/particles
   *
   * Docs: https://github.com/tim-soft/react-particles-webgl
   */
  const config = {
    showCube: false,
    dimension: "2D",
    velocity: 0.5,
    boundaryType: "bounce",
    antialias: true,
    direction: {
      xMin: -1,
      xMax: 1,
      yMin: -1,
      yMax: 1,
      zMin: -1,
      zMax: 1,
    },
    lines: {
      colorMode: "solid",
      color: "#white",
      transparency: 0.9,
      limitConnections: true,
      maxConnections: 20,
      minDistance: 60,
      visible: true,
    },
    particles: {
      colorMode: "solid",
      color: "#FFD43E",
      transparency: 0.9,
      shape: "circle",
      boundingBox: "canvas",
      count: 300,
      minSize: 20,
      maxSize: 50,
      visible: true,
    },
    cameraControls: {
      enabled: false,
      enableDamping: true,
      dampingFactor: 0.2,
      enableZoom: true,
      autoRotate: false,
      autoRotateSpeed: 0.3,
      resetCameraFlag: true,
    },
  }
  return (
    <div className="particle-container">
      <ParticleField config={config} />
    </div>
  )
}
