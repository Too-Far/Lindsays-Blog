//* default nav bar that populates within layout. Transitions to Solid Nav bar upon user scroll.
import React, { useState, useEffect } from "react"
import { ButtonGroup, Button, makeStyles } from "@material-ui/core"
import styles from "./NavBar.module.css"

var classNames = require("classnames")

const items = [
  { name: "HOME", label: "HOME", href: "/" },
  { name: "BLOG", label: "BLOG", href: "/blog" },
  { name: "ABOUT", label: "ABOUT", href: "/AboutPage" },
  { name: "CONNECT", label: "CONNECT", href: "/connect" },
]

const useStyles = makeStyles({
  navbtn: {
    fontSize: "1.25rem",
    color: "white",
  },
  btnGrp: {
    height: "30%",
    alignContent: "center",
    justifyContent: "center",
    marginTop: "2.5rem",
  },
})

const NavBar = () => {
  const classes = useStyles()
  return (
    <div className={styles.NavBarContainer}>
      <a href="/">
        <img
          src="https://media.graphcms.com/SaJ3bBuwQLauHcF9cz6a"
          alt="logo"
          className={styles.logo}
        />
      </a>
      <div className={styles.innerWrapper}>
        <ButtonGroup
          variant="text "
          color="secondary"
          className={classes.btnGrp}
        >
          {items.map(({ name, label, href }) => (
            <Button
              key={name + 1}
              button
              href={href}
              id={name}
              color="danger"
              className={classes.navbtn}
            >
              {label}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </div>
  )
}
export default NavBar
