import Grid from "@material-ui/core/Grid";
import * as React from "react";
import {PreserveProportions} from "../PreserveProportions";
import {Method} from "../Method";
import {OutputShape} from "../OutputShape";
import {ContrastLimitedAdaptiveHistogramEqualization} from "../ContrastLimitedAdaptiveHistogramEqualization";
import {useStyles} from "./GeneratorOptionsForm.css";
import {Typography} from "@material-ui/core";

export const GeneratorOptionsForm = () => {
  const classes = useStyles({});

  return (
    <>
      <ContrastLimitedAdaptiveHistogramEqualization />

      <Typography className={classes.typography} variant="subtitle1">
        Resize
      </Typography>

      <Grid container spacing={4}>
        <OutputShape />

        <Method />
      </Grid>

      <PreserveProportions />
    </>
  );
};
