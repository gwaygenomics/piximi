import * as React from "react";
import {useCallback} from "react";
import {useStyles} from "./CompileButton.css";
import Button from "@material-ui/core/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {open} from "@piximi/store";

const pathname =
  "https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json";

export const CompileButton = ({next}: {next: any}) => {
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(open({pathname: pathname, classes: 10, units: 100}));

    next();
  }, [dispatch]);

  const opened = useSelector(({classifier}) => classifier.model);

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
