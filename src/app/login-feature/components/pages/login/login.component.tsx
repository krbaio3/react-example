import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles';
import { LoginFormComponent } from './login-form.component';
import { LoginButtonComponent } from './login-button.component';
import { RouteComponentProps, withRouter } from 'react-router';
import { LoginEntity, createEmptyLogin } from '../../../../shared/models/login';
import { isValidLogin } from '../../../../api';

// TODO: refactorizarlo en un archivo a parte
/**
 * CSS-in-js
 *
 * @param {*} theme
 */
const styles = theme =>
  createStyles({
    card: {
      maxWidth: 400,
      margin: '0 auto',
      padding: '25px',
    },
    button: {
      margin: '20px auto 0 auto',
    },
  });

interface State {
  loginInfo: LoginEntity;
}

interface Props extends RouteComponentProps, WithStyles<typeof styles> {}

class LoginPageInnerComponent extends React.Component<Props, State> {
  public state: State = { loginInfo: createEmptyLogin() };

  onLogin = () => {
    if (isValidLogin(this.state.loginInfo)) {
      this.props.history.push('/pageB');
    } else {
      console.warn('Tienes que poner user/pass válido!!!');
    }
    // console.log('entra');
  };

  public onUpdateLoginField = (fieldName: string, fieldValue: string) => {
    this.setState({
      loginInfo: {
        ...this.state.loginInfo,
        [fieldName]: fieldValue,
      },
    });
  };

  public render() {
    // destructuring de props
    const { classes } = this.props;

    return (
      <>
        <Card className={classes.card}>
          <CardHeader title='Login' />
          <CardContent />
          <LoginFormComponent
            loginInfo={this.state.loginInfo}
            onUpdateField={this.onUpdateLoginField}
          />
          <LoginButtonComponent
            classButton={classes.button}
            onLogin={this.onLogin}
          />
        </Card>
      </>
    );
  }
}

export const LoginPageComponent = withStyles(styles)(
  withRouter<Props>(LoginPageInnerComponent)
);
