import * as React from 'react';
import { TextField } from '@material-ui/core';
import { LoginEntity } from '../../../../shared/models';
import { LoginFormErrors } from '../../../models';
import { TextFieldForm } from '../../../../shared/components/text-field-form.component';

interface Props {
  loginInfo: LoginEntity;
  onUpdateField: (fieldName: string, fieldValue: any) => void;
  loginFormErrors: LoginFormErrors;
}

export const LoginFormComponent = (props: Props) => {
  const { loginInfo, onUpdateField, loginFormErrors } = props;

  // const onTextFieldChange = (fieldName: string) => (
  //   e: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   onUpdateField(fieldName, e.target.value);
  // };



  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <TextFieldForm
        label='Name'
        // margin='normal'
        name='login'
        value={loginInfo.login}
        // autoComplete='name nickname username'
        onChange={onUpdateField}
        error={loginFormErrors.login.errorMessage}
      />
      <TextFieldForm
        label='Password'
        type='password'
        // margin='normal'
        name='password'
        // autoComplete='current-password'
        value={loginInfo.password}
        onChange={onUpdateField}
        error={loginFormErrors.password.errorMessage}
      />
    </form>
  );
};
