import * as React from "react";
import {useStyles} from "./CompileOptionsActions.css";
import Button from "@material-ui/core/Button/Button";
import ArrowBack from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";

type CompileOptionsActionsProps = {
  activeStep: any;
  next: any;
  previous: any;
};

export const CompileOptionsActions = ({
  activeStep,
  next,
  previous
}: CompileOptionsActionsProps) => {
  const classes = useStyles({});

  const onCompileClick = () => {
    next();
  };

  return (
    <div className={classes.actionsContainer}>
      <div>
        <IconButton
          className={classes.button}
          disabled={activeStep === 0}
          onClick={previous}
        >
          <ArrowBack />
        </IconButton>

        <Button
          className={classes.button}
          color="primary"
          onClick={onCompileClick}
          variant="contained"
        >
          Compile
        </Button>
      </div>
    </div>
  );
};
