import React from "react"
import styles from "./BlogIndexCard.module.css"
import moment from "moment"
import { Button, Paper, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  btn: {
    color: "red",
    "&:hover": { background: "#2b4829", color: "white" },
    // color: "white",
    opacity: 1,
    borderRadius: "6px",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
})
function BlogIndexCard(props) {
  const classes = useStyles()
  console.log(props.url)
  return (
    <div className={styles.gallery}>
      <Paper className={styles.media}>
        <img src={props.url} alt="" />
        <div className={styles.layer}>
          <div className={styles.innerText}>
            <h2>{props.data.title}</h2>
            <p>{props.data.excerpt}</p>
            <Button size="large" className={classes.btn} href={props.data.slug}>
              Check it out!
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  )
}
export default BlogIndexCard
