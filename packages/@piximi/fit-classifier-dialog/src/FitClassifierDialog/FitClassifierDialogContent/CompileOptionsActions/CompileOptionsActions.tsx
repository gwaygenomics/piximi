import * as React from "react";
import {useStyles} from "./CompileOptionsActions.css";
import {CompileButton} from "../CompileButton/CompileButton";
import {PreviousStepIconButton} from "../PreviousStepIconButton";

type CompileOptionsActionsProps = {
  activeStep: any;
  next: any;
  previous: any;
};

export const CompileOptionsActions = ({
  activeStep,
  next,
  previous
}: CompileOptionsActionsProps) => {
  const classes = useStyles({});

  return (
    <div className={classes.actionsContainer}>
      <div>
        <PreviousStepIconButton activeStep={activeStep} previous={previous} />

        <CompileButton next={next} />
      </div>
    </div>
  );
};
