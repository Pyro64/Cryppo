import React from "react";
import style from "./StatisticMain.module.scss";
import {NavLink, useParams} from "react-router-dom";

const StatisticMainItem = (props) => {
    let value = props;
    const tag = props.category
    const {category, subcategory} = useParams();
    let url = `/lk/event/${props.category}`
    if (category !== undefined) {
        url = `/lk/event/${category}/${props.category}`
    }
    return (
        <NavLink to={url}
                 state={{ name: props.category }}
                 className={style.item}
                 onMouseEnter={() => props.setChartText(value)}
                 onMouseLeave={() => props.initChartText()}
                 onClick={() => props.addTag(tag)}
        >
            <div
                style={{background: `${props.color}`}}
                className={style.circle}
            ></div>
            <div className={style.category}>{props.category}</div>
            <div className={style.cash}>{props.cash}</div>
            <div className={style.currency}>{props.currency}</div>
        </NavLink>
    );
};

export default StatisticMainItem;
