import DialogContent from "@material-ui/core/DialogContent";
import List from "@material-ui/core/List";
import * as React from "react";

import {FitOptionsListItem} from "../FitOptionsListItem";
import {PreprocessingListItem} from "../PreprocessingListItem";

type FitClassifierDialogContentProps = {};

export const FitClassifierDialogContent = ({}: FitClassifierDialogContentProps) => {
  return (
    <DialogContent>
      <List dense>
        <PreprocessingListItem />

        <FitOptionsListItem />

        {/*<DataListItem/>*/}
      </List>
    </DialogContent>
  );
};
