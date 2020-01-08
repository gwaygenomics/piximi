import Grid from "@material-ui/core/Grid";
import * as React from "react";
import TextField from "@material-ui/core/TextField";

type EpochsProps = {};

export const Epochs = ({}: EpochsProps) => {
  return (
    <Grid item xs={1}>
      <TextField
        fullWidth
        id="epochs"
        label="Epochs"
        onChange={() => {}}
        value={1}
      />
    </Grid>
  );
};
