import React from "react";
import "./styles.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

interface IItem {
  text: string  
}

function Item({ text }: IItem) {
  return <li className="item">
    <CheckCircleOutlined/>
    <span>{text}</span>
  </li>;
}

export default Item;
