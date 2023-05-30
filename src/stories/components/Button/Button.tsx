import React from "react";
import MaterialButton, { ButtonProps } from "@mui/material/Button";
import "./button.css";

export const Button = (props: ButtonProps) => {
  const {
    children = "Button Label",
    className,
    color = "dovetail-blue",
    disabled = false,
    disableElevation = true,
    endIcon,
    href,
    size = "medium",
    startIcon,
    type = "button",
    variant = "contained",
    ...rest
  } = props;

  return <MaterialButton {...props}>{children}</MaterialButton>;
};
