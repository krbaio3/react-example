import * as React from 'react';
import {
  Route,
  Link,
  HashRouter,
  Switch,
  BrowserRouter,
} from 'react-router-dom';

// componentes
import {
  HelloComponent,
  NameEditComponent,
  ButtonComponent,
  ColorPicker,
  ColorBrowserComponent,
  SideBarComponent,
  MemberTableComponent,
  CaritasComponent,
} from './try-feature/components';

import {
  LoginPageComponent,
  PageAComponent,
  PageBComponent,
} from './login-feature/components/pages';

import { Color } from './shared/models';


interface Props {}

interface State {
  username: string;
  disabled: boolean;
  editingUsername: string;
  color: Color;
  isSideBarVisible: boolean;
  level: number;
}

export class App extends React.Component<Props, State> {
  public state: State = {
    username: 'por defecto',
    disabled: false,
    editingUsername: 'por defecto',
    color: { red: 90, green: 50, blue: 70 },
    isSideBarVisible: false,
    level: 200,
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

  public toggleSideBarvisibility = () => {
    const isSideBarVisible = !this.state.isSideBarVisible;

    this.setState({ isSideBarVisible });
  };

  public clickButton = () => {
    console.log('click');
  };

  public updateRangeCarita = (level: number) => {
    this.setState({ level });
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
        <p>Sólo se pinta si necesita renderizar el componente</p>
        <CaritasComponent level={this.state.level} />
        <input
          type='range'
          name='carita'
          id='carita'
          min='0'
          max='500'
          value={this.state.level}
          onChange={e => this.updateRangeCarita(+e.target.value)}
        />
        <SideBarComponent isVisilble={this.state.isSideBarVisible}>
          <ul>
            {/* <li>
              <Link to='/'>CaritasComponent</Link>
            </li>
            <li>
              <Link to='/color'>ColorBrowserComponent</Link>
            </li>
            <li>
              <Link to='/hello'>HelloComponent</Link>
            </li> */}
            <li>
              <a href='https://www.imdb.com/title/tt0816692'>Interstellar</a>
            </li>
            <li>
              <a href='https://www.imdb.com/title/tt0083658'>Blade Runner</a>
            </li>
            <li>
              <a href='https://www.imdb.com/title/tt0062622'>
                2001: A Space Odyssey
              </a>
            </li>
          </ul>
        </SideBarComponent>
        <br />
        <p>Tabla de miembros con Fetch</p>
        <MemberTableComponent />
        <br />
        <ColorBrowserComponent color={this.state.color} />
        <p>
          Color: [ red: {this.state.color.red}
          green: {this.state.color.green}
          blue: {this.state.color.blue}]
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
        <div style={{ float: 'right' }}>
          <button onClick={this.toggleSideBarvisibility}>
            <span
              style={{
                display: this.state.isSideBarVisible ? 'none' : 'block',
              }}
            >
              Open
            </span>
            <span
              style={{
                display: !this.state.isSideBarVisible ? 'none' : 'block',
              }}
            >
              Close
            </span>
          </button>
        </div>
        <h1>Ejemplo de tabla rasa</h1>
        {/* Se puede hacer con HashRouter, que es compatibilidad para navegadores antiguos, 
        o se puede usar BrowserRouter, que es para navegadores modernos*/}
        {/* <HashRouter> */}
        <BrowserRouter>
          <Switch>
            <Route exact={true} path='/' component={LoginPageComponent} />
            <Route path='/pageB' component={PageBComponent} />
          </Switch>
        </BrowserRouter>
        {/* </HashRouter> */}
        {/* <Route path='/' component={CaritasComponent} />
        <Route path='/color' component={ColorBrowserComponent} />
        <Route path='/hello' component={HelloComponent} /> */}
      </>
    );
  }
}
