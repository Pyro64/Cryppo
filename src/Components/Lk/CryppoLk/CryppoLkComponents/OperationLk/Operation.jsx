import React from "react";
import style from "./Operation.module.scss";
import OperationItem from "./OperationItem";
import SubtitleLk from "../../../SubtitleLk/SubtitleLk";
import Btn from "../../../../Btn/Btn";

export default function Operation(props) {
  let elementItem = props.operationData.operation.map((e) => (
    <OperationItem
      id={e.id}
      key={e.id}
      type={e.type}
      icon={e.icon}
      title={e.title}
      check={e.check}
      status={e.status}
      cash={e.cash}
    />
  ));
  return (
    <div>
      <SubtitleLk arrow={true} subtitle="Последние операции" />
      <div className={style.container}>
        <div className={style.title}>{props.operationData.title}</div>
        <div className={style.item}>{elementItem}</div>
        <div className={style.btnContainer}>
          <Btn link="#" text="Все операции" />
        </div>
      </div>
    </div>
  );
}
