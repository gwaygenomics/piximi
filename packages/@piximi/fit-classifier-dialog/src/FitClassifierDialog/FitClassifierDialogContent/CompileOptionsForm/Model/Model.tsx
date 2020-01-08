import * as React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import {useStyles} from "./Model.css";
import {useDispatch} from "react-redux";
import Grid from "@material-ui/core/Grid";

type Architecture = {
  depthMultiplier: number;
  inputShape: [number, number, number];
  model: string;
  url: string;
  version: number;
};

const versions = (
  architectures: Array<Architecture>,
  name: string
): Array<number> => {
  return architectures
    .filter((architecture) => {
      return architecture.model == name;
    })
    .map((architecture: Architecture) => {
      return architecture.version;
    });
};

type ModelProps = {};

export const Model = ({}: ModelProps) => {
  const dispatch = useDispatch();

  // const onChange = React.useCallback(
  //   (event: React.ChangeEvent<{value: Architecture}>) => {
  //     const action = {
  //       payload: {
  //         architecture: event.target.value
  //       },
  //       type: "update-compile-options-architecture"
  //     };

  //     dispatch(action);
  //   },
  //   [dispatch]
  // );

  const onChange = React.useCallback(
    (event: React.ChangeEvent<{value: Architecture}>) => {},
    [dispatch]
  );

  // const architecture = useSelector(
  //   ({classifier}: {classifier: Classifier}): Architecture => {
  //     return classifier.compileOptions.architecture;
  //   }
  // );

  const classes = useStyles({});

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <FormControl className={classes.formControl}>
            <InputLabel id="architecture-label">Model</InputLabel>

            <Select
              id="architecture"
              labelId="architecture-label"
              onChange={onChange}
              value={1}
            >
              <MenuItem key={1} value={1}>
                MobileNet
              </MenuItem>
            </Select>

            <FormHelperText>&nbsp;</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={1}>
          <FormControl className={classes.formControl}>
            <InputLabel id="architecture-label">Version</InputLabel>

            <Select
              id="architecture"
              labelId="architecture-label"
              onChange={onChange}
              value={2}
            >
              <MenuItem key={1} value={1}>
                1
              </MenuItem>

              <MenuItem key={2} value={2}>
                2
              </MenuItem>
            </Select>

            <FormHelperText>&nbsp;</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={1}>
          <FormControl className={classes.formControl}>
            <InputLabel id="architecture-label">Multiplier</InputLabel>

            <Select
              id="architecture"
              labelId="architecture-label"
              onChange={onChange}
              value={2}
            >
              <MenuItem key={1} value={1}>
                1.0
              </MenuItem>

              <MenuItem key={2} value={2}>
                1.3
              </MenuItem>
            </Select>

            <FormHelperText>&nbsp;</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={2}>
          <FormControl className={classes.formControl}>
            <InputLabel id="architecture-label">Input shape</InputLabel>

            <Select
              id="architecture"
              labelId="architecture-label"
              onChange={onChange}
              value={2}
            >
              <MenuItem key={1} value={1}>
                96 × 96 × 3
              </MenuItem>

              <MenuItem key={1} value={1}>
                128 × 128 × 3
              </MenuItem>

              <MenuItem key={1} value={1}>
                160 × 160 × 3
              </MenuItem>

              <MenuItem key={1} value={1}>
                192 × 192 × 3
              </MenuItem>

              <MenuItem key={2} value={2}>
                224 × 224 × 3
              </MenuItem>
            </Select>

            <FormHelperText>&nbsp;</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};
