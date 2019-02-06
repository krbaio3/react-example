import * as React from 'react';
import { MemberEntity, Head } from '../../models';
import { memberAPI } from '../../api';
import { MemberRow } from './members-row.component';
import { HeadTableComponent } from './member-head.component';

interface Props {}

interface State {
  members: MemberEntity[];
  head: Head;
}

export class MemberTableComponent extends React.Component<Props, State> {
  public state: State = {
    members: [],
    head: { col1: 'avatar', col2: 'id', col3: 'name' },
  };

  componentDidMount() {
    memberAPI
      .getAllMembers()
      .then(members => {
        this.setState({ members });
      })
      .catch(error => {
        console.error((`Error al llamar al API: ${error}`))
      });
  }

  public render() {
    return (
      <>
        <table>
          <HeadTableComponent head={this.state.head} />
          <tbody>
            {this.state.members.map(member => (
              <MemberRow key={member.id} member={member} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
