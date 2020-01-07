import * as React from "react";
import Stepper from "@material-ui/core/Stepper";
import {Step} from "@material-ui/core";
import StepLabel from "@material-ui/core/StepLabel";
import {useStyles} from "./FitClassifierDialogContentStepper.css";
import StepContent from "@material-ui/core/StepContent";
import List from "@material-ui/core/List";
import {CompileOptions} from "../CompileOptionsStepContent/CompileOptions";
import Button from "@material-ui/core/Button/Button";
import ArrowBack from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

type FitClassifierDialogContentProps = {};

const steps = () => {
  return ["Compile options", "Fit options"];
};

export const FitClassifierDialogContentStepper = ({}: FitClassifierDialogContentProps) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const classes = useStyles({});

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
            <CompileOptions />
          </List>

          <div className={classes.actionsContainer}>
            <Button
              className={classes.button}
              color="primary"
              onClick={next}
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
          <List dense>
            <CompileOptions />
          </List>

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
          <List dense>
            <Grid container spacing={2}>
              <Grid item xs={1}>
                <TextField
                  fullWidth
                  id="batch-size"
                  label="Batch size"
                  onChange={() => {}}
                  value={32}
                />
              </Grid>

              <Grid item xs={1}>
                <TextField
                  fullWidth
                  id="epochs"
                  label="Epochs"
                  onChange={() => {}}
                  value={1}
                />
              </Grid>

              <Grid item xs={1}>
                <TextField
                  fullWidth
                  id="initial-epoch"
                  label="Initial epoch"
                  onChange={() => {}}
                  value={1}
                />
              </Grid>
            </Grid>
          </List>

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
                Fit
              </Button>
            </div>
          </div>
        </StepContent>
      </Step>
    </Stepper>
  );
};
