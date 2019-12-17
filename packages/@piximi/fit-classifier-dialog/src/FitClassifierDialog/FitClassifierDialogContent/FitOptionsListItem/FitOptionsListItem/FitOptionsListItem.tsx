import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import * as React from "react";
import {useCollapseList} from "@piximi/hooks";

import {FitOptionsForm} from "../FitOptionsForm";

type FitOptionsListItemProps = {};

export const FitOptionsListItem = ({}: FitOptionsListItemProps) => {
  const {collapsedList, collapseList} = useCollapseList();

  return (
    <>
      <ListItem onClick={collapseList}>
        <ListItemIcon>
          {collapsedList ? <ExpandLess /> : <ExpandMore />}
        </ListItemIcon>

        <ListItemText>Fit options</ListItemText>
      </ListItem>

      <Collapse in={collapsedList} timeout="auto" unmountOnExit>
        <FitOptionsForm />
      </Collapse>
    </>
  );
};
