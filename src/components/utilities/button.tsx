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
const STYLES_LIST = STYLES.toLocaleString;

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

/**
 * Custom button class made to extend more features to the React button class.
 * ## Required
 * @param {string} _routing - The extension that the page rests at in the form of "/" + [extension]"
 * @param {string} _buttonSize - A string that calls to the `button.css` to use a defined size. Only string(s) that work (is/are):
 * - "btn-medium"
 * - "btn-large"
 *
 * ## Optional
 * @param {boolean} [_usePalette = false] - When set to true, the value of "_palette" is used for the button
 * @param {function} [_onClick] - Holder for a function that is called when the button is pressed
 * @param {string} [_buttonStyle = ""] - A string that calls to the `button.css` for a default button style (like an outline button). Only string(s) that work (is/are):
 * - "btn-outline"
 *
 * @param {string} [_buttonColor = ""] - A string that is compared to the preset palettes in `button.tsx` stored in COLORS.Only string(s) that work (is/are):
 * - "blue"
 * - "green"
 * - "black"
 * - "white"
 * - "UF"
 * - "greygreen"
 *
 * @param {[string,string,string,string]} [_palette = ["", "", "", ""]] - array with length = 4 that discribes all buttons. Format each string as "#000000" and the order is [background, details, hover:background, hover:details]
 * @returns {JSX.Element} Custom button that changes color on hover and links to whatever "_routing" says
 */
const Button = ({
  _routing,
  _buttonSize,
  _usePalette = false,
  children = null,
  _onClick,
  _buttonStyle = "",
  _buttonColor = "",
  _palette = ["", "", "", ""],
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
  const _className = `btn ${checkButtonStyle} ${checkButtonSize} `;

  const _styling =
    COLORS.get(_buttonColor)?.[0] || _usePalette
      ? isHovered
        ? {
            border: "2px solid",

            backgroundColor: _usePalette
              ? _palette?.[2]
              : COLORS.get(_buttonColor)?.[2],

            color: _usePalette ? _palette?.[3] : COLORS.get(_buttonColor)?.[3],

            borderColor: _usePalette
              ? _palette?.[3]
              : COLORS.get(_buttonStyle)?.[3],
          }
        : {
            border: "2px solid",

            backgroundColor: _usePalette
              ? _palette?.[0]
              : COLORS.get(_buttonStyle)?.[0],

            color: _usePalette ? _palette?.[1] : COLORS.get(_buttonStyle)?.[1],

            borderColor: _usePalette
              ? _palette?.[1]
              : COLORS.get(_buttonStyle)?.[1],
          }
      : {};

  //console.log(`value ${_buttonColor} gives styling ${_styling}`);
  if (!_usePalette && _buttonStyle == "" && checkButtonStyle == "") {
    var report = `A button does not have any type of styling!! It the following children: ${children}`;
    console.log(report);
  }

  const result = (
    <Link to={_routing} className={"btn"}>
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
