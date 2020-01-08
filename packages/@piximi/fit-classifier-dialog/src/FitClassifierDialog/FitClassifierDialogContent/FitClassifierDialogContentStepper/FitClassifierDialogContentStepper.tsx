import * as React from "react";
import Stepper from "@material-ui/core/Stepper";
import {Step} from "@material-ui/core";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import {CompileOptionsForm} from "../CompileOptionsForm";
import {FitOptionsForm} from "../FitOptionsForm";
import {PreprocessingOptionsForm} from "../PreprocessingOptionsForm";
import {FitOptionsActions} from "../FitOptionsActions";
import {CompileOptionsActions} from "../CompileOptionsActions";
import {PreprocessingOptionsActions} from "../PreprocessingOptionsActions";

type FitClassifierDiaslogContentProps = {};

export const FitClassifierDialogContentStepper = ({}: FitClassifierDiaslogContentProps) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const next = () => {
    setActiveStep((previous) => previous + 1);
  };

  const previous = () => {
    setActiveStep((previous) => previous - 1);
  };

  const reset = () => {
    setActiveStep(0);
  };

  return (
    <Stepper activeStep={activeStep} orientation="vertical">
      <Step key="compile-options">
        <StepLabel>Compile options</StepLabel>

        <StepContent>
          <CompileOptionsForm />

          <CompileOptionsActions
            activeStep={activeStep}
            next={next}
            previous={previous}
          />
        </StepContent>
      </Step>

      <Step key="preprocessing-options">
        <StepLabel>Preprocessing options</StepLabel>

        <StepContent>
          <PreprocessingOptionsForm />

          <PreprocessingOptionsActions
            activeStep={activeStep}
            next={next}
            previous={previous}
          />
        </StepContent>
      </Step>

      <Step key="fit-options">
        <StepLabel>Fit options</StepLabel>

        <StepContent>
          <FitOptionsForm />

          <FitOptionsActions
            activeStep={activeStep}
            next={next}
            previous={previous}
          />
        </StepContent>
      </Step>
    </Stepper>
  );
};
