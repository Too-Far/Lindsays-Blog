import React, { useEffect, useState } from "react"
import Dump from "../components/Dump"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import BlogIndex from "../components/BlogIndex/BlogIndex"
const SecondPage = () => {
  return (
    <Layout>
      <SEO title="Page two" />
      <div></div>
      <Dump />
    </Layout>
  )
}

export default SecondPage
