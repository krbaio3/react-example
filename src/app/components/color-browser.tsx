import * as React from 'react';
import { Color } from '../models';

interface Props {
  color: Color;
}

export const ColorBrowser = (props: Props) => {
  const divStyle: React.CSSProperties = {
    width: '11rem',
    height: '7rem',
    background: `
        rgb(${props.color.red},
        ${props.color.green},
        ${props.color.blue})`,
  };

  return <div style={divStyle} />;
};
