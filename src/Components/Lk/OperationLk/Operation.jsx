import React from "react";
import style from "./Operation.module.scss";
import Btn from "../../UI/Btn/Btn";
import OperationInner from "./OperationInner";
import OperationModal from "./OperationModal";
import MyModal from "../../UI/MyModal/MyModal";
import MyPagination from "../../UI/MyPagination/MyPagination";

export default function Operation(props) {
  return (
    <div className={style.container}>
      <div className={style.title}>{props.operationData.title}</div>
      <OperationInner
        operationData={props.operationData}
        setModal={props.setModal}
        isModal={props.isModal}
        switchModal={props.switchModal}
      />
      {props.pagination ? (
        <MyPagination />
      ) : (
        <div className={style.btnContainer}>
          <Btn href="#">Все операции</Btn>
        </div>
      )}
      <div>
        <MyModal isModal={props.isModal} switchModal={props.switchModal}>
          <OperationModal
            isModal={props.isModal}
            switchModal={props.switchModal}
            operationModal={props.operationModal}
          />
        </MyModal>
      </div>
    </div>
  );
}
