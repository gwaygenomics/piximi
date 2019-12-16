// import {
//   Button, Checkbox,
//   Collapse, Dialog,
//   DialogContent, FormControlLabel,
//   FormGroup,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Tooltip
// } from "@material-ui/core";
// import ExpandLessIcon from "@material-ui/icons/ExpandLess";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import Typography from "@material-ui/core/Typography";
// import {RescalingForm} from "../../RescalingForm/RescalingForm";
// import {Form} from "../../Form/Form";
// import Slider from "@material-ui/core/Slider";
// import * as React from "react";
//
// type PreprocessingListItemProps = {
//
// }
//
// export const PreprocessingListItem = (props: any) => {
//   return (
//     <>
//       <ListItem button onClick={onPreprocessingListClick} style={{padding: "12px 0px"}}>
//         <ListItemIcon>
//           {collapsedPreprocessingList ? (<ExpandLessIcon />) : (<ExpandMoreIcon />)}
//         </ListItemIcon>
//
//         <ListItemText primary="Preprocessing" style={{fontSize: "1em"}} />
//       </ListItem>
//
//       <Collapse in={collapsedPreprocessingList} timeout="auto" unmountOnExit>
//         <Tooltip title="Apply Preprocessing Settings" placement="bottom">
//           <Button variant="contained" color="primary" onClick={onPreprocessingClick}>
//             Apply Preprocessing
//           </Button>
//         </Tooltip>
//
//         <Typography id="rescaling" gutterBottom>
//           Pixel Intensity Rescaling
//         </Typography>
//
//         <RescalingForm
//           onLowerPercentileChange={onLowerPercentileChange}
//           onUpperPercentileChange={onUpperPercentileChange}
//           lowerPercentile={lowerPercentile}
//           upperPercentile={upperPercentile}
//           closeDialog={closeDialog}
//           openedDialog={openedDialog}
//         />
//
//         <Typography id="augmentation" gutterBottom>
//           Data Augmentation
//         </Typography>
//
//         <FormGroup row>
//           <FormControlLabel control={<Checkbox value="randomDataAugmentation" />} label="Random Data Augmentation">
//
//           </FormControlLabel>
//         </FormGroup>
//
//         <Typography id="resizing" gutterBottom>
//           Resizing
//         </Typography>
//
//         <FormGroup row>
//           <FormControlLabel control={<Checkbox value="paddingOption1" />} label="Padding Option 1">
//
//           </FormControlLabel>
//         </FormGroup>
//
//         <FormGroup row>
//           <FormControlLabel control={<Checkbox value="paddingOption2" />} label="Padding Option 2">
//
//           </FormControlLabel>
//         </FormGroup>
//       </Collapse>
//     </>
//   );
// };

import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import * as React from "react";
import {useCollapseList} from "@piximi/hooks";

type PreprocessingListItemProps = {};

export const PreprocessingListItem = (props: PreprocessingListItemProps) => {
  const {collapsedList, collapseList} = useCollapseList();

  return (
    <>
      <ListItem onClick={collapseList}>
        <ListItemIcon>
          {collapsedList ? <ExpandLess /> : <ExpandMore />}
        </ListItemIcon>

        <ListItemText>Preprocessing options</ListItemText>
      </ListItem>

      <Collapse in={collapsedList} timeout="auto" unmountOnExit>
        <div />
      </Collapse>
    </>
  );
};
