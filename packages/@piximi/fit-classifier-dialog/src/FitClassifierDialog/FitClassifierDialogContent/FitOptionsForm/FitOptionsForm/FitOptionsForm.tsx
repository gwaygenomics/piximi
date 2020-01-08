import Grid from "@material-ui/core/Grid";
import * as React from "react";
import {InitialEpoch} from "../InitialEpoch";
import {Epochs} from "../Epochs";
import {BatchSize} from "../BatchSize";

type FitOptionsFormProps = {};

export const FitOptionsForm = ({}: FitOptionsFormProps) => {
  return (
    <Grid container spacing={2}>
      <BatchSize />

      <Epochs />

      <InitialEpoch />
    </Grid>
  );
};
