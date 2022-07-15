import React from "react";
import style from "./CryppoLkCheckSelect.module.scss";
import { Dropdown } from "antd";
import CryppoLkCheckActive from "./CryppoLkCheckActive";
export default function CryppoLkCheckSelect(props) {
  return (
    <Dropdown overlay={<></>} trigger={["click"]}>
      <CryppoLkCheckActive {...props[0]} />
    </Dropdown>
  );
}
