import React from 'react'; // this is needed in .tsx files otherwise a reference to React throws an error
import { ButtonProps } from './button.interface';

export function Button(props: ButtonProps) {
  return (
    <button className={`${props.primary ? 'isPrimary' : ''} ${props.size}`} disabled={props.disabled}>
      {props.label}
    </button>
  );
}
