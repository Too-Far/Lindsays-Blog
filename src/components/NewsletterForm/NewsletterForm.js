// * Component that renders a newsletter signup form
import React, { useState } from "react"
import { TextField, makeStyles, Button, Paper } from "@material-ui/core"
import styles from "./NewsletterForm.module.css"

//todo Fix validation and submission.. Need to make submission go to email provider, and validation needs to be functional. Also need to add hidden input area to beat BOTS.

const useStyles = makeStyles({
  root: {
    color: "white",
    gridArea: "btn",
  },
  paper: {
    borderRadius: "6px",
  },
})
//* start component
const NewsletterForm = () => {
  const [state, setState] = useState({
    fname: "",
    lname: "",
    email: "",
  })
  const [error, setError] = useState(false)
  const [typeError, setTypeError] = useState(false)

  const handleChange = event => {
    setState({ ...state, [event.target.id]: event.target.value })
    if (state.fname === "") {
      setTypeError(true)
    }
  }
  const onSubmit = () => {
    const { fname, lname, email } = state
    if (fname === "") {
      setError(true)
    }

    console.log(fname, lname, email)
  }
  const classes = useStyles()
  return (
    <Paper elevation={20} className={classes.paper}>
      <form validate autoComplete="on" className={styles.form}>
        <h1 className={styles.title}> Sign Up For My Newsletter</h1>
        <div className={styles.formWrap}>
          <div className={styles.nameWrapper}>
            <TextField
              required
              error={typeError === true && error === true ? true : false}
              onChange={handleChange}
              id="fname"
              label="First Name"
            />
          </div>
          <div className={styles.lname}>
            <TextField
              required
              error={typeError === true && error === true ? true : false}
              onChange={handleChange}
              id="lname"
              label="Last Name"
            />
          </div>
          <div className={styles.email}>
            <TextField
              required
              error={typeError === true && error === true ? true : false}
              onChange={handleChange}
              id="email"
              label="Email"
            />
          </div>
          <Button
            onClick={onSubmit}
            color="secondary"
            variant="contained"
            className={classes.root}
          >
            Submit
          </Button>
        </div>
      </form>
    </Paper>
  )
}

export default NewsletterForm
