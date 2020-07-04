import React from "react"
import styles from "./connect.module.css"
import Layout from "../components/Layout/layout"
import ConnectDisplay from "../components/ConnectDisplay/ConnectDisplay"
import NewsletterForm from "../components/NewsletterForm/NewsletterForm"
import SEO from "../components/SEO/seo"

const ConnectPage = () => {
  return (
    <Layout>
      <SEO title="/AboutPage" />
      <ConnectDisplay />
      <NewsletterForm />
    </Layout>
  )
}
export default ConnectPage
