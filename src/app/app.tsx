import * as React from 'react';

// componentes
import { HelloComponent } from './components/hello.component';
import { NameEditComponent } from './components/name-edit.component';
import { ButtonComponent } from './components/button.component';
import { ColorPicker } from './components/color-picker.component';
import { Color } from './models/color';
import { ColorBrowser } from './components/color-browser';

interface Props {}

interface State {
  username: string;
  disabled: boolean;
  editingUsername: string;
  color: Color;
}

export class App extends React.Component<Props, State> {
  public state = {
    username: 'por defecto',
    disabled: false,
    editingUsername: 'por defecto',
    color: { red: 90, green: 50, blue: 70 },
  };

  constructor(props) {
    super(props);
    setTimeout(() => {
      const newName = 'esto cambia por setTimeOut';
      this.setState({ username: newName, editingUsername: newName });
    }, 2000);

    // Hay dos opciones para no perder el this en las clases,
    // una, es bindear el this del método cuando se llame:
    // Así se le asigna el objeto this del método, y no el de la función que la invoca
    // this.setUserName = this.setUserName.bind(this);
  }

  public setUserName = () => {
    this.setState({ username: this.state.editingUsername });
  };

  public setColorState = (color: Color) => {
    this.setState({ color });
  };

  public clickButton = () => {
    console.log('click');
  };

  public updateEditingName = (editingUsername: string) => {
    this.setState({ editingUsername });
  };

  public isDisabled = (): boolean => {
    if (
      !this.state.editingUsername ||
      this.state.editingUsername === this.state.username
    ) {
      return true;
    }
    return false;
  };

  // se le tiene que asignar el this del método que lo llame
  // public setUserName(e) {
  //   this.setState({username: e.target.value});
  // }

  render() {
    return (
      <>
        <ColorBrowser color={this.state.color} />
        <p>
          Color: [ 
          red: {this.state.color.red}
          green: {this.state.color.green}
          blue: {this.state.color.blue}
          ]
        </p>
        <ColorPicker
          color={this.state.color}
          onColorUpdated={this.setColorState}
        />
        <HelloComponent username={this.state.username} />
        <NameEditComponent
          editingUsername={this.state.editingUsername}
          onUsernameUpdateRequest={this.setUserName}
          onEditingUsernameUpdated={this.updateEditingName}
          isDisabled={this.isDisabled()}
        />
        <br />
        <ButtonComponent
          name='Soy un boton'
          disabled={this.state.disabled}
          onClick={this.clickButton}
        />
      </>
    );
  }
}
