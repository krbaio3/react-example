import * as React from 'react';

interface Props {
  editingUsername: string;
  onEditingUsernameUpdated: (newName: string) => void;
  onUsernameUpdateRequest: () => void;
  isDisabled: boolean;
}

const onChange = (props: Props) => (e: React.ChangeEvent<HTMLInputElement>) => {
  props.onEditingUsernameUpdated(e.target.value);
};

export const NameEditComponent = (props: Props) => (
  <>
    <label>Update name:</label>
    <input value={props.editingUsername} onChange={onChange(props)} />
    <button onClick={props.onUsernameUpdateRequest}
            disabled={props.isDisabled}
    >
      Change
      </button>
  </>
);
