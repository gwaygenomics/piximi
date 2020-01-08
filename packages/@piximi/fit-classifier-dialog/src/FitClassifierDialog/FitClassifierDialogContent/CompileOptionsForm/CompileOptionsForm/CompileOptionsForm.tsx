import Grid from "@material-ui/core/Grid";
import * as React from "react";
import {OptimizationFunction} from "../OptimizationFunction";
import {LossFunction} from "../LossFunction";
import {LearningRate} from "../LearningRate";
import {Metrics} from "../Metrics";
import {Model} from "../Model";
import List from "@material-ui/core/List";

type CompileOptionsListItemProps = {};

export const CompileOptionsForm = ({}: CompileOptionsListItemProps) => {
  return (
    <List dense>
      <Model />

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <OptimizationFunction />
        </Grid>

        <Grid item xs={2}>
          <LearningRate />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <LossFunction />
        </Grid>
      </Grid>

      <Metrics />
    </List>
  );
};
