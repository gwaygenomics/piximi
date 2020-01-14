import * as React from "react";
import {useStyles} from "./CompileButton.css";
import Button from "@material-ui/core/Button/Button";

export const CompileButton = ({next}: {next: any}) => {
  const classes = useStyles({});

  const onClick = () => {
    next();
  };

  return (
    <Button
      className={classes.button}
      color="primary"
      onClick={onClick}
      variant="contained"
    >
      Compile
    </Button>
  );
};
