'use client'

import React, { useState } from "react";
import "./styles.scss";
import { CaretDownOutlined, CheckCircleOutlined } from "@ant-design/icons";

interface IQuestion extends React.LiHTMLAttributes<HTMLLIElement> {
  question: string;
  response: string;
}

function Question({ question, response, className, ...rest }: IQuestion) {
  const [isOpen, setIsOpen] = useState(false);
  // const [maxHeight, setMaxHeight] = useState(false);
  // const questionRef = useRef<any>();

  // useLayoutEffect(() => {
  //   const height = questionRef?.current?.offsetHeight;
  //   setMaxHeight(height);

  //   console.log(height)
  // }, [questionRef])

  return (
    <li {...rest} className={`${className} question-container ${isOpen ? 'isOpen' : null}`}
      onClick={() => setIsOpen((currentValur) => !currentValur)}>
      <div className={`question`}>
        <dt>{question}</dt>
        <CaretDownOutlined />
      </div>
      <dd className="response">{response}</dd>
    </li>
  );
}

export default Question;
