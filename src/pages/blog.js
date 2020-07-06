import React from "react"
import styles from "./blog.module.css"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import BlogIndex from "../components/BlogIndex/BlogIndex"

const BlogPage = () => {
  return (
    <Layout>
      <SEO title="/blog" />
      <BlogIndex />
    </Layout>
  )
}
export default BlogPage
