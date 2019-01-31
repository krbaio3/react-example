import * as React from 'react';

// componentes
import { HelloComponent } from './components/hello';
import {NameEditComponent} from './components/nameEdit';

interface Props { }

interface State {
  username: string;
}

export class App extends React.Component<Props, State> {

  state = { username: 'por defecto' };

  // constructor(props: Props) {
  //   super(props);
  //   this.state = { username: 'joder por defecto' };
  // }

  render () {
    return (
      <>
        <HelloComponent username={ this.state.username } />
        <NameEditComponent userName={this.state.username} onChange={(e) => this.setState({username: e.target.value})}  />
      </>
    )
  }
}
