import React from "react"
import { Paper, makeStyles } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./AboutCard.module.css"

const useStyles = makeStyles({
  root: {
    height: "220px",
  },
})

const AboutCard = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    {
      LB {
        authors {
          bibliography
          name
          picture {
            url
          }
          posts(last: 3) {
            slug
            title
          }
        }
      }
    }
  `)

  return (
    <div>
      {data.LB.authors.map(d => (
        <>
          <div className={styles.AboutCardContainer}>
            <div className={styles.authImage}>
              <Paper elevation={20} className={classes.root}>
                <img src={d.picture.url} alt="" />
              </Paper>
            </div>
            <div className={styles.authBio}>
              <h1>{d.name}</h1>
              <p>{d.bibliography}</p>
            </div>
          </div>
          <div className={styles.links}>
            <h3> Check out some of {d.name}'s most recent posts!</h3>
            <ul>
              {d.posts.map(link => (
                <li>
                  <a href={link.slug}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </>
      ))}
    </div>
  )
}
export default AboutCard
