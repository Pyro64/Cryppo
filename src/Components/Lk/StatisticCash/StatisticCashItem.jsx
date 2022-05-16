import React from "react";
import style from "./StatisticCash.module.scss";
import { NavLink, useParams } from "react-router-dom";

const StatisticCashItem = (props) => {
    let child = props.child
    let value = props;
    const tag = props.category;
    const { category, subcategory } = useParams();
    let url = `/cryppolk/event/${props.category}`;
    if (category !== undefined) {
        url = `/cryppolk/event/${category}/${props.category}`;
    }
    const foo = () => {
        if (child !== undefined){
            props.updateChart(child)
        }
    }
    return (
        <NavLink
            to={url}
            state={{ name: props.category }}
            className={style.item}
            onMouseEnter={() => props.setChartText(value)}
            onMouseLeave={() => props.initChartText()}
            onClick={foo}
        >
            <div
                style={{ background: `${props.color}` }}
                className={style.circle}
            ></div>
            <div className={style.category}>{props.category}</div>
            <div className={style.category}>{props.cash}</div>
            <div className={style.category}>{props.currency}</div>
        </NavLink>
    );
};

export default StatisticCashItem;
