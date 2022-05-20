import React, { useState } from "react";
import style from "./Operation.module.scss";
import Btn from "../../UI/Btn/Btn";
import OperationInner from "./OperationInner";
import OperationModal from "./OperationModal";
import MyModal from "../../UI/MyModal/MyModal";
import MyPagination from "../../UI/MyPagination/MyPagination";
import { Pagination } from "antd";

export default function Operation(props) {
  const [totalPages, setTotalPages] = useState(
    props.operationData.operation.length
  );
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(4);
  const changePage = (page) => {
    setPage(page);
  };
  function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }
  return (
    <div className={style.container}>
      <div className={style.title}>{props.operationData.title}</div>
      <OperationInner
        limit={limit}
        operationData={props.operationData}
        setModal={props.setModal}
        isModal={props.isModal}
        switchModal={props.switchModal}
      />
      {props.pagination ? (
        // <MyPagination
        //   page={page}
        //   changePage={changePage}
        //   totalPages={totalPages}
        // />
        <Pagination
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
