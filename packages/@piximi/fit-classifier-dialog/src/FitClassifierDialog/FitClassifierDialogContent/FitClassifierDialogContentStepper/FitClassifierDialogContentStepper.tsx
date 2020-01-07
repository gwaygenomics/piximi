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
import {Model} from "../CompileOptionsStepContent/Model";
import {OptimizationFunction} from "../CompileOptionsStepContent/OptimizationFunction";
import {LearningRate} from "../CompileOptionsStepContent/LearningRate";
import {LossFunction} from "../CompileOptionsStepContent/LossFunction";
import {Metrics} from "../CompileOptionsStepContent/Metrics";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

type FitClassifierDiaslogContentProps = {};

export const FitClassifierDialogContentStepper = ({}: FitClassifierDiaslogContentProps) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const classes = useStyles({});

  const compile = () => {
    console.log("compile!");

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
            <CompileOptions />
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
          <List dense>
            <Grid container spacing={2}>
              <Grid item xs={1}>
                <TextField
                  fullWidth
                  id="output-shape-width"
                  label="Output shape"
                  onChange={() => {}}
                  value={224}
                />
              </Grid>

              <Grid item xs={1}>
                <TextField
                  fullWidth
                  id="output-shape-height"
                  label="&nbsp;"
                  onChange={() => {}}
                  value={224}
                />
              </Grid>

              <Grid item xs={4}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="method-label">Method</InputLabel>
                  <Select
                    labelId="method-label"
                    id="method"
                    value={3}
                    onChange={() => {}}
                    style={{width: "100%"}}
                  >
                    <MenuItem value={0}>Bicubic interpolation</MenuItem>
                    <MenuItem value={1}>Bilinear interpolation</MenuItem>
                    <MenuItem value={2}>Lanczos</MenuItem>
                    <MenuItem value={3}>
                      Nearest-neighbor interpolation
                    </MenuItem>
                    <MenuItem value={4}>Mitchell-Netravali</MenuItem>
                    <MenuItem value={5}>Gaussian</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={2}>
                <FormControlLabel
                  control={<Switch checked />}
                  label="Maintain proportions"
                  value="maintain-proportions"
                />
              </Grid>
            </Grid>

            <br />
            <br />

            <Grid container spacing={2}>
              <Grid item xs={4}>
                <FormControlLabel
                  control={<Switch checked onChange={() => {}} value="clahe" />}
                  label="Contrast limited adaptive histogram equalization (CLAHE)"
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
