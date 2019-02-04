import * as React from 'react';


interface Props {
    name: string;
    disabled?: boolean;
    onClick: (callback: any) => void;    
}

export const ButtonComponent = ( props: Props ) =>
    <>
        <button
            disabled={props.disabled ? true : false }
            onClick= {props.onClick}
        >
            <label htmlFor="">{props.name}</label>
        </button>
    </>