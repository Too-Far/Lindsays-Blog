//* Module that creates a solid background, smaller nav bar than transitions within layout on page scroll.
import React from "react"
import { AppBar, Button, makeStyles, Toolbar } from "@material-ui/core"
import styles from "./SolidNavBar.module.css"

const items = [
  { name: "HOME", label: "HOME", href: "/" },
  { name: "BLOG", label: "BLOG", href: "/blog" },
  { name: "ABOUT", label: "ABOUT", href: "/AboutPage" },
  { name: "CONNECT", label: "CONNECT", href: "/connect" },
]

const useStyles = makeStyles({
  root: {
    backgroundColor: "#a1b89c",
    borderRadius: "6px",
    opacity: ".95",
  },
  btns: {
    color: "white",
  },
})
const SolidNavBar = () => {
  const classes = useStyles()
  return (
    <div className={styles.SolidNavBarContainer}>
      <div className={styles.innerWrapper}>
        <AppBar position="static" color="inherit" className={classes.root}>
          <Toolbar variant="dense">
            <a href="/">
              <img
                src="https://media.graphcms.com/SaJ3bBuwQLauHcF9cz6a"
                alt="logo"
                className={styles.logo}
              />
            </a>
            <div className={styles.btns}>
              {items.map(({ label, name, href }) => (
                <Button
                  key={name + 1}
                  button
                  href={href}
                  className={classes.btns}
                >
                  {label}
                </Button>
              ))}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  )
}
export default SolidNavBar
