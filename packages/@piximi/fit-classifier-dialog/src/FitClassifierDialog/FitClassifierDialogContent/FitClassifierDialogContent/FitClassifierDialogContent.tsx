import DialogContent from "@material-ui/core/DialogContent";
import * as React from "react";
import {FitClassifierDialogContentStepper} from "../FitClassifierDialogContentStepper";
import {History} from "../History";

type FitClassifierDialogContentStepperProps = {};

export const FitClassifierDialogContent = ({}: FitClassifierDialogContentStepperProps) => {
  const [lossData, setLossData] = React.useState([]);
  const [validationLossData, setValidationLossData] = React.useState([]);
  const [accuracyData, setAccuracyData] = React.useState([]);
  const [validationAccuracyData, setValidationAccuracyData] = React.useState(
    []
  );

  return (
    <DialogContent style={{paddingTop: "80px"}}>
      <History
        status={"Training"}
        lossData={lossData}
        validationLossData={validationLossData}
        accuracyData={accuracyData}
        validationAccuracyData={validationAccuracyData}
      />

      <FitClassifierDialogContentStepper
        accuracyData={accuracyData}
        lossData={lossData}
        setAccuracyData={setAccuracyData}
        setLossData={setLossData}
        setValidationAccuracyData={setValidationAccuracyData}
        setValidationLossData={setValidationLossData}
        validationAccuracyData={validationAccuracyData}
        validationLossData={validationLossData}
      />
    </DialogContent>
  );
};
