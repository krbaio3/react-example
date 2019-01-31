import * as React from 'react';

interface Props
{
  userName: string;
  onChange: ( event: any ) => void;
}

export const NameEditComponent = ( props: Props ) =>
  <>
    <label>Update name:</label>
    <input value={ props.userName } onChange={ props.onChange } />
  </>