import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { SessionProvider } from './app/shared/components/session-context.component';
import { App } from './app/app';

import './styles.scss';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <SessionProvider>
      {/* <Router> */}
      <App />
    </SessionProvider>
    {/* </Router> */}
  </MuiThemeProvider>,

  document.getElementById('root')
);
