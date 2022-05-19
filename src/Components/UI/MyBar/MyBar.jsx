import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from "recharts";
import style from './MyBar.module.scss'
const MyBar = (props) => {
    const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
        return (
            <text x={x + width / 2} y={y} fill="#FFFFFF" textAnchor="middle" dy={-6}>
                {`${value}`}
            </text>
        );

    };
    // const handleClick = (props) => {
    //     fill={props.entry.color}
    //   };
    return (
        <div style={{ height: `${props.height}` }} className={style.transition}>
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
                    // onMouseEnter={handleClick}
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
                            //   onMouseEnter={(index, entry, fill) => {
                            //     console.log(index);
                            //     fill = entry.color;
                            //   }}
                            //      onMouseLeave={index === true}
                            />
                        ))}
                    </Bar>
                    <XAxis tickMargin={20} dataKey="name" tickLine={false} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MyBar;