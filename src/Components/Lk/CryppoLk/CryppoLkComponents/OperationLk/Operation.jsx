import React from "react";
import style from "./Operation.module.scss";
import OperationItem from "./OperationItem";

export default function Operation(props) {
  debugger;
  let elementItem = props.operationData.operation.map((e) => (
    <OperationItem
      id={e.id}
      key={e.id}
      icon={e.icon}
      title={e.title}
      check={e.check}
      status={e.status}
      cash={e.cash}
    />
  ));
  return (
    <div className={style.container}>
      <div className={style.title}>{props.operationData.title}</div>
      <div className={style.wrapper}>{elementItem}</div>
    </div>
  );
}
