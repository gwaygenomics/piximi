import * as React from "react";
import {useStyles} from "./FitOptionsActions.css";
import Button from "@material-ui/core/Button/Button";
import ArrowBack from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";

type FitOptionsActionsProps = {
  activeStep: any;
  next: any;
  previous: any;
};

export const FitOptionsActions = ({
  activeStep,
  next,
  previous
}: FitOptionsActionsProps) => {
  const classes = useStyles({});

  const onFitClick = () => {
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
          onClick={onFitClick}
          variant="contained"
        >
          Fit
        </Button>
      </div>
    </div>
  );
};
