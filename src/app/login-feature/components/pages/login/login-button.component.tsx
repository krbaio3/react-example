import * as React from 'react';
import { CardActions, Button } from '@material-ui/core';

interface Props {
    classButton: string;
    onLogin:()=> void;
}

export const LoginButtonComponent = (props: Props) =>
    <CardActions>
        <Button className={props.classButton} variant='contained' color='primary' style={{ display: 'flex', justifyContent: 'center' }} onClick={props.onLogin}>
            Login
        </Button>
    </CardActions>
 