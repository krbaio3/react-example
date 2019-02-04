import * as React from 'react';

// componentes
import { HelloComponent } from './components/hello';
import { NameEditComponent } from './components/nameEdit';
import { ButtonComponent } from './components/button.component';

interface Props {}

interface State {
  username: string;
  disabled: boolean;
}

export class App extends React.Component<Props, State> {
  public state = { username: 'por defecto', disabled: false };

  constructor(props) {
    super(props);

    // Hay dos opciones para no perder el this en las clases,
    // una, es bindear el this del método cuando se llame:
    // Así se le asigna el objeto this del método, y no el de la función que la invoca
    // this.setUserName = this.setUserName.bind(this);
  }

  public setUserName = (newName: string) => {
    this.setState({ username: newName });
  };

  public clickButton = () => {
    console.log('click');
  };

  // se le tiene que asignar el this del método que lo llame
  // public setUserName(e) {
  //   this.setState({username: e.target.value});
  // }

  render() {
    return (
      <>
        <HelloComponent username={this.state.username} />
        <NameEditComponent
          initialUsername={this.state.username}
          onNameUpdated={this.setUserName}
        />
        <br/>
        <ButtonComponent
          name='Soy un boton'
          disabled={this.state.disabled}
          onClick={this.clickButton}
        />
      </>
    );
  }
}
