import Button from "@material-ui/core/Button/Button";
import {fitAction} from "@piximi/store";
import {FitOptions} from "@piximi/types";
import {LayersModel} from "@tensorflow/tfjs";
import * as React from "react";
import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Dataset} from "@tensorflow/tfjs-data";
import {Tensor} from "@tensorflow/tfjs";

import {useStyles} from "./FitButton.css";

export const FitButton = ({next}: {next: any}) => {
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    const payload = {
      compiled: compiled,
      data: data,
      validationData: validationData,
      options: options
    };

    const action = fitAction(payload);

    dispatch(action);

    next();
  }, [dispatch]);

  const compiled = useSelector(
    ({classifier}): LayersModel => {
      return classifier.model;
    }
  );

  const data = useSelector(
    ({classifier}): Dataset<{xs: Tensor; ys: Tensor}> => {
      return classifier.data;
    }
  );

  const validationData = useSelector(
    ({classifier}): Dataset<{xs: Tensor; ys: Tensor}> => {
      return classifier.validationData;
    }
  );

  const options = useSelector(
    ({classifier}): FitOptions => {
      return classifier.fitOptions;
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
      Fit
    </Button>
  );
};
