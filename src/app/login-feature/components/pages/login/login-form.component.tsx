import * as React from 'react';
import { TextField } from '@material-ui/core';
import { LoginEntity } from '../../../../shared/models/login';

interface Props {
  loginInfo: LoginEntity;
  onUpdateField: (fieldName: string, fieldValue: any) => void;
}

export const LoginFormComponent = (props: Props) => {
  const { loginInfo, onUpdateField } = props;

  const onTextFieldChange = (fieldName: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    onUpdateField(fieldName, e.target.value);
  };

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <TextField
        label='Name'
        margin='normal'
        name='login'
        value={loginInfo.login}
        autoComplete='name nickname username'
        onChange={onTextFieldChange('login')}
      />
      <TextField
        label='Password'
        type='password'
        margin='normal'
        name='password'
        autoComplete='current-password'
        value={loginInfo.password}
        onChange={onTextFieldChange('password')}
      />
    </form>
  );
};
