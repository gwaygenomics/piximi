import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import * as React from "react";

import {useStyles} from "./FitOptionsForm.css";

const losses = [
  ["absoluteDifference", "Absolute difference"],
  ["cosineDistance", "Cosine distance"],
  ["hingeLoss", "Hinge"],
  ["huberLoss", "Huber"],
  ["logLoss", "Log"],
  ["meanSquaredError", "Mean squared error (MSE)"],
  ["sigmoidCrossEntropy", "Sigmoid cross entropy"],
  ["categoricalCrossentropy", "Categorical cross entropy"]
];

type FitOptionsFormProps = {};

const LossFunctionTextField = () => {
  return (
    <TextField select>
      {losses.map(([k, v], index) => {
        return (
          <MenuItem dense key={index} value={k}>
            {v}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export const FitOptionsForm = ({}: FitOptionsFormProps) => {
  const classes = useStyles({});

  return (
    <form className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <LossFunctionTextField />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            id="input-shape"
            label="Input shape"
            className={classes.textField}
            value={""}
            disabled
            margin="normal"
          />
        </Grid>

        <Grid item xs={2}>
          <TextField
            id="batch-size"
            label="Batch size"
            className={classes.textField}
            value={32}
            type="number"
            margin="normal"
          />
        </Grid>

        <Grid item xs={2}>
          <TextField
            id="epochs"
            label="Epochs"
            className={classes.textField}
            value={10}
            margin="normal"
            type="number"
          />
        </Grid>
      </Grid>
    </form>
  );
};

//
// type ClassifierFormProps = {
//   batchSize: number;
//   closeDialog: () => void;
//   epochs: number;
//   inputShape: string;
//   learningRate: number;
//   lossFunction: String;
//   onBatchSizeChange: (event: React.FormEvent<EventTarget>) => void;
//   onEpochsChange: (event: React.FormEvent<EventTarget>) => void;
//   onInputShapeChange: (event: React.FormEvent<EventTarget>) => void;
//   onLearningRateChange: (event: React.FormEvent<EventTarget>) => void;
//   onLossFunctionChange: (event: React.FormEvent<EventTarget>) => void;
//   onOptimizationAlgorithmChange: (event: React.FormEvent<EventTarget>) => void;
//   openedDialog: boolean;
//   optimizationAlgorithm: string;
// };
//
// export const ClassifierForm = (props: ClassifierFormProps) => {
//   const {
//     batchSize,
//     closeDialog,
//     epochs,
//     inputShape,
//     learningRate,
//     lossFunction,
//     onBatchSizeChange,
//     onEpochsChange,
//     onInputShapeChange,
//     onLearningRateChange,
//     onLossFunctionChange,
//     onOptimizationAlgorithmChange,
//     openedDialog,
//     optimizationAlgorithm
//   } = props;
//
//   interface State {
//     lossFunction: string;
//     optimizationAlgorithm: string;
//   }
//
//   const [values, setValues] = React.useState<State>({
//     lossFunction: "meanSquaredError",
//     optimizationAlgorithm: "adam"
//   });
//
//   const onChange = (name: keyof State) => (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setValues({...values, [name]: event.target.value});
//   };
//
//   const classes = useStyles({});
//
//   return (
//     <form className={classes.container} noValidate autoComplete="off">
//       <OptimizationGrid
//         optimizationAlgorithm={optimizationAlgorithm}
//         onOptimizationAlgorithmChange={onOptimizationAlgorithmChange}
//         learningRate={learningRate}
//         onLearningRateChange={onLearningRateChange}
//       />
//
//       <Grid container spacing={2}>
//         <Grid item xs={4}>
//
//           <TextField
//             id="loss-function"
//             select
//             label="Loss function"
//             className={classes.textField}
//             value={lossFunction}
//             onChange={onLossFunctionChange}
//             SelectProps={{
//               MenuProps: {
//                 className: classes.menu
//               }
//             }}
//             margin="normal"
//           >
//             {_.map(lossFunctions, (v, k) => {
//               return (
//                 <MenuItem dense key={k} value={k}>
//                   {v}
//                 </MenuItem>
//               );
//             })}
//           </TextField>
//         </Grid>
//       </Grid>
//
//       <Grid container spacing={2}>
//         {/* <Grid item xs={4}>
//           <TextField
//             id="input-shape"
//             label="Input shape"
//             className={classes.textField}
//             value={''}
//             disabled
//             onChange={onInputShapeChange}
//             margin="normal"
//           />
//         </Grid> */}
//
//         <Grid item xs={2}>
//
//           <TextField
//             id="batch-size"
//             label="Batch size"
//             className={classes.textField}
//             value={batchSize}
//             onChange={onBatchSizeChange}
//             type="number"
//             margin="normal"
//           />
//         </Grid>
//
//         <Grid item xs={2}>
//
//           <TextField
//             id="epochs"
//             label="Epochs"
//             className={classes.textField}
//             value={epochs}
//             onChange={onEpochsChange}
//             margin="normal"
//             type="number"
//           />
//         </Grid>
//       </Grid>
//     </form>
//   );
// };
