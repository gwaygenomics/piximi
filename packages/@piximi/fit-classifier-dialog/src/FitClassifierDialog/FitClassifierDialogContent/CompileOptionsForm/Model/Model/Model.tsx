import * as React from "react";
import Grid from "@material-ui/core/Grid";
import {Architecture} from "../Architecture";
import {Version} from "../Version";
import {Multiplier} from "../Multiplier";
import {InputShape} from "../InputShape";

type ModelProps = {};

export const Model = ({}: ModelProps) => {
  return (
    <>
      <Grid item xs={4}>
        <Architecture />
      </Grid>

      <Grid item xs={2}>
        <Version />
      </Grid>

      <Grid item xs={4}>
        <InputShape />
      </Grid>

      <Grid item xs={2}>
        <Multiplier />
      </Grid>
    </>
  );
};
