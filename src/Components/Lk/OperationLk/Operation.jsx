import React, { useState } from "react";
import style from "./Operation.module.scss";
import Btn from "../../UI/Btn/Btn";
import OperationInner from "./OperationInner";
import OperationModal from "./OperationModal";
import MyModal from "../../UI/MyModal/MyModal";
import MyPagination from "../../UI/MyPagination/MyPagination";
import { Pagination } from "antd";
import OperationItem from "./OperationItem";
import { NavLink } from "react-router-dom";
var Scroll = require("react-scroll");
var Element = Scroll.Element;
var scroller = Scroll.scroller;

export default function Operation(props) {
  const [totalPages, setTotalPages] = useState(
    props.operationData.operation.length
  );
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [pageSize, setPageSize] = useState(8);
  const changePage = (page) => {
    setPage(page);

    scroller.scrollTo("myScrollToElement", {
      duration: 1500,
      isDynamic: true,
      smooth: true,
      containerId: "ContainerElementID",
      offset: -150,
    });
  };
  function openModal() {
    setOpen(!open);
  }
  function onShowSizeChange(page, pageSize) {
    setPageSize(pageSize);
  }

  let sliceItem = props.operationData.operation.map((e) => (
    <OperationItem
      open={open}
      setModal={props.setModal}
      openModal={openModal}
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
  ));
  let filterItem;
  props.fullOperation
    ? (filterItem = sliceItem.slice((page - 1) * pageSize, page * pageSize))
    : (filterItem = sliceItem.slice(0, 4));

  return (
    <div className={style.container}>
      <div className={style.title}>{props.operationData.title}</div>
      <div className={style.inner}>{filterItem}</div>
      {props.pagination ? (
        <Pagination
          showTitle={false}
          pageSizeOptions={[8, 20]}
          defaultPageSize={8}
          className={style.pagination}
          onChange={changePage}
          responsive={true}
          showSizeChanger
          onShowSizeChange={onShowSizeChange}
          defaultCurrent={1}
          total={props.operationData.operation.length}
        />
      ) : (
        <div className={style.btnContainer}>
          <NavLink className="btn" to="/business/lk/history">
            Все операции
          </NavLink>
        </div>
      )}
      <div>
        <MyModal setOpen={setOpen} open={open}>
          <OperationModal
            open={open}
            openModal={openModal}
            operationModal={props.operationModal}
          />
        </MyModal>
      </div>
    </div>
  );
}
