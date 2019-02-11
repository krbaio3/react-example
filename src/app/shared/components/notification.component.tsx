import * as React from 'react';
import { Button } from '@material-ui/core';
import SnackBar from '@material-ui/core/Snackbar';
import IconsButton from '@material-ui/core/IconButton';
import { Close } from '@material-ui/icons';
import { withStyles, IconButton } from '@material-ui/core';

interface Props {
  message: string;
  show: boolean;
  onClose: () => void;
}

export const NotificationComponent = ({ message, onClose, show }: Props) => (
  <SnackBar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    open={show}
    autoHideDuration={3000}
    onClose={onClose}
    ContentProps={{
      'aria-describedby': 'message-id',
    }}
    message={<span id='message-id'>{message}</span>}
    action={[
      <IconButton
        key='close'
        aria-label='Close'
        color='inherit'
        onClick={onClose}
      >
        <Close />
      </IconButton>,
    ]}
  />
);
