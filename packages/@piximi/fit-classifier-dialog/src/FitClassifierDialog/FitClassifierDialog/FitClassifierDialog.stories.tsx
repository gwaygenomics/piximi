import * as React from "react";
import {storiesOf} from "@storybook/react";
import {FitClassifierDialog} from "./FitClassifierDialog";
import {ThemeProvider} from "@material-ui/styles";
import {createMuiTheme} from "@material-ui/core";
import {useDialog} from "@piximi/hooks";

const theme = createMuiTheme({
  palette: {
    type: "light"
  }
});

storiesOf("FitClassifierDialog", module).add("example", () => {
  const {closeDialog} = useDialog();

  return (
    <ThemeProvider theme={theme}>
      <FitClassifierDialog closeDialog={closeDialog} openedDialog />
    </ThemeProvider>
  );
});
