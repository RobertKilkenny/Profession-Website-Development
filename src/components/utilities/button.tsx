import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn-primary", "btn-outline"];
const SIZES = ["btn-medium", "btn-large"];
const COLORS = ["btn-yellow"];

interface Props {
  _routing: string;
  _buttonStyle: string;
  _buttonSize: string;
  children?: React.ReactNode;
  _onClick?: () => void;
  _buttonColor?: string;
}

const Button = ({
  _onClick,
  _routing,
  _buttonStyle,
  _buttonSize,
  _buttonColor,
  children,
}: Props) => {
  const checkButtonStyle = STYLES.includes(_buttonStyle)
    ? _buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(_buttonSize) ? _buttonSize : SIZES[0];
  const colorCheck = typeof _buttonColor == "string" ? _buttonColor : "";
  const _className = `btn ${checkButtonStyle} ${checkButtonSize} `.concat(
    COLORS.includes(colorCheck) ? colorCheck : ""
  );
  console.log(_className);

  const result = (
    <Link to={_routing} className={_buttonStyle}>
      <button className={_className} onClick={_onClick}>
        {children}
      </button>
    </Link>
  );

  return result;
};

export default Button;
