import { Input } from "antd";
import React from "react";
import style from "./LkInput.module.scss";
const LkInput = ({ title, ...props }) => {
  return (
    <div className={style.container}>
      <p>{title}</p>
      <Input {...props} />
    </div>
  );
};

export default LkInput;
