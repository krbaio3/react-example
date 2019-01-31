import * as React from 'react';

interface Props {
  username: string;
}

export const HelloComponent = ( props: Props ) => {
  return (
    <h2>Aco de Vida {props.username}</h2>
  );
}
