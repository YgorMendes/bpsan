'use client'

import React from "react";
import "./styles.scss";

interface IButton {
  onClick: any;
  children: any;
}

function Button({ onClick, children }: IButton) {
  return <button onClick={() => onClick()} className="button">{children}</button>;
}

export default Button;
