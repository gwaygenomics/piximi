import * as React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import {useStyles} from "./Version.css";

type VersionProps = {};

export const Version = ({}: VersionProps) => {
  const classes = useStyles({});

  const onChange = () => {};

  return (
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
  );
};
