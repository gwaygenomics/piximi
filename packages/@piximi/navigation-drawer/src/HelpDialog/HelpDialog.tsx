import * as React from 'react';
import Button from '@material-ui/core/Button/Button';
import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText/DialogContentText';
import { useTranslation } from 'react-i18next';

type HelpDialogProps = {
  onClose: () => void;
  open: boolean;
};

export const HelpDialog = (props: HelpDialogProps) => {
  const { onClose, open } = props;

  const { t: translation } = useTranslation();

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <DialogContentText>&nbsp;</DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="primary">
          {translation('Cancel')}
        </Button>

        <Button onClick={onClose} color="primary">
          {translation('OK')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
