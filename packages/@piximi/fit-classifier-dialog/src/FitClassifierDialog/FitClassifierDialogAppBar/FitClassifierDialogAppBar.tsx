// import * as React from "react";
// import {
//   ArrowBack,
//   Stop,
//   PlayCircleOutline,
//   ReplayRounded
// } from "@material-ui/icons";
// import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
// import classNames from "classnames";
// import {AppBar, IconButton, Toolbar, Tooltip} from "@material-ui/core";

//
// export const DialogAppBar = (props: any) => {
//   const {onStopTrainingChange, closeDialog, fit, openedDrawer} = props;
//
//   const classes = useStyles({});
//
//   return (
//     <AppBar
//       className={classNames(classes.appBar, {
//         [classes.appBarShift]: openedDrawer,
//         [classes.appBarShiftLeft]: openedDrawer
//       })}
//     >
//
//       <Toolbar>
//
//         <Tooltip title="Close Dialog" placement="bottom">
//           <IconButton
//             edge="start"
//             color="primary"
//             onClick={closeDialog}
//             aria-label="Close"
//             href={""}
//           >
//             <ArrowBack />
//           </IconButton>
//         </Tooltip>
//         <div className={classes.grow} />
//
//         <Tooltip title="Fit the model" placement="bottom">
//           <IconButton className={classes.button} onClick={fit} href={""}>
//             <PlayCircleOutline />
//           </IconButton>
//         </Tooltip>
//
//         <Tooltip title="Stop fitting the model" placement="bottom">
//           <IconButton
//             className={classes.button}
//             onClick={onStopTrainingChange}
//             href={""}
//           >
//             <Stop />
//           </IconButton>
//         </Tooltip>
//         <IconButton
//           disabled
//           className={classes.button}
//           onClick={closeDialog}
//           href={""}
//         >
//           <ReplayRounded />
//         </IconButton>
//       </Toolbar>
//     </AppBar>
//   );
// };

import AppBar from "@material-ui/core/AppBar/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import ArrowBack from "@material-ui/icons/ArrowBack";
import PlayCircleOutline from "@material-ui/icons/PlayCircleOutline";
import ReplayRounded from "@material-ui/icons/ReplayRounded";
import Stop from "@material-ui/icons/Stop";
import * as React from "react";

import {useStyles} from "./FitClassifierDialogAppBar.css";

type FitClassifierDialogAppBar = {
  closeDialog: () => void;
};

const onStart = () => {};

const onStop = () => {};

const onRestart = () => {};

export const FitClassifierDialogAppBar = ({
  closeDialog
}: FitClassifierDialogAppBar) => {
  const classes = useStyles({});

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Tooltip title={"Close"}>
          <IconButton aria-label={"close"} onClick={closeDialog}>
            <ArrowBack />
          </IconButton>
        </Tooltip>

        <div className={classes.grow} />

        <Tooltip title={"Start"}>
          <IconButton aria-label={"start"} onClick={onStart}>
            <PlayCircleOutline />
          </IconButton>
        </Tooltip>

        <Tooltip title={"Stop"}>
          <IconButton aria-label={"stop"} onClick={onStop}>
            <Stop />
          </IconButton>
        </Tooltip>

        <Tooltip title={"Restart"}>
          <IconButton aria-label={"restart"} onClick={onRestart}>
            <ReplayRounded />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};
