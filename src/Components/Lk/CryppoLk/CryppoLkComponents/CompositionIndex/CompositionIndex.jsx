import React from "react";
import style from "./CompositionIndex.module.scss";
import CompositionIndexItem from "./CompositionIndexItem";
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from "recharts";

const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    return (
        <text x={x + width / 2} y={y} fill="#FFFFFF" textAnchor="middle" dy={-6}>
        {`${value}`}
        </text>
    );
};

export default function CompositionIndex(props) {

    let items = props.composition.compositions.map((e) => (
        <CompositionIndexItem
        changeActiveIndex={props.changeActiveIndex}
        id={e.id}
        key={e.id}
        icon={e.icon}
        name={e.name}
        value={e.value}
        color={e.color}
        percent={e.percent}
        />
    ));
    return (
        <div className={style.container}>
        <div className={style.text}>
            Активы, их текущая рыночная стоимость и процентный показатель доли в
            индексе
        </div>
        <div className={style.wrapperIndex}>{items}</div>
        <div style={{ height: "300px" }} className={style.transition}>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={150}
                height={40}
                data={props.composition.compositions}
                margin={{
                top: 30,
                right: 10,
                left: 10,
                bottom: 15,
                }}
            >
                <Bar
                className={style.transition}
                dataKey="value"
                fill="#6D6D6D"
                barSize={65}
                radius={[8, 8, 0, 0]}
                label={renderCustomBarLabel}
                minPointSize={10}
                >
                {props.composition.compositions.map((entry, index) => (
                    <Cell
                    className={style.transition}
                    cursor="pointer"
                    fill={
                        index === props.composition.activeIndex
                        ? entry.color
                        : "#6D6D6D"
                    }
                    key={`cell-${index}`}
                    />
                ))}
                </Bar>
                <XAxis tickMargin={20} dataKey="name" tickLine={false} />
            </BarChart>
            </ResponsiveContainer>
        </div>
        </div>
    );
}
