import * as React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import {Optimizer} from "@piximi/types";
import {useStyles} from "./OptimizationFunctionFormControl.css";

type OptimizerFormControlProps = {};

export const OptimizationFunctionFormControl = ({}: OptimizerFormControlProps) => {
  const [value, setValue] = React.useState<Optimizer>(Optimizer.SGD);

  const classes = useStyles({});

  const onChange = (event: React.ChangeEvent<{value: Optimizer}>) => {
    setValue(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="optimizer-label">Optimization function</InputLabel>

      <Select
        id="optimizer"
        labelId="optimizer-label"
        onChange={onChange}
        value={value}
      >
        <MenuItem value={Optimizer.Adam}>
          Adaptive moment estimation (Adam)
        </MenuItem>

        <MenuItem value={Optimizer.Adadelta}>Adadelta</MenuItem>

        <MenuItem value={Optimizer.Adagrad}>
          Adaptive gradient (Adagrad)
        </MenuItem>

        <MenuItem value={Optimizer.Adamax}>Adamax</MenuItem>

        <MenuItem value={Optimizer.RMSProp}>
          Root mean square propagation (RMSProp)
        </MenuItem>

        <MenuItem value={Optimizer.SGD}>
          Stochastic gradient descent (SGD)
        </MenuItem>
      </Select>

      <FormHelperText>&nbsp;</FormHelperText>
    </FormControl>
  );
};
