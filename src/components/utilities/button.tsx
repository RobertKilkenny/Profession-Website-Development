import React, { useState } from "react";
import "./button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn-outline"];
const SIZES = ["btn-medium", "btn-large"];
const COLORS: Map<string, [string, string, string, string]> = new Map([
  ["yellow", ["#E6D20A", "#000000", "#000000", "#FFDC00"]],
]);

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
  const [isHovered, setIsHovered] = useState(false);
  const handleEnter = () => {
    setIsHovered(true);
  };

  const handleExit = () => {
    setIsHovered(false);
  };

  const checkButtonStyle = STYLES.includes(_buttonStyle)
    ? _buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(_buttonSize) ? _buttonSize : SIZES[0];
  const colorCheck = typeof _buttonColor == "string" ? _buttonColor : "";
  const _className = `btn ${checkButtonStyle} ${checkButtonSize} `;
  const _styling = COLORS.get(colorCheck)?.[0]
    ? isHovered
      ? {
          backgroundColor: COLORS.get(colorCheck)?.[2],
          color: COLORS.get(colorCheck)?.[3],
          border: "1px solid",
          borderColor: COLORS.get(colorCheck)?.[3],
        }
      : {
          backgroundColor: COLORS.get(colorCheck)?.[0],
          color: COLORS.get(colorCheck)?.[1],
          border: "1px solid",
          borderColor: COLORS.get(colorCheck)?.[1],
        }
    : {};

  //console.log(`value ${_buttonColor} gives styling ${_styling}`);

  const result = (
    <Link to={_routing} className={_buttonStyle}>
      <button
        className={_className}
        onClick={_onClick}
        style={_styling}
        onMouseEnter={handleEnter}
        onMouseLeave={handleExit}
      >
        {children}
      </button>
    </Link>
  );

  return result;
};

export default Button;
