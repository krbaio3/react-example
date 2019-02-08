import * as React from 'react';
import { Color } from '../../shared/models';
import { ColorSliderComponent } from './';

interface Props {
  color: Color;
  onColorUpdated: (color: Color) => void;
}

const onColorValueUpdate = (props: Props, id: keyof Color) => (
  value: number
) => {
  const newColor = {
    ...props.color,
    [id]: value,
  };
  props.onColorUpdated(newColor);
};

export const ColorPicker = (props: Props) => (
  <>
    <ColorSliderComponent
      value={props.color.red}
      onValueUpdated={onColorValueUpdate(props, 'red')}
    />
    <br />
    <ColorSliderComponent
      value={props.color.green}
      onValueUpdated={onColorValueUpdate(props, 'green')}
    />
    <br />
    <ColorSliderComponent
      value={props.color.blue}
      onValueUpdated={onColorValueUpdate(props, 'blue')}
    />
    <br />
  </>
);