import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles';


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

interface Props extends WithStyles<typeof styles> {

}

const LoginPageInnerComponent = (props: Props) => {
  const {classes} = props;
  return (
    <>
      <Card className={classes.card}>
        <CardHeader title='Login' />
        <CardContent />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <TextField label='Name' margin='normal' />
          <TextField label='Password' type='password' margin='normal' />
        </div>
        <CardActions>
          <Button className={classes.button} variant='contained' color='primary' style={{ display: 'flex', justifyContent: 'center'}}>
            Login
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export const LoginPageComponent = withStyles(styles)(LoginPageInnerComponent);