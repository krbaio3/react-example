import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles';
import { LoginFormComponent } from './login-form.component';
import { LoginButtonComponent } from './login-button.component';
import { RouteComponentProps, withRouter } from 'react-router';
import { LoginEntity, createEmptyLogin } from '../../../../shared/models/login';
import { NotificationComponent } from '../../../../shared/components';
import { isValidLogin } from '../../../../api';
import { LoginFormErrors, createDefaultLoginFormErrors } from '../../../models';
import { loginFormValidationComponent } from './login-validation.component';
import { SessionContext } from '../../../../shared/components/session-context.component';

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
  loginFormErrors: LoginFormErrors;
  showLoginFailedNotification: boolean;
}

interface Props extends RouteComponentProps, WithStyles<typeof styles> { }

class LoginPageInnerComponent extends React.Component<Props, State> {


  public state: State = {
    loginInfo: createEmptyLogin(),
    showLoginFailedNotification: false,
    loginFormErrors: createDefaultLoginFormErrors(),
  };

  onLogin = () => {
    loginFormValidationComponent
      .validateForm(this.state.loginInfo)
      .then(formValidationResut => {
        if (formValidationResut.succeeded) {
          if (isValidLogin(this.state.loginInfo)) {
            this.props.updateContextLogin(this.state.loginInfo.login);
            this.props.history.push('/pageB');
          } else {
            this.setState({ showLoginFailedNotification: true });
            console.warn('Tienes que poner user/pass válido!!!');
          }
        } else {
          alert(`Error, review the fields Login and Password`);
          const updateLoginFormErrors = {
            ...this.state.loginFormErrors,
            ...formValidationResut.fieldErrors,
          }
          this.setState({ loginFormErrors: updateLoginFormErrors });
        }
      });
    // console.log('entra');
  };

  public onUpdateLoginField = (fieldName: string, fieldValue: string) => {
    this.setState({
      loginInfo: {
        ...this.state.loginInfo,
        [fieldName]: fieldValue,
      },
    });
    loginFormValidationComponent
      .validateField(this.state.loginInfo, fieldName, fieldValue)
      .then(FieldValidationResult => {
        this.setState({
          loginFormErrors: {
            ...this.state.loginFormErrors,
            [fieldName]: FieldValidationResult,
          },
        });
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
            loginFormErrors={this.state.loginFormErrors}
          />
          <LoginButtonComponent
            classButton={classes.button}
            onLogin={this.onLogin}
          />
        </Card>
        <NotificationComponent
          message='Tienes que poner user/pass válido!!!'
          show={this.state.showLoginFailedNotification}
          onClose={() => this.setState({ showLoginFailedNotification: false })}
        />
      </>
    );
  }
}

export const LoginPageInner2Component = (props) =>
  <>
    <SessionContext.Consumer>
      {
        ({ updateLogin }) =>
          <LoginPageInnerComponent updateLogin={updateLogin} {...props} />
      }

    </SessionContext.Consumer>
  </>

export const LoginPageComponent = withStyles(styles)(
  withRouter<Props>(LoginPageInner2Component)
);
