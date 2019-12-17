import {Theme} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/styles";

const styles = ({spacing, typography}: Theme) =>
  createStyles({
    expansionPanel: {
      boxShadow: "none"
    },
    leftIcon: {
      marginRight: spacing(1)
    },
    rightIcon: {
      marginLeft: spacing(1)
    },
    button: {
      marginRight: spacing(1)
    },
    grow: {
      flexGrow: 1
    },
    form: {},
    appBar: {
      position: "relative",
      backgroundColor: "transparent",
      boxShadow: "none",
      borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
    },
    container: {
      // width: '100%',
      display: "flex",
      flexWrap: "wrap"
    },
    root: {
      zIndex: 1100
    },
    paper: {
      zIndex: 1100
    },
    paperFullScreen: {
      left: "280px"
    },
    menu: {
      // width: 200,
    },
    textField: {
      marginRight: spacing(1),
      flexBasis: 300,
      width: "100%"
    },
    title: {
      marginLeft: spacing(2),
      flex: 1
    },
    heading: {
      fontSize: typography.pxToRem(15),
      fontWeight: typography.fontWeightRegular
    }
  });

export const useStyles = makeStyles(styles);
