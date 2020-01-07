import DialogContent from "@material-ui/core/DialogContent";
import * as React from "react";
import {History} from "../History";
import {FitClassifierDialogContentStepper} from "../FitClassifierDialogContentStepper";

type FitClassifierDialogContentStepperProps = {};

export const FitClassifierDialogContent = ({}: FitClassifierDialogContentStepperProps) => {
  return (
    <DialogContent style={{paddingTop: "80px"}}>
      <History />

      <FitClassifierDialogContentStepper />
    </DialogContent>
  );
};
