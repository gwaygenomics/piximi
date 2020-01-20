import * as React from "react";
import {useStyles} from "./GeneratorOptionsActions.css";
import Button from "@material-ui/core/Button/Button";
import ArrowBack from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";

type GeneratorOptionsActionsProps = {
  activeStep: any;
  next: any;
  previous: any;
};

export const GeneratorOptionsActions = ({
  activeStep,
  next,
  previous
}: GeneratorOptionsActionsProps) => {
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
          Preprocess
        </Button>
      </div>
    </div>
  );
};
