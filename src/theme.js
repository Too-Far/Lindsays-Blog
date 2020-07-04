//* Custom theme file for this app. Still need to explore the possibilities with this.
import { red } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#a1b89c",
    },
    secondary: {
      main: "#2b4829",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fffff",
    },
    disabled: {
      color: "#2b4829",
    },
  },
})

export default theme
