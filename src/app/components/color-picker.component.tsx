import * as React from 'react';
import { Color } from '../models/color';
import { ColorSliderComponent } from './color-slider.component';

interface Props {
  color: Color;
  onColorUpdated: (color: Color) => void;
}

export const ColorPicker = (props: Props) => {
  const onColorValueUpdate = (id: keyof Color) => (value: number) => {
    let newColor = null;
    switch (id) {
      case 'red':
        newColor = {
          red: value,
          green: props.color.green,
          blue: props.color.blue,
        };
        return props.onColorUpdated(newColor);
      case 'green':
        newColor = {
          red: props.color.red,
          green: value,
          blue: props.color.blue,
        };
        return props.onColorUpdated(newColor);
      case 'blue':
        newColor = {
          red: props.color.red,
          green: props.color.green,
          blue: value,
        };
        return props.onColorUpdated(newColor);

      default:
        return props.onColorUpdated(newColor);
    }
  };

  return (
    <>
      <ColorSliderComponent
        value={props.color.red}
        onValueUpdated={onColorValueUpdate('red')}
      />
      <br />
      <ColorSliderComponent
        value={props.color.green}
        onValueUpdated={onColorValueUpdate('green')}
      />
      <br />
      <ColorSliderComponent
        value={props.color.blue}
        onValueUpdated={onColorValueUpdate('blue')}
      />
      <br />
    </>
  );
};
