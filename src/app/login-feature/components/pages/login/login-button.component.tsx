import * as React from 'react';
import { CardActions, Button } from '@material-ui/core';

interface Props {
  classButton: string;
  onLogin: () => void;
}

export const LoginButtonComponent = (props: Props) => {
  const {onLogin, classButton} = props;

  return (
    <CardActions>
      <Button
        className={classButton}
        variant='contained'
        color='primary'
        style={{ display: 'flex', justifyContent: 'center' }}
        onClick={onLogin}
      >
        Login
      </Button>
    </CardActions>
  );
};
