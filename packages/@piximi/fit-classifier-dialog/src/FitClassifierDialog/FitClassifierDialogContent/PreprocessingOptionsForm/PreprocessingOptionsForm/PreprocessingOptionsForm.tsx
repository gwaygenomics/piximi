import Grid from "@material-ui/core/Grid";
import * as React from "react";
import List from "@material-ui/core/List";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import {useStyles} from "./PreprocessingOptionsForm.css";

type PreprocessingOptionsFormProps = {};

export const PreprocessingOptionsForm = ({}: PreprocessingOptionsFormProps) => {
  const classes = useStyles({});

  return (
    <List dense>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <TextField
            fullWidth
            id="output-shape-width"
            label="Output shape"
            onChange={() => {}}
            value={224}
          />
        </Grid>

        <Grid item xs={1}>
          <TextField
            fullWidth
            id="output-shape-height"
            label="&nbsp;"
            onChange={() => {}}
            value={224}
          />
        </Grid>

        <Grid item xs={4}>
          <FormControl className={classes.formControl}>
            <InputLabel id="method-label">Method</InputLabel>
            <Select
              labelId="method-label"
              id="method"
              value={3}
              onChange={() => {}}
              style={{width: "100%"}}
            >
              <MenuItem value={0}>Bicubic interpolation</MenuItem>
              <MenuItem value={1}>Bilinear interpolation</MenuItem>
              <MenuItem value={2}>Lanczos</MenuItem>
              <MenuItem value={3}>Nearest-neighbor interpolation</MenuItem>
              <MenuItem value={4}>Mitchell-Netravali</MenuItem>
              <MenuItem value={5}>Gaussian</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={2}>
          <FormControlLabel
            control={<Switch checked />}
            label="Maintain proportions"
            value="maintain-proportions"
          />
        </Grid>
      </Grid>

      <br />
      <br />

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormControlLabel
            control={<Switch checked onChange={() => {}} value="clahe" />}
            label="Contrast limited adaptive histogram equalization (CLAHE)"
          />
        </Grid>
      </Grid>
    </List>
  );
};
