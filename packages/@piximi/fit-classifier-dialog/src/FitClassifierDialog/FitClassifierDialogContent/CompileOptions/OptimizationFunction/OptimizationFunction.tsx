import * as React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import {Classifier, Optimizer} from "@piximi/types";
import {useStyles} from "./OptimizationFunction.css";
import {useDispatch, useSelector} from "react-redux";

const OPTIMIZATION_FUNCTIONS = new Map<Optimizer, string>();

OPTIMIZATION_FUNCTIONS.set(Optimizer.Adadelta, "Adadelta");
OPTIMIZATION_FUNCTIONS.set(Optimizer.Adagrad, "Adaptive gradient (Adagrad)");
OPTIMIZATION_FUNCTIONS.set(Optimizer.Adagrad, "Adaptive gradient (Adagrad)");
OPTIMIZATION_FUNCTIONS.set(Optimizer.Adam, "Adaptive moment estimation (Adam)");
OPTIMIZATION_FUNCTIONS.set(
  Optimizer.RMSProp,
  "Root mean square propagation (RMSProp)"
);
OPTIMIZATION_FUNCTIONS.set(Optimizer.SGD, "Stochastic gradient descent (SGD)");

type OptimizationFunctionProps = {};

export const OptimizationFunction = ({}: OptimizationFunctionProps) => {
  const dispatch = useDispatch();

  const onChange = React.useCallback(
    (event: React.ChangeEvent<{value: Optimizer}>) => {
      const action = {
        payload: {
          optimizationFunction: event.target.value
        },
        type: "update-compile-options-optimization-function"
      };

      dispatch(action);
    },
    [dispatch]
  );

  const optimizationFunction = useSelector(
    ({classifier}: {classifier: Classifier}): Optimizer => {
      return classifier.compileOptions.optimizationFunction as Optimizer;
    }
  );

  const classes = useStyles({});

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="optimizer-label">Optimization function</InputLabel>

      <Select
        id="optimizer"
        labelId="optimizer-label"
        onChange={onChange}
        value={optimizationFunction}
      >
        {Array.from(OPTIMIZATION_FUNCTIONS).map(
          ([k, v]: [Optimizer, string]) => {
            return (
              <MenuItem key={k} value={k}>
                {v}
              </MenuItem>
            );
          }
        )}
      </Select>

      <FormHelperText>&nbsp;</FormHelperText>
    </FormControl>
  );
};