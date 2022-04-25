import React from "react";
import style from "./Operation.module.scss";
import SubtitleLk from "../../../SubtitleLk/SubtitleLk";
import Btn from "../../../../Btn/Btn";
import OperationInner from "./OperationInner";


export default function Operation(props) {
  // operationModal={props.operationModal}
  return (
    <div>
      <SubtitleLk arrow={true} subtitle="Последние операции" />
      <div className={style.container}>
        <div className={style.title}>{props.operationData.title}</div>
        <OperationInner operationData={props.operationData} setModal={props.setModal} />
        <div className={style.btnContainer}>
          <Btn link="#" text="Все операции" />
        </div>
        <div>
          {props.operationModal.title}
        </div>
      </div>
    </div>
  );
}
