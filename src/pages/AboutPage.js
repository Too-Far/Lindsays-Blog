import React from "react"
import styles from "./blog.module.css"
import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"
import AboutDisplay from "../components/AboutDisplay/AboutDisplay"
import BlogIndex from "../components/BlogIndex/BlogIndex"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="/AboutPage" />
      <AboutDisplay />
    </Layout>
  )
}
export default AboutPage
