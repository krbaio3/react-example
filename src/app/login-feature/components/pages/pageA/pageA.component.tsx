import * as React from 'react';
import {Link} from 'react-router-dom'

export const PageAComponent = () => (
  <>
    <h2>Hello from PageA</h2>
    <Link to="/PageB">Link to PageB</Link>
  </>
);
