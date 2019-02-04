import * as React from 'react';
import { Color } from '../models/color';

interface Props {
  color: Color;
  onColorUpdated: (color: Color) => void;
}

export const ColorPicker = (props: Props) => (
  <>
    {props.color.red}
    <input
      type='range'
      name='colorPicker'
      id='colorPicker'
      min='0'
      max='255'
      value={props.color.red}
      onChange={e =>
        props.onColorUpdated({
          red: +e.target.value,
          green: props.color.green,
          blue: props.color.blue,
        })
      }
    />
    <br />
    {props.color.green}
    <input
      type='range'
      name='colorPicker'
      id='colorPicker'
      min='0'
      max='255'
      value={props.color.green}
      onChange={e =>
        props.onColorUpdated({
          red: props.color.red,
          green: +e.target.value,
          blue: props.color.blue,
        })
      }
    />
    <br />
    {props.color.blue}
    <input
      type='range'
      name='colorPicker'
      id='colorPicker'
      min='0'
      max='255'
      value={props.color.blue}
      onChange={e =>
        props.onColorUpdated({
          red: props.color.red,
          green: props.color.green,
          blue: +e.target.value,
        })
      }
    />
  </>
);
