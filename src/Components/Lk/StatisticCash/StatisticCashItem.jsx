import React from "react";
import style from "./StatisticCash.module.scss";
import { NavLink, useParams } from "react-router-dom";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
const StatisticCashItem = (props) => {
  let child = props.child;
  let value = props;
  const tag = props.category;
  const { category, subcategory } = useParams();
  let url = `/cryppo/lk/event/${props.category}`;
  if (category !== undefined) {
    url = `/cryppo/lk/event/${category}/${props.category}`;
  }
  const foo = () => {
    if (child !== undefined) {
      props.updateChart(child);
    }
  };
  return (
    <div
      className={
        props.disable
          ? ` ${style.disable} ${style.wrapper}`
          : ` ${style.wrapper} `
      }
    >
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
      <div className={style.cross}>
        {props.disable ? (
          <CheckOutlined
            onClick={() => {
              props.disableItem(props);
            }}
          />
        ) : (
          <CloseOutlined
            twoToneColor="#eb2f96"
            onClick={() => {
              props.disableItem(props);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default StatisticCashItem;
