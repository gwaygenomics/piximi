import * as React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import {Loss} from "@piximi/types";
import {useStyles} from "./LossFunctionFormControl.css";

type LossFormControlProps = {};

export const LossFunctionFormControl = ({}: LossFormControlProps) => {
  const [value, setValue] = React.useState<Loss>(Loss.CategoricalCrossentropy);

  const classes = useStyles({});

  const onChange = (event: React.ChangeEvent<{value: Loss}>) => {
    setValue(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="loss-label">Loss function</InputLabel>

      <Select id="loss" labelId="loss-label" onChange={onChange} value={value}>
        <MenuItem value={Loss.BinaryCrossentropy}>
          Binary cross-entropy
        </MenuItem>

        <MenuItem value={Loss.CategoricalCrossentropy}>
          Categorical cross-entropy
        </MenuItem>

        <MenuItem value={Loss.CategoricalHinge}>Categorical hinge</MenuItem>

        <MenuItem value={Loss.CosineProximity}>Cosine proximity</MenuItem>

        <MenuItem value={Loss.Hinge}>Hinge</MenuItem>

        <MenuItem value={Loss.KullbackLeiblerDivergence}>
          Kullback–Leibler divergence
        </MenuItem>

        <MenuItem value={Loss.Logcosh}>Logcosh</MenuItem>

        <MenuItem value={Loss.MeanAbsoluteError}>
          Mean absolute error (MAE)
        </MenuItem>

        <MenuItem value={Loss.MeanAbsolutePercentageError}>
          Mean absolute percentage error (MAPE)
        </MenuItem>

        <MenuItem value={Loss.MeanSquaredError}>
          Mean squared error (MSE)
        </MenuItem>

        <MenuItem value={Loss.MeanSquaredLogarithmicError}>
          Mean squared logarithmic error (MSLE)
        </MenuItem>

        <MenuItem value={Loss.Poisson}>Poisson</MenuItem>

        <MenuItem value={Loss.SparseCategoricalCrossentropy}>
          Sparse categorical cross-entropy
        </MenuItem>

        <MenuItem value={Loss.SquaredHinge}>Squared hinge</MenuItem>
      </Select>

      <FormHelperText>&nbsp;</FormHelperText>
    </FormControl>
  );
};
