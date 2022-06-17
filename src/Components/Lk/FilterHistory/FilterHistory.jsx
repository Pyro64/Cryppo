import React, { useState } from "react";
import MySelect from "../../UI/MySelect/MySelect";
import { DatePicker, ConfigProvider } from "antd";
import moment from "moment";
import "moment/locale/ru";
import locale from "antd/lib/locale/ru_RU";
import styled from "styled-components";
import style from "./FilterHistory.module.scss";
import { Select } from "antd";
import MySelectTitle from "../../UI/MySelect/MySelectTitle";
import three from "../../../Images/payIcon/3.svg";
import { useEffect } from "react";
const { RangePicker } = DatePicker;
const { Option } = Select;

export default function FilterHistory(props) {
    const [walletAddress, setWalletAddress] = useState("");
    const [dateRange, setDateRange] = useState([]);
    const [currency, setCurrency] = useState("");
    const handlerChange = () => {
        console.log(walletAddress, dateRange, currency);
    };
    const changeSelect = (value) => {
        setCurrency(value);
        console.log(currency);
        handlerChange();
    };
    const enterDataRange = (value, dateString) => {
        setDateRange(dateString);
        handlerChange();
    };
    let option = props.currencyList.map((e) => (
        <Option
            className={style.option}
            value={e.currency}
            label={e.currency}
            key={e.id}
            id={e.id}
        >
            <div className={style.itemOption}>
                <img src={e.img ?? three} alt={e.currency} />
                <div className={style.name}>{e.currency}</div>
            </div>
        </Option>
    ));
    return (
        <div className="block">
            <div className={style.container}>
                <MySelectTitle title="Валюта" />
                <Select
                    dropdownClassName={style.dropdown}
                    className={style.select}
                    defaultValue=""
                    onChange={changeSelect}
                >
                    {option}
                </Select>
            </div>
            <div className={style.item}>
                <div className={style.title}>Адрес Кошелька</div>
                <input
                    className={style.input}
                    value={walletAddress}
                    type="text"
                    onChange={(e) => {
                        setWalletAddress(e.target.value);
                        handlerChange();
                    }}
                />
            </div>

            <p>По дате</p>
            <ConfigProvider locale={locale}>
                <RangePicker
                    inputReadOnly={true}
                    defaultValue={moment("2015-01-01", "YYYY-MM-DD")}
                    onChange={enterDataRange}
                />
            </ConfigProvider>
        </div>
    );
}
