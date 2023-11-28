import React from "react";
import "./styles.scss";

interface ITitle {
  size?: 'lg' | 'md' | 'sm';
  children: any;
}

function Title({ size = 'lg', children }: ITitle) {
  return <h1 className={`title , ${size}`}>{children}</h1>;
}

export default Title;
