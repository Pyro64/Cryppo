import React from "react";
import style from "./Operation.module.scss";
import SubtitleLk from "../../../SubtitleLk/SubtitleLk";
import Btn from "../../../../Btn/Btn";
import OperationInner from "./OperationInner";


export default function Operation(props) {



  return (
    <div>
      <SubtitleLk arrow={true} subtitle="Последние операции" />
      <div className={style.container}>
        <div className={style.title}>{props.operationData.title}</div>
        <OperationInner operationData={props.operationData} />
        <div className={style.btnContainer}>
          <Btn link="#" text="Все операции" />
        </div>
      </div>
    </div>
  );
}
