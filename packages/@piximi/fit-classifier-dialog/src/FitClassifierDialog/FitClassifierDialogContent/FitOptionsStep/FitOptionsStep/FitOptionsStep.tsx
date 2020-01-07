import * as React from "react";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import {useStyles} from "./FitOptionsStep.css";
import Button from "@material-ui/core/Button/Button";

type FitOptionsStepProps = {
  next: () => void;
  previous: () => void;
  reset: () => void;
  step: number;
  steps: Array<string>;
};

export const FitOptionsStep = ({
  next,
  previous,
  reset,
  step,
  steps
}: FitOptionsStepProps) => {
  const classes = useStyles({});

  return (
    <Step key={steps[1]}>
      <StepLabel>Fit options</StepLabel>
      <StepContent>
        <div className={classes.actionsContainer}>
          <div>
            <Button
              disabled={step === 0}
              onClick={previous}
              className={classes.button}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={next}
              className={classes.button}
            >
              {step === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        </div>
      </StepContent>
    </Step>
  );
};
