import React, { Children, useState } from "react";
import "./button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn-outline"];
const SIZES = ["btn-medium", "btn-large"];
const COLORS: Map<string, [string, string, string, string]> = new Map([
  ["green", ["#22AB22", "#000000", "#00CC00", "#FFFFFF"]],
  ["blue", ["#0000C6", "#DFCC00", "#0000EE", "#FFFFFF"]],
  ["white", ["#FFFFFF", "#000000", "#AAAAAA", "#000000"]],
  ["black", ["#000000", "#FFFFFF", "#000000", "#FF60FF"]],
  ["UF", ["#004BFF", "#FF6700", "#111288", "#F88F03"]],
  ["greygreen", ["#666666", "#00EF00", "#111111", "#32BC32"]],
]);

interface Props {
  _routing: string;
  _buttonSize: string;

  _usePalette?: boolean;
  children?: React.ReactNode;
  _onClick?: () => void;
  _buttonStyle?: string;
  _buttonColor?: string;
  _palette?: [string, string, string, string];
}

const Button = ({
  _onClick,
  _routing,
  _buttonStyle,
  _buttonSize,
  _buttonColor,
  children,
  _usePalette = false,
  _palette,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleEnter = () => {
    setIsHovered(true);
  };

  const handleExit = () => {
    setIsHovered(false);
  };

  const checkButtonStyle = STYLES.includes(_buttonStyle || "")
    ? _buttonStyle
    : "";
  const checkButtonSize = SIZES.includes(_buttonSize) ? _buttonSize : SIZES[0];
  const colorCheck = typeof _buttonColor == "string" ? _buttonColor : "";
  const _className = `btn ${checkButtonStyle} ${checkButtonSize} `;

  const _styling =
    COLORS.get(colorCheck)?.[0] || _usePalette
      ? isHovered
        ? {
            border: "2px solid",

            backgroundColor: _usePalette
              ? _palette?.[2]
              : COLORS.get(colorCheck)?.[2],

            color: _usePalette ? _palette?.[3] : COLORS.get(colorCheck)?.[3],

            borderColor: _usePalette
              ? _palette?.[3]
              : COLORS.get(colorCheck)?.[3],
          }
        : {
            border: "2px solid",

            backgroundColor: _usePalette
              ? _palette?.[0]
              : COLORS.get(colorCheck)?.[0],

            color: _usePalette ? _palette?.[1] : COLORS.get(colorCheck)?.[1],

            borderColor: _usePalette
              ? _palette?.[1]
              : COLORS.get(colorCheck)?.[1],
          }
      : {};

  //console.log(`value ${_buttonColor} gives styling ${_styling}`);
  if (!_usePalette && colorCheck == "" && checkButtonStyle == "") {
    var report = `A button does not have any type of styling!! It the following children: ${children}`;
    console.log(report);
  }

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
