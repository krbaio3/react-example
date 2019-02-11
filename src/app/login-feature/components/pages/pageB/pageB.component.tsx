import * as React from 'react';
import { Link } from 'react-router-dom';
import { SessionContext, SessionContextProps } from '../../../../shared/components/session-context.component';


export const PageBComponent = () => (
  <>
    <SessionContext.Consumer>
      {
        ({login}) => (
          <>
            <h2>Hello from PageB</h2>
            <Link to="/">Link to PageA</Link>
            <h3>{login}</h3>
          </>
        )
      }
    </SessionContext.Consumer>
  </>
);
