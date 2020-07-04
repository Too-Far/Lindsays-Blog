import React from "react"
import styles from "./BlogPosts.module.css"
import moment from "moment"
import { Button, Paper, makeStyles } from "@material-ui/core"
import SEO from "../components/SEO/seo"
import ReactMarkdown from "react-markdown"
import { DiscussionEmbed } from "disqus-react"
import Layout from "../components/Layout/layout"

const useStyles = makeStyles({
  root: {
    marginBottom: "2rem",
  },
  pBtn: {
    color: "white",
    width: "50%",
    marginLeft: "4rem",
  },
})

const BlogPost = ({ pageContext }) => {
  const classes = useStyles()
  const blog = pageContext.node
  const property = pageContext
  const disqusConfig = {
    shortname: "LindsayBlog",
    config: { identifier: blog.slug },
  }
  return (
    <Layout>
      <SEO title={blog.slug} />
      <div className={styles.wrapper}>
        <div className={styles.blogHero}>
          <div className={styles.titleAuthor}>
            <h1>{blog.title}</h1>
            <h3 style={{ marginLeft: "auto" }}>
              By: {blog.author.name} &ensp; | &ensp;{" "}
              {moment(blog.date).format("LL")}
            </h3>
            <h4>{blog.excerpt}</h4>
          </div>
        </div>
        <div className={styles.center}>
          <Paper elevation={20} className={classes.root}>
            <div className={styles.featuredImage}>
              <img src={blog.coverImage.url} />
            </div>
          </Paper>
          <div className={styles.body}>
            <ReactMarkdown source={blog.content.markdown} />
          </div>
          <div className={styles.disqusWrapper}>
            <DiscussionEmbed {...disqusConfig} />
          </div>
          <div className={styles.paginationWrapper}>
            <div className={styles.prevBtn}>
              {typeof property.prev.slug != "undefined" && (
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.pBtn}
                  href={property.prev.slug}
                  size="large"
                >
                  Previous
                </Button>
              )}
            </div>
            <div className={styles.nextBtn}>
              {typeof property.next.slug != "undefined" && (
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.pBtn}
                  href={property.next.slug}
                  size="large"
                >
                  Next
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default BlogPost
