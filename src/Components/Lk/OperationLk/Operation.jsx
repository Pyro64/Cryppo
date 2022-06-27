import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Operation.module.scss";
import Btn from "../../UI/Btn/Btn";
import OperationInner from "./OperationInner";
import OperationModal from "./OperationModal";
import MyModal from "../../UI/MyModal/MyModal";
import { Button, Pagination } from "antd";
import OperationItem from "./OperationItem";
import yandex from "../../../Images/icon/yandex.svg";
import three from "../../../Images/payIcon/3.svg";
var Scroll = require("react-scroll");
var Element = Scroll.Element;
var scroller = Scroll.scroller;

export default function Operation(props) {
    const [open, setOpen] = useState(false);
    const changePage = (page) => {
        props.setPageNumber(page);
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
        props.setPageSize(pageSize);
    }

    let sliceItem = props.operationList.map((e) => (
        <OperationItem
            open={open}
            setModal={props.setModal}
            openModal={openModal}
            id={e.id}
            key={e.id}
            type={e.type ?? "Покупка"}
            icon={e.icon ?? yandex}
            date={e.date}
            currency={e.currency}
            title={e.title ?? "Яндекс Такси"}
            check={e.check}
            status={
                e.status ?? {
                    color: "linear-gradient(91.42deg, #2F69FF 0%, #00C0A9 100%)",
                    text: "Операция одобрена",
                }
            }
            amount={e.amount}
            firm={e.firm}
            bankCardData={props.bankCardData}
            address={e.address}
        />
    ));
    let filterItem;
    props.fullOperation
        ? (filterItem = sliceItem.slice(
              (props.pageNumber - 1) * props.pageSize,
              props.pageNumber * props.pageSize
          ))
        : (filterItem = sliceItem.slice(0, 4));

    return (
        <div className={style.container}>
            <div className={style.title}>{props.operationList.title}</div>
            <div className={style.inner}>{filterItem}</div>
            <div className={style.paginationContainer}>
                {props.pagination ? (
                    <Pagination
                        defaultCurrent={1}
                        total={props.operationList.length}
                    />
                ) : (
                    <div className={style.btnContainer}>
                        <NavLink className="btn" to="history">
                            Все операции
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    );
}
