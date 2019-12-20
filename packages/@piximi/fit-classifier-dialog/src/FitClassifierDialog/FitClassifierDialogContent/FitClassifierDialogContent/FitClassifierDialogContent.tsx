import DialogContent from "@material-ui/core/DialogContent";
import List from "@material-ui/core/List";
import * as React from "react";
import {CompileOptionsListItem} from "../CompileOptionsListItem";
import {History} from "../History";

type FitClassifierDialogContentProps = {};

export const FitClassifierDialogContent = ({}: FitClassifierDialogContentProps) => {
  return (
    <DialogContent>
      <History />

      <List dense>
        <CompileOptionsListItem />
      </List>
    </DialogContent>
  );
};
