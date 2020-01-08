import Grid from "@material-ui/core/Grid";
import * as React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import {PreserveProportions} from "../PreserveProportions/PreserveProportions";
import {Method} from "../Method/Method";
import {OutputShape} from "../OutputShape/OutputShape";

type PreprocessingOptionsFormProps = {};

export const PreprocessingOptionsForm = ({}: PreprocessingOptionsFormProps) => {
  return (
    <>
      <Grid container spacing={4}>
        <OutputShape />

        <Method />
      </Grid>

      <PreserveProportions />

      <Grid container spacing={4}>
        <Grid item xs>
          <FormControlLabel
            control={<Switch checked onChange={() => {}} value="clahe" />}
            label="Contrast limited adaptive histogram equalization (CLAHE)"
          />
        </Grid>
      </Grid>
    </>
  );
};
