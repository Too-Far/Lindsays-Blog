import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"

import styles from "./BlogIndex.module.css"
import Carousel from "react-material-ui-carousel"
import BlogIndexCard from "../BlogIndexCard/BlogIndexCard"
const BlogIndex = () => {
  const data = useStaticQuery(graphql`
    {
      LB {
        posts {
          date
          excerpt
          slug
          tags
          title
          coverImage {
            url
          }
          content {
            html
          }
          author {
            name
            picture {
              url
            }
          }
        }
      }
    }
  `)

  return (
    <AwesomeSlider>
      {data.LB.posts.map(d => (
        <div>
          <BlogIndexCard data={d} url={d.coverImage.url} />
        </div>
      ))}
    </AwesomeSlider>
  )
}
export default BlogIndex
