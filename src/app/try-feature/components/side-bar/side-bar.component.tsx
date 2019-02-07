import * as React from 'react';

const className = require('./side-bar.css');

interface Props {
  isVisilble: boolean;
  children?: any
}

const divStyle = (props: Props): React.CSSProperties => ({
  width: props.isVisilble ? '23rem' : '0rem',
});

export const SideBarComponent: React.StatelessComponent<Props> = (props) => (
  <div 
    id='mySidenav'
    className={className.sidenav}
    style={divStyle(props)}>
        <span>Basic Sidebar, first step</span>

    {props.children}
  </div>
);
 