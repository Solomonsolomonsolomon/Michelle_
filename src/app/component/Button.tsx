import React, { ReactNode } from "react";
import styles from "./Button.module.css";
import {} from "react-icons/fa";

type buttonProps = {
  children?: ReactNode;
  version?: "primary" | "secondary" | "outlined";
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  width?: string | number;
  height?: string| number
  onClick?: () => void;
};

function Button({
  children,
  version,
  type,
  isDisabled,
  width,
  height,
  onClick,
}: buttonProps) {
  const buttonClasses = [styles.btn];

  if (version === "primary") {
    buttonClasses.push(styles.btnPrimary);
  } else if (version === "secondary") {
    buttonClasses.push(styles.btnSecondary);
  } else if (version === "outlined") {
    buttonClasses.push(styles.btnOutlined);
  }

  const btnStyle = {
    width: `${width}px`,
    height: `${height}px`
  };
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={buttonClasses.join(" ")}
      style={btnStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisable: false,
};

export default Button;
