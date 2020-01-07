import List from "@material-ui/core/List";
import * as React from "react";
import {CompileOptions} from "../CompileOptions";
import StepContent from "@material-ui/core/StepContent";
import {useStyles} from "./CompileOptionsStepContent.css";
import Button from "@material-ui/core/Button/Button";

type CompileOptionsStepContentProps = {
  activeStep: number;
  next: () => void;
  previous: () => void;
  steps: Array<string>;
};

export const CompileOptionsStepContent = ({
  activeStep,
  next,
  previous,
  steps
}: CompileOptionsStepContentProps) => {
  const classes = useStyles({});

  return (
    <StepContent>
      <List dense>
        <CompileOptions />
      </List>

      <div className={classes.actionsContainer}>
        <div>
          <Button
            className={classes.button}
            disabled={activeStep === 0}
            onClick={previous}
          >
            Previous
          </Button>

          <Button
            className={classes.button}
            color="primary"
            onClick={next}
            variant="contained"
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </div>
    </StepContent>
  );
};
