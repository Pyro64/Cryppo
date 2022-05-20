import React, { useState } from "react";
import style from "./Operation.module.scss";
import Btn from "../../UI/Btn/Btn";
import OperationInner from "./OperationInner";
import OperationModal from "./OperationModal";
import MyModal from "../../UI/MyModal/MyModal";
import MyPagination from "../../UI/MyPagination/MyPagination";
import { Pagination } from "antd";
import OperationItem from "./OperationItem";

export default function Operation(props) {
  const [totalPages, setTotalPages] = useState(
    props.operationData.operation.length
  );
  const test = {
    data: [],
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0,
  };
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState(test);
  const [pageSize, setPageSize] = useState(4);
  const handleChange = (page) => {
    setPosts({
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize,
    });
  };
  function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }
  let sliceItem = props.operationData.operation
    .map((e) => (
      <OperationItem
        isModal={props.isModal}
        setModal={props.setModal}
        switchModal={props.switchModal}
        id={e.id}
        key={e.id}
        type={e.type}
        icon={e.icon}
        data={e.data}
        iconPay={e.iconPay}
        currencyPay={e.currencyPay}
        title={e.title}
        check={e.check}
        status={e.status}
        cash={e.cash}
        firm={e.firm}
        bankCardData={e.bankCardData}
      />
    ))
    .slice(page * pageSize, (page - 1) * pageSize);
  console.log(sliceItem);
  return (
    <div className={style.container}>
      <div className={style.title}>{props.operationData.title}</div>
      <div className={style.inner}>{sliceItem}</div>
      {props.pagination ? (
        <Pagination
          onChange={handleChange}
          responsive={true}
          showSizeChanger
          onShowSizeChange={onShowSizeChange}
          defaultCurrent={1}
          total={totalPages}
        />
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
