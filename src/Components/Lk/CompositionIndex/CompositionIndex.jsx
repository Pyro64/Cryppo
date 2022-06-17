import React, { useEffect } from "react";
import style from "./CompositionIndex.module.scss";
import CompositionIndexItem from "./CompositionIndexItem";
import MyBar from "../../UI/MyBar/MyBar";

export default function CompositionIndex(props) {
    useEffect(() => {
        const from = new Date();
        from.setDate(from.getDate() - 5);
        props.RevenuePostTC(from.toISOString(), new Date().toISOString(), null);
    }, []);
    let items = props.revenue.map((e) => (
        <CompositionIndexItem
            changeActiveIndex={props.changeActiveIndex}
            id={e.id}
            key={e.id}
            icon={e.icon}
            name={e.currency}
            value={e.amount}
            color="#F6C"
            percent={e.percent}
        />
    ));
    return (
        <div className="block">
            <div className={style.text}>
                Активы, их текущая рыночная стоимость и процентный показатель
                доли в индексе
            </div>
            <div className={style.wrapperIndex}>{items}</div>
            <MyBar
                compositions={props.barData.compositions}
                height={`300px`}
                changeActiveIndex={props.changeActiveIndex}
            />
        </div>
    );
}
