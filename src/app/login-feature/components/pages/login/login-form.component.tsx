import * as React from 'react';
import { TextField } from '@material-ui/core';

interface Props {

}

export const LoginFormComponent = (props: Props) =>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <TextField label='Name' margin='normal' />
        <TextField label='Password' type='password' margin='normal' />
    </div>
