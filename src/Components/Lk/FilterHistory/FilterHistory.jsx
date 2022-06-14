import React, { useState } from "react";
import MySelect from "../../UI/MySelect/MySelect";
import LkInput from "../../UI/LkInput/LkInput";
import { DatePicker, ConfigProvider } from "antd";
import moment from "moment";
import "moment/locale/ru";
import locale from "antd/lib/locale/ru_RU";
import styled from "styled-components";
import style from "./FilterHistory.module.scss";
const { RangePicker } = DatePicker;

export default function FilterHistory(props) {
  const enterDataRange = (value, dateString) => {
    props.filterDate(dateString);
  };
  const [walletAddress, setWalletAddress] = useState("");
  const Input = styled.input`
    width: 100%;
    border: 1px solid #424242;
    border-radius: 76px;
    padding-left: 10px;
    padding-bottom: 5px;
    padding-top: 5px;
    color: #fff;
    background: rgba(91, 91, 91, 0.2);
    outline: none;
  `;
  return (
    <div className="block">
      <MySelect
        title="Валюта"
        currencyList={props.currencyList}
        change={props.filterValute}
      />
      <div className={style.item}>
        <div className={style.title}>Адрес Кошелька</div>
        <Input
          type="number"
          onChange={(e) => {
            setWalletAddress();
            props.filterWallet(e.target.value);
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
