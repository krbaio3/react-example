import * as React from 'react';

// Paso 1, cambio de firma

interface Props {
  initialUsername: string;
  onNameUpdated: (newName: string) => void;
}

interface State {
  editingName: string;
}

// Fin cambio de firma

// componente pesado: Class
export class NameEditComponent extends React.Component<Props, State> {
  state = { editingName: this.props.initialUsername };

  // const onHandleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  //   props.onChange(e.target.value);
  onHandleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ editingName: e.target.value });

  onNameSubmit = e => {
    this.props.onNameUpdated(this.state.editingName)
  };

  render() {
    return (
      <>
        <label>Update name:</label>
        <input
          value={this.state.editingName}
          onChange={this.onHandleInputChange}
        />
        <button onClick={this.onNameSubmit}>Change</button>
      </>
    );
  }
}
