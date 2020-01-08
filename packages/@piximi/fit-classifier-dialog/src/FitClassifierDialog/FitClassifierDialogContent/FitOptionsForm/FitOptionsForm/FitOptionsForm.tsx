import Grid from "@material-ui/core/Grid";
import * as React from "react";
import List from "@material-ui/core/List";
import {InitialEpoch} from "../InitialEpoch";
import {Epochs} from "../Epochs";
import {BatchSize} from "../BatchSize";

type FitOptionsFormProps = {};

export const FitOptionsForm = ({}: FitOptionsFormProps) => {
  return (
    <List dense>
      <Grid container spacing={2}>
        <BatchSize />

        <Epochs />

        <InitialEpoch />
      </Grid>
    </List>
  );
};
