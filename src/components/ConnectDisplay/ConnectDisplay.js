import React from "react"
import { Button } from "@material-ui/core"
import styles from "./ConnectDisplay.module.css"
const ConnectDisplay = () => {
  return (
    <div className={styles.ConnectDisplayContainer}>
      <h1>Want to reach out?</h1>
      <h4>Feel free to send me an email. Let me know what's on your mind!</h4>
      <Button
        size="large"
        color="primary"
        variant="contained"
        href="emailto:dummy@gmail.com"
      >
        Email Me!
      </Button>
    </div>
  )
}
export default ConnectDisplay
