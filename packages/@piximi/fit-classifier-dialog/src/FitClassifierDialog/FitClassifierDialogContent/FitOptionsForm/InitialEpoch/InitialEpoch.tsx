import Grid from "@material-ui/core/Grid";
import * as React from "react";
import TextField from "@material-ui/core/TextField";

type InitialEpochProps = {};

export const InitialEpoch = ({}: InitialEpochProps) => {
  return (
    <Grid item xs={1}>
      <TextField
        fullWidth
        id="initial-epoch"
        label="Initial epoch"
        onChange={() => {}}
        value={1}
      />
    </Grid>
  );
};
