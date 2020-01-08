import Grid from "@material-ui/core/Grid";
import * as React from "react";
import List from "@material-ui/core/List";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import {PreserveProportions} from "../PreserveProportions/PreserveProportions";
import {Method} from "../Method/Method";
import {OutputShape} from "../OutputShape/OutputShape";

type PreprocessingOptionsFormProps = {};

export const PreprocessingOptionsForm = ({}: PreprocessingOptionsFormProps) => {
  return (
    <List dense>
      <Grid container spacing={2}>
        <OutputShape />

        <Method />
      </Grid>

      <Grid container spacing={2}>
        <PreserveProportions />
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
  );
};
