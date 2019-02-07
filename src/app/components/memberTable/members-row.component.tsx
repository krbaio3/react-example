import * as React from 'react';
import { MemberEntity } from '../../shared/models';

interface Props {
  member: MemberEntity;
}

const imgStyle: React.CSSProperties = {
  height: '50px',
  width: '50px',
};

export const MemberRow = ({member}: Props) => {

    // const {member} = props;

  return (
    <tr key={member.id}>
      <td>
        <img style={imgStyle} src={member.avatar_url} />
      </td>
      <td>{member.id}</td>
      <td>{member.login}</td>
    </tr>
  );
};
