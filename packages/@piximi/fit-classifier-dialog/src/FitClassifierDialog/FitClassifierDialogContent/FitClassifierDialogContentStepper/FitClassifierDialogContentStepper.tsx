import * as React from "react";
import Stepper from "@material-ui/core/Stepper";
import {Step} from "@material-ui/core";
import StepLabel from "@material-ui/core/StepLabel";
import {useStyles} from "./FitClassifierDialogContentStepper.css";
import StepContent from "@material-ui/core/StepContent";
import List from "@material-ui/core/List";
import {CompileOptionsForm} from "../CompileOptionsForm/CompileOptionsForm";
import Button from "@material-ui/core/Button/Button";
import ArrowBack from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import {FitOptionsForm} from "../FitOptionsForm/FitOptionsForm";
import {PreprocessingOptionsForm} from "../PreprocessingOptionsForm/PreprocessingOptionsForm";

type FitClassifierDiaslogContentProps = {};

export const FitClassifierDialogContentStepper = ({}: FitClassifierDiaslogContentProps) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const classes = useStyles({});

  const compile = () => {
    console.log("compile!");

    next();
  };

  const onFitClick = () => {
    next();
  };

  const next = () => {
    setActiveStep((previous) => previous + 1);
  };

  const previous = () => {
    setActiveStep((previous) => previous - 1);
  };

  const reset = () => {
    setActiveStep(0);
  };

  return (
    <Stepper activeStep={activeStep} orientation="vertical">
      <Step key="compile-options">
        <StepLabel>Compile options</StepLabel>

        <StepContent>
          <List dense>
            <CompileOptionsForm />
          </List>

          <div className={classes.actionsContainer}>
            <Button
              className={classes.button}
              color="primary"
              onClick={compile}
              variant="contained"
            >
              Compile
            </Button>
          </div>
        </StepContent>
      </Step>

      <Step key="preprocessing-options">
        <StepLabel>Preprocessing options</StepLabel>

        <StepContent>
          <PreprocessingOptionsForm />

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
                onClick={next}
                variant="contained"
              >
                Preprocess
              </Button>
            </div>
          </div>
        </StepContent>
      </Step>

      <Step key="fit-options">
        <StepLabel>Fit options</StepLabel>

        <StepContent>
          <FitOptionsForm />

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
        </StepContent>
      </Step>
    </Stepper>
  );
};
