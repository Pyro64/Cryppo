
import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const data = [
    {
        name: "Янв",
        Цена: 100_000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "Фев",
        Цена: 25_000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Мар",
        Цена: 45_000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Апр",
        Цена: 42_000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Май",
        Цена: 30_000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Июн",
        Цена: 80_000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Июл",
        Цена: 50_000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Авг",
        Цена: 25_000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Сен",
        Цена: 55_000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Окт",
        Цена: 100_000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Дек",
        Цена: 120_000,
        pv: 1398,
        amt: 2210
    },
];
const divStyle = {
    color: 'white',
    opacity: '0.7',
    borderTop: '1px solid rgba(255, 255, 255,0.5)',
};
const wrapperStyle = {
    background: 'linear-gradient(91.42deg, #2F69FF 0%, #00C0A9 100%)',
    borderRadius: '5px',
    boxShadow: '0px 0px 20px rgba(47, 105, 255, 0.38)',
    border: 'none',
};
export default function ChartIndex() {

    return (
        <ResponsiveContainer width="100%" height={220}>
            <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2c6efa" stopOpacity={0.7} />
                        <stop offset="100%" stopColor="#02bdad" stopOpacity={0.13} />
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} strokeDasharray="0.5" />
                <XAxis dataKey="name" />
                <YAxis mirror={true} />
                <Tooltip contentStyle={wrapperStyle} itemStyle={divStyle} />
                <Area dot={false} activeDot={{ stroke: 'rgba(64, 255, 232, 0.37)', strokeWidth: 5, r: 5 }} type="linear" dataKey="Цена" stroke="#40FFE8" fill="url(#colorUv)" />
            </AreaChart>
        </ResponsiveContainer>

    );
}
