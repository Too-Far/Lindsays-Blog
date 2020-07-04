import React from "react"
import styles from "./AboutDisplay.module.css"
import AboutCard from "../AboutCard/AboutCard"
const AboutDisplay = () => {
  return (
    <div className={styles.AboutDisplayContainer}>
      <AboutCard />
    </div>
  )
}
export default AboutDisplay
