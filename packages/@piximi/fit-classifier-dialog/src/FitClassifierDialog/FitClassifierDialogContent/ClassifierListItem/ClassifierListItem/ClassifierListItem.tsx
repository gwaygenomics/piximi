import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import * as React from "react";
import {useCollapseList} from "@piximi/hooks";

import {ClassifierForm} from "../ClassifierForm";

type ClassifierListItemProps = {};

export const ClassifierListItem = ({}: ClassifierListItemProps) => {
  const {collapsedList, collapseList} = useCollapseList();

  return (
    <>
      <ListItem onClick={collapseList}>
        <ListItemIcon>
          {collapsedList ? <ExpandLess /> : <ExpandMore />}
        </ListItemIcon>

        <ListItemText>Classifier options</ListItemText>
      </ListItem>

      <Collapse in={collapsedList} timeout="auto" unmountOnExit>
        <ClassifierForm />
      </Collapse>
    </>
  );
};
