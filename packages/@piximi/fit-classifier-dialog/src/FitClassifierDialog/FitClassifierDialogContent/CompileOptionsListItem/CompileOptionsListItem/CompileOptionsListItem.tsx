import Grid from "@material-ui/core/Grid";
import * as React from "react";
import {OptimizationFunctionFormControl} from "../OptimizationFunctionFormControl";
import {LossFunctionFormControl} from "../LossFunctionFormControl";
import {LearningRateTextField} from "../LearningRateTextField";
import {MetricsList} from "../MetricsList/MetricsList";

type CompileOptionsListItemProps = {};

export const CompileOptionsListItem = ({}: CompileOptionsListItemProps) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <OptimizationFunctionFormControl />
        </Grid>

        <Grid item xs={2}>
          <LearningRateTextField />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <LossFunctionFormControl />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <MetricsList />
        </Grid>
      </Grid>
    </>
  );
};
