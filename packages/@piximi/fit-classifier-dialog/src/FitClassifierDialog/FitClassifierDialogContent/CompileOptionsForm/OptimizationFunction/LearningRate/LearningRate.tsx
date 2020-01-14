import TextField from "@material-ui/core/TextField";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";

import {ClassifierState} from "@piximi/types";

type LearningRateProps = {};

export const LearningRate = ({}: LearningRateProps) => {
  const dispatch = useDispatch();

  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const action = {
        payload: {
          learningRate: event.target.value
        },
        type: "update-compile-options-learning-rate"
      };

      dispatch(action);
    },
    [dispatch]
  );

  const learningRate = useSelector(
    ({classifier}: {classifier: ClassifierState}): number => {
      return classifier.compileOptions.learningRate;
    }
  );

  return (
    <TextField
      fullWidth
      id="learning-rate"
      label="Learning rate"
      onChange={onChange}
      value={learningRate}
    />
  );
};
