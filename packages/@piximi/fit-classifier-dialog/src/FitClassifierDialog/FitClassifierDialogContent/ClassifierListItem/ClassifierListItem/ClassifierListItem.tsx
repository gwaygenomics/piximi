// import {Collapse, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
// import ExpandLessIcon from "@material-ui/icons/ExpandLess";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import {ClassifierForm} from "../ClassifierForm";
// import * as React from "react";
//
// type ClassifierListItemProps = {};
//
// export const ClassifierListItem = (props: ClassifierListItemProps) => {
//   return(
//     <>
//       <ListItem button onClick={onClasssifierSettingsListClick} style={{padding: "12px 0px"}}>
//         <ListItemIcon>
//           {collapsedClasssifierSettingsList ? (<ExpandLessIcon />) : (<ExpandMoreIcon />)}
//         </ListItemIcon>
//
//         <ListItemText primary="Classifier Settings" style={{fontSize: "20px"}}/>
//       </ListItem>
//
//       <Collapse in={collapsedClasssifierSettingsList} timeout="auto" unmountOnExit>
//         <ClassifierForm
//           batchSize={batchSize}
//           closeDialog={closeDialog}
//           epochs={epochs}
//           inputShape={inputShape}
//           learningRate={learningRate}
//           lossFunction={lossFunction}
//           onBatchSizeChange={onBatchSizeChange}
//           onEpochsChange={onEpochsChange}
//           onInputShapeChange={onInputShapeChange}
//           onLearningRateChange={onLearningRateChange}
//           onLossFunctionChange={onLossFunctionChange}
//           onOptimizationAlgorithmChange={onOptimizationAlgorithmChange}
//           // onDataAugmentationChange={onDataAugmentationChange}
//           openedDialog={openedDialog}
//           optimizationAlgorithm={optimizationAlgorithm}
//         />
//       </Collapse>
//     </>
//   );
// };
