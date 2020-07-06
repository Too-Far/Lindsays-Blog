import React from "react"
import styles from "./blog.module.css"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import AboutDisplay from "../components/AboutDisplay/AboutDisplay"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="/AboutPage" />
      <AboutDisplay />
    </Layout>
  )
}
export default AboutPage
