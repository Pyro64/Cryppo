import React from "react";
import style from "./Operation.module.scss";
import Btn from "../../../../Btn/Btn";
import OperationInner from "./OperationInner";
import OperationModal from "./OperationModal";
import MyModal from "../../../../MyModal/MyModal";

export default function Operation(props) {
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
          <MyModal isModal={props.isModal} switchModal={props.switchModal}>
            <OperationModal operationModal={props.operationModal} />
          </MyModal>
        </div>
      </div>
    </div>
  );
}
