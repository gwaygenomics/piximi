import Grid from "@material-ui/core/Grid";
import * as React from "react";
import {PreserveProportions} from "../PreserveProportions/PreserveProportions";
import {Method} from "../Method/Method";
import {OutputShape} from "../OutputShape/OutputShape";
import {ContrastLimitedAdaptiveHistogramEqualization} from "../ContrastLimitedAdaptiveHistogramEqualization";

type PreprocessingOptionsFormProps = {};

export const PreprocessingOptionsForm = ({}: PreprocessingOptionsFormProps) => {
  return (
    <>
      <Grid container spacing={4}>
        <OutputShape />

        <Method />
      </Grid>

      <PreserveProportions />

      <ContrastLimitedAdaptiveHistogramEqualization />
    </>
  );
};
