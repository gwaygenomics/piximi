import * as React from "react";
import {OptimizationFunction} from "../OptimizationFunction/OptimizationFunction";
import {LossFunction} from "../LossFunction";
import {Metrics} from "../Metrics";
import {Model} from "../Model/Model";
import Grid from "@material-ui/core/Grid";

type CompileOptionsListItemProps = {};

export const CompileOptionsForm = ({}: CompileOptionsListItemProps) => {
  return (
    <>
      <Grid container spacing={2}>
        <Model />
      </Grid>

      <Grid container spacing={2}>
        <OptimizationFunction />
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <LossFunction />
        </Grid>
      </Grid>

      <Grid container>
        <Metrics />
      </Grid>
    </>
  );
};