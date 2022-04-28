import React from "react";
import style from "./CompositionIndex.module.scss";
import CompositionIndexItem from "./CompositionIndexItem";
import {
  BarChart,
  Bar,
  Area,
  Legend,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ulStyle = {
  padding: 0,
  margin: 0,
  textAlign: "center",
};
const liStyle = {
  display: "inline-block",
  marginRight: 10,
};
const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
  return (
      <text x={x + width / 2} y={y} fill="#FFFFFF" textAnchor="middle" dy={-6}>
        {`${value}`}
      </text>
  );
};
const renderCustomAxisTick = ({ x, y, payload }) => {
  return <text fill="#fff">payload.value</text>;
};
const renderLegend = (props) => {
  const { payload } = props;

  return (
    <ul className="recharts-default-legend" style={ulStyle}>
      {payload.map((entry, index) => (
        <li
          className={`recharts-legend-item legend-item-${index}`}
          style={liStyle}
          key={`item-${index}`}
        >
          {entry.value}
        </li>
      ))}
    </ul>
  );
};

export default function CompositionIndex(props) {
  let items = props.composition.map((e) => (
    <CompositionIndexItem
      id={e.id}
      key={e.id}
      icon={e.icon}
      name={e.name}
      value={e.value}
      color={e.color}
      percent={e.percent}
    />
  ));
  let data = [];
  props.composition.map(({ id, name, value, dataKey }, index) => {
    data.push({ name });
    data[index][dataKey] = value;
  });
  let chartItems = props.composition.map((e) => (
    <Bar
      dataKey={e.dataKey}
      fill={e.color}
      label={renderCustomBarLabel}
      minPointSize={10}
    />
  ));
  return (
    <div className={style.container}>
      <div className={style.text}>
        Активы, их текущая рыночная стоимость и процентный показатель доли в
        индексе
      </div>
      <div className={style.wrapperIndex}>{items}</div>
      <div className={style.wrapper}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart width={150} height={40} data={data}>
            {chartItems}
            <Legend content={renderLegend} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
