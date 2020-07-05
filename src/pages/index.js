import React from "react"
import { Link } from "gatsby"
import { Button, makeStyles, ThemeProvider } from "@material-ui/core"

import Layout from "../components/Layout/layout"
import QuoteBlock from "../components/QuoteBlock/QuoteBlock"
import NewsLetterForm from "../components/NewsletterForm/NewsletterForm"

import styles from "./index.module.css"
import SEO from "../components/SEO/seo"

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    "&:hover": { background: "black" },
    color: "white",
  },
})

const IndexPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Home" />
      <QuoteBlock />
      <NewsLetterForm />
    </Layout>
  )
}

export default IndexPage
