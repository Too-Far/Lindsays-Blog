import React from "react"
import styles from "./connect.module.css"
import Layout from "../components/Layout/Layout"
import ConnectDisplay from "../components/ConnectDisplay/ConnectDisplay"
import NewsletterForm from "../components/NewsletterForm/NewsletterForm"
import SEO from "../components/SEO/SEO"

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
