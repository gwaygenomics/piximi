import * as React from "react";
import {Loss} from "@piximi/types";
import {useStyles} from "./LearningRateTextField.css";
import TextField from "@material-ui/core/TextField";

type LearningRateTextFieldProps = {};

export const LearningRateTextField = ({}: LearningRateTextFieldProps) => {
  const [value, setValue] = React.useState<number>(0.01);

  const classes = useStyles({});

  const onChange = (event: React.ChangeEvent<{value: number}>) => {
    setValue(event.target.value);
  };

  return (
    <TextField
      fullWidth
      id="learning-rate"
      label="Learning rate"
      value={0.01}
    />
  );
};
