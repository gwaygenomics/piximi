import * as React from "react";
import {Metric} from "@piximi/types";
import {useStyles} from "./Metrics.css";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import {MetricCheckbox} from "../MetricCheckbox";

export const Metrics = () => {
  const classes = useStyles({});

  const control = (metric: Metric) => {
    return <MetricCheckbox metric={metric} />;
  };

  return (
    <>
      <FormLabel className={classes.formLabel} component="legend">
        Metrics
      </FormLabel>

      <Grid container>
        <Grid item xs>
          <FormGroup>
            <FormControlLabel
              control={control(Metric.BinaryAccuracy)}
              label="Binary accuracy"
            />
            <FormControlLabel
              control={control(Metric.CategoricalAccuracy)}
              label="Categorical accuracy"
            />
            <FormControlLabel
              control={control(Metric.CategoricalCrossentropy)}
              label="Categorical cross-entropy"
            />
            <FormControlLabel
              control={control(Metric.Cosine)}
              label="Cosine proximity"
            />
            <FormControlLabel
              control={control(Metric.MAE)}
              label="Mean absolute error (MAE)"
            />
          </FormGroup>
        </Grid>

        <Grid item xs>
          <FormGroup>
            <FormControlLabel
              control={control(Metric.MAPE)}
              label="Mean absolute percentage error (MAPE)"
            />
            <FormControlLabel
              control={control(Metric.MSE)}
              label="Mean squared error (MSE)"
            />
            <FormControlLabel
              control={control(Metric.Precision)}
              label="Precision"
            />
            <FormControlLabel
              control={control(Metric.SparseCategoricalCrossentropy)}
              label="Sparse categorical cross-entropy"
            />
          </FormGroup>
        </Grid>
      </Grid>

      <FormHelperText>&nbsp;</FormHelperText>
    </>
  );
};
