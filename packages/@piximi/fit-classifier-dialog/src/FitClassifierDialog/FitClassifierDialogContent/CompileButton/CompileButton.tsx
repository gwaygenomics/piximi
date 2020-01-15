import Button from "@material-ui/core/Button/Button";
import {compile} from "@piximi/store";
import {CompileOptions} from "@piximi/types";
import {LayersModel} from "@tensorflow/tfjs";
import * as React from "react";
import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";

import {useStyles} from "./CompileButton.css";

export const CompileButton = ({next}: {next: any}) => {
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(compile({opened: opened, options: options}));

    next();
  }, [dispatch]);

  const opened = useSelector(
    ({classifier}): LayersModel => {
      return classifier.model;
    }
  );

  const options = useSelector(
    ({classifier}): CompileOptions => {
      return {
        learningRate: classifier.learningRate,
        lossFunction: classifier.lossFunction,
        metrics: classifier.metrics,
        optimizationFunction: classifier.optimizationFunction
      };
    }
  );

  const classes = useStyles({});

  return (
    <Button
      className={classes.button}
      color="primary"
      onClick={onClick}
      variant="contained"
    >
      Compile
    </Button>
  );
};
