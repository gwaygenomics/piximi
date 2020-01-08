import Grid from "@material-ui/core/Grid";
import * as React from "react";
import List from "@material-ui/core/List";
import TextField from "@material-ui/core/TextField";

type FitOptionsFormProps = {};

export const FitOptionsForm = ({}: FitOptionsFormProps) => {
  return (
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
  );
};
