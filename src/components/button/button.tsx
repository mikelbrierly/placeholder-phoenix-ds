import React from 'react';
import { ButtonProps } from './button.interface';
import './button.css';
import classNames from 'classnames';

export const Button = (props: ButtonProps) => {
  const buttonClass = classNames({ isPrimary: props.primary });

  return (
    <button type="button" className={`${buttonClass} ${props.size}`} disabled={props.disabled} {...props}>
      {props.label}
    </button>
  );
};
