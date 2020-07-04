//* Component that creates header object containing nav bar and a background image. Located in Layout component.
import React, { useState, useEffect } from "react"
import styles from "./Header.module.css"
import { makeStyles } from "@material-ui/core"
import NavBar from "../NavBar/NavBar"
import SolidNavBar from "../SolidNavBar/SolidNavBar"

//todo possibly get rid of this style... or change internal styles to use it.
const useStyles = makeStyles({
  root: {
    background: "transparent",
    "&:hover": { background: "black" },
    color: "white",
    height: "6rem",
  },
})

const Header = () => {
  //!creates an event listener for scroll, then passes boolean to scrolling for use later in changing the  nav bar to solid and smaller
  const [scrolling, setScrolling] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)
  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop)
      setScrolling(e.target.documentElement.scrollTop > 110)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [scrollTop])
  const classes = useStyles()

  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.innerWrap}>
        <div id="nav" className={styles.navBar}>
          {scrolling === true ? <SolidNavBar /> : <NavBar />}
        </div>
      </div>
    </div>
  )
}
export default Header
