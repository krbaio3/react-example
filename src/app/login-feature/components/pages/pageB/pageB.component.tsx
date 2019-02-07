import * as React from 'react';
import { Link } from 'react-router-dom';

export const PageBComponent = () => (
  <>
    <h2>Hello from PageB</h2>
    <Link to="/">Link to PageA</Link>
  </>
);
