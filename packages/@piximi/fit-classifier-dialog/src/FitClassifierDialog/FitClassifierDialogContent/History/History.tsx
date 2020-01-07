import * as React from "react";
import {VictoryAxis, VictoryChart, VictoryLine, VictoryTheme} from "victory";
import {Grid, Typography} from "@material-ui/core";
import {useStyles} from "./History.css";

type HistoryProps = {
  status: string;
  lossData: Array<{x: Number; y: Number}>;
  validationLossData: Array<{x: Number; y: Number}>;
  accuracyData: Array<{x: Number; y: Number}>;
  validationAccuracyData: Array<{x: Number; y: Number}>;
};

export const History = (props: HistoryProps) => {
  const {
    status,
    lossData,
    validationLossData,
    accuracyData,
    validationAccuracyData
  } = props;

  const classes = useStyles({});

  return (
    <Grid className={classes.container} container spacing={2}>
      <Grid item xs={4}>
        <Typography classes={{root: classes.typography}}>Loss</Typography>
        <VictoryChart
          height={100}
          padding={0}
          theme={VictoryTheme.material}
          width={400}
        >
          <VictoryAxis
            crossAxis
            standalone={false}
            theme={VictoryTheme.material}
          />

          <VictoryAxis
            crossAxis
            dependentAxis
            standalone={false}
            theme={VictoryTheme.material}
          />

          <VictoryLine data={lossData} style={{data: {stroke: "red"}}} />
          <VictoryLine
            data={validationLossData}
            style={{data: {stroke: "green"}}}
          />
        </VictoryChart>
      </Grid>

      <Grid item xs={4}>
        <Typography classes={{root: classes.typography}}>Metrics</Typography>
        <VictoryChart
          height={100}
          padding={0}
          theme={VictoryTheme.material}
          width={400}
        >
          <VictoryAxis
            crossAxis
            standalone={false}
            theme={VictoryTheme.material}
          />

          <VictoryAxis
            crossAxis
            dependentAxis
            standalone={false}
            theme={VictoryTheme.material}
          />

          <VictoryLine data={accuracyData} style={{data: {stroke: "red"}}} />
          <VictoryLine
            data={validationAccuracyData}
            style={{data: {stroke: "green"}}}
          />
        </VictoryChart>
      </Grid>
    </Grid>
  );
};
