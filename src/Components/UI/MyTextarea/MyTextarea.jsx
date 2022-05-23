import style from "./MyTextarea.module.scss";
import React from "react";
import { Input } from "antd";
const { TextArea } = Input;

const MyTextarea = ({ title, ...props }) => {
  return (
    <div className={style.container}>
      <p>{title}</p>
      <TextArea showCount maxLength={props.maxLength} />
      <Input />
    </div>
  );
};

export default MyTextarea;
