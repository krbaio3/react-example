import * as React from 'react';
import { MemberEntity } from '../../models';
import { memberAPI } from '../../api';

interface Props {}

interface State {
  members: MemberEntity[];
}

export class MemberTableComponent extends React.Component<Props, State> {
  public state: State = {
    members: [],
  };

  componentDidMount() {
    this.setState({ members: memberAPI.getAllMembers() });
  }

  public render() {
    return (
      <>
        <h3>Usuarios:</h3>
        { this.state.members.map(member => <h5 key={member.id}>{member.login}</h5>) }
      </>
    );
  }
}
