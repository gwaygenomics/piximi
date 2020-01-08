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
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import example from "./example.json";
import {FitOptionsForm} from "../FitOptionsForm/FitOptionsForm";
import {PreprocessingOptionsForm} from "../PreprocessingOptionsForm/PreprocessingOptionsForm";

type FitClassifierDiaslogContentProps = {
  accuracyData: any;
  lossData: any;
  setAccuracyData: any;
  setLossData: any;
  setValidationAccuracyData: any;
  setValidationLossData: any;
  validationAccuracyData: any;
  validationLossData: any;
};

function useInterval(callback, delay) {
  const savedCallback = React.useRef(null);

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export const FitClassifierDialogContentStepper = ({
  setAccuracyData,
  setLossData,
  setValidationAccuracyData,
  setValidationLossData
}: FitClassifierDiaslogContentProps) => {
  const {
    trainingAccuracy,
    trainingLoss,
    validationAccuracy,
    validationLoss
  } = example;

  const [delay, setDelay] = React.useState(100);
  const [isRunning, setIsRunning] = React.useState(false);
  const [t, setT] = React.useState(0);

  const [activeStep, setActiveStep] = React.useState(0);

  const classes = useStyles({});

  useInterval(
    () => {
      setAccuracyData((previous) => [...previous, trainingAccuracy[t]]);
      setLossData((previous) => [...previous, trainingLoss[t]]);
      setValidationAccuracyData((previous) => [
        ...previous,
        validationAccuracy[t]
      ]);
      setValidationLossData((previous) => [...previous, validationLoss[t]]);

      setT(t + 1);
    },
    isRunning ? delay : null
  );

  const compile = () => {
    console.log("compile!");

    next();
  };

  const onFitClick = () => {
    next();

    setIsRunning(true);
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
