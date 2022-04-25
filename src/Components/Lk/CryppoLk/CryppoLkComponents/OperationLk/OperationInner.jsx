import React from "react";
import style from "./Operation.module.scss";
import OperationItem from "./OperationItem";

export default function OperationInner(props) {
    let elementItem = props.operationData.operation.map((e) => (
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
        />
    ));
    return <div className={style.inner}>{elementItem}</div>;
}
