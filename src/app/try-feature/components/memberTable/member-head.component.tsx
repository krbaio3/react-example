import * as React from 'react';
import { Head } from '../../../shared/models';

interface Props {
  head: Head;
}

export const HeadTableComponent = (props: Props) => (
  <thead>
    <tr>
      <th>{props.head.col1}</th>
      <th>{props.head.col2}</th>
      <th>{props.head.col3}</th>
    </tr>
  </thead>
);
