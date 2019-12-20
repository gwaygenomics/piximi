import {Theme} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/styles";

const styles = ({spacing, typography}: Theme) =>
  createStyles({
    ListSubheader: {
      fontSize: typography.caption.fontSize,
      lineHeight: typography.caption.lineHeight
    }
  });

export const useStyles = makeStyles(styles);
