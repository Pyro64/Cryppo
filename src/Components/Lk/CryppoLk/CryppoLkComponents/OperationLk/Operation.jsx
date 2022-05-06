import React from "react";
import style from "./Operation.module.scss";
import SubtitleLk from "../../../SubtitleLk/SubtitleLk";
import Btn from "../../../../Btn/Btn";
import OperationInner from "./OperationInner";
import OperationModal from "../../../Modal/OperationModal";

export default function Operation(props) {
  // operationModal={props.operationModal}
  return (
    <div>
      <div className={style.container}>
        <div className={style.title}>{props.operationData.title}</div>
        <OperationInner
          operationData={props.operationData}
          setModal={props.setModal}
          isModal={props.isModal}
          switchModal={props.switchModal}
        />
        <div className={style.btnContainer}>
          <Btn link="#" text="Все операции" />
        </div>
        <div>
          <OperationModal operationModal={props.operationModal} isModal={props.isModal} switchModal={props.switchModal} />
        </div>
      </div>
    </div>
  );
}
