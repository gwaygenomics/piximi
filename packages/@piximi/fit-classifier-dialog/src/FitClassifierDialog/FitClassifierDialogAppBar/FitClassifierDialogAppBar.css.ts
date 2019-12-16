import {Theme} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/styles";

const styles = ({spacing}: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: "transparent",
      borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
      boxShadow: "none"
    },
    leftIcon: {
      marginRight: spacing(1)
    },
    grow: {
      flexGrow: 1
    }
  });

export const useStyles = makeStyles(styles);
