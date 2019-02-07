import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles';
import { LoginFormComponent } from './login-form.component';
import { LoginButtonComponent } from './login-button.component';
import { RouteComponentProps, withRouter } from 'react-router';


// TODO: refactorizarlo en un archivo a parte
/**
 * CSS-in-js
 *
 * @param {*} theme
 */
const styles = theme => createStyles({
  card: {
    maxWidth: 400,
    margin: '0 auto',
    padding: '25px',
  },
  button: {
    margin: '20px auto 0 auto'
  }
});

interface Props extends RouteComponentProps, WithStyles<typeof styles> {

}

const LoginPageInnerComponent = (props: Props) => {
  const { classes } = props;

  const onLogin = () => {
    props.history.push('/pageB');
    // console.log('entra');
  }

  return (
    <>
      <Card className={classes.card}>
        <CardHeader title='Login' />
        <CardContent />
        <LoginFormComponent />
        <LoginButtonComponent classButton={classes.button} onLogin={onLogin}/>
      </Card>
    </>
  );
};

export const LoginPageComponent = withStyles(styles)(withRouter<Props>(LoginPageInnerComponent));