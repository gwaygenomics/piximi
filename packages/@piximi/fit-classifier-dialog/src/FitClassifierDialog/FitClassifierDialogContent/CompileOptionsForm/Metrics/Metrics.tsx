import * as React from "react";
import {Metric} from "@piximi/types";
import {useStyles} from "./Metrics.css";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";

type MetricsProps = {};

export const Metrics = ({}: MetricsProps) => {
  const [metrics, setMetrics] = React.useState<Array<Metric>>([
    Metric.CategoricalAccuracy
  ]);

  const classes = useStyles({});

  const checked = (metric: Metric) => metrics.includes(metric);

  const onChange = (metric: Metric) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      return checked(metric)
        ? setMetrics(remove(metric))
        : setMetrics([...metrics, metric]);
    };
  };

  const remove = (metric: Metric) =>
    metrics.filter((item: Metric) => metric !== item);

  const control = (metric: Metric) => {
    return (
      <Switch
        checked={checked(metric)}
        onChange={onChange(metric)}
        value={metric}
      />
    );
  };

  return (
    <FormControl component="fieldset">
      <FormLabel className={classes.formLabel} component="legend">
        Metrics
      </FormLabel>

      <FormGroup>
        <Grid container spacing={2}>
          <Grid item xs={3}>
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
          </Grid>

          <Grid item xs={3}>
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
          </Grid>
        </Grid>
      </FormGroup>

      <FormHelperText>&nbsp;</FormHelperText>
    </FormControl>
  );
};
