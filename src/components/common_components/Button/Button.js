import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];

export const Button = ({
  text,
  type,
  onClick,
  buttonStyle
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];


  return (
    <button
      className={`btn ${checkButtonStyle}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};
export default Button;