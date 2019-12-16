import DialogContent from "@material-ui/core/DialogContent";
import List from "@material-ui/core/List";
import * as React from "react";

import {ClassifierListItem} from "../ClassifierListItem";
import {PreprocessingListItem} from "../PreprocessingListItem";

type FitClassifierDialogContentProps = {};

export const FitClassifierDialogContent = ({}: FitClassifierDialogContentProps) => {
  return (
    <DialogContent>
      <List dense>
        <PreprocessingListItem />

        <ClassifierListItem />

        {/*<DataListItem/>*/}
      </List>
    </DialogContent>
  );
};
