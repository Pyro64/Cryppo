import React from 'react'
import style from "./Operation.module.scss";
import OperationItem from './OperationItem';



export default function OperationInner(props) {
    let elementItem = props.operationData.operation.map((e) => (

        <OperationItem
            setModal={props.setModal}
            id={e.id}
            key={e.id}
            type={e.type}
            icon={e.icon}
            title={e.title}
            check={e.check}
            status={e.status}
            cash={e.cash}
        />
    ));
    return (
        <div className={style.inner}>
            {elementItem}

        </div>
    )
}
