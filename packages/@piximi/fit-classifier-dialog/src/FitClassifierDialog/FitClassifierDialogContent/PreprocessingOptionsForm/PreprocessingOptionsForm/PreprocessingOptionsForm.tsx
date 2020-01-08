import Grid from "@material-ui/core/Grid";
import * as React from "react";
import {PreserveProportions} from "../PreserveProportions/PreserveProportions";
import {Method} from "../Method/Method";
import {OutputShape} from "../OutputShape/OutputShape";
import {ContrastLimitedAdaptiveHistogramEqualization} from "../ContrastLimitedAdaptiveHistogramEqualization";
import {useStyles} from "./PreprocessingOptionsForm.css";
import {Typography} from "@material-ui/core";

type PreprocessingOptionsFormProps = {};

export const PreprocessingOptionsForm = ({}: PreprocessingOptionsFormProps) => {
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
