import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import * as React from "react";

import {useStyles} from "./FitOptionsForm.css";

const losses = [
  ["absoluteDifference", "Absolute difference"],
  ["cosineDistance", "Cosine distance"],
  ["hingeLoss", "Hinge"],
  ["huberLoss", "Huber"],
  ["logLoss", "Log"],
  ["meanSquaredError", "Mean squared error (MSE)"],
  ["sigmoidCrossEntropy", "Sigmoid cross entropy"],
  ["categoricalCrossentropy", "Categorical cross entropy"]
];

type FitOptionsFormProps = {};

const LossFunctionTextField = () => {
  return (
    <TextField select>
      {losses.map(([k, v], index) => {
        return (
          <MenuItem dense key={index} value={k}>
            {v}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export const FitOptionsForm = ({}: FitOptionsFormProps) => {
  const classes = useStyles({});

  return (
    <form className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <LossFunctionTextField />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            id="input-shape"
            label="Input shape"
            className={classes.textField}
            value={""}
            disabled
            margin="normal"
          />
        </Grid>

        <Grid item xs={2}>
          <TextField
            id="batch-size"
            label="Batch size"
            className={classes.textField}
            value={32}
            type="number"
            margin="normal"
          />
        </Grid>

        <Grid item xs={2}>
          <TextField
            id="epochs"
            label="Epochs"
            className={classes.textField}
            value={10}
            margin="normal"
            type="number"
          />
        </Grid>
      </Grid>
    </form>
  );
};
