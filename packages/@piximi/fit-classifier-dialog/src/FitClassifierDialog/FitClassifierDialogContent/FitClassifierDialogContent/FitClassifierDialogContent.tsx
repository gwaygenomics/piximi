import DialogContent from "@material-ui/core/DialogContent";
import List from "@material-ui/core/List";
import * as React from "react";
import {CompileOptions} from "../CompileOptions";
import {History} from "../History";

type FitClassifierDialogContentProps = {};

export const FitClassifierDialogContent = ({}: FitClassifierDialogContentProps) => {
  return (
    <DialogContent>
      <History />

      <List dense>
        <CompileOptions />
      </List>
    </DialogContent>
  );
};
