import React, { useState } from "react";
import MySelect from "../../UI/MySelect/MySelect";
import LkInput from "../../UI/LkInput/LkInput";
import { DatePicker, ConfigProvider } from "antd";
import moment from "moment";
import "moment/locale/ru";
import locale from "antd/lib/locale/ru_RU";
const { RangePicker } = DatePicker;



export default function FilterHistory(props) {
    const enterDataRange = (value, dateString) => {
        props.filterDate(dateString)
    };
    const [walletAddress, setWalletAddress] = useState("");
    return (
        <div className="block">
            <MySelect
                title="Валюта"
                cashOption={props.cashOption}
                change={props.filterValute}
            />
            <LkInput
                title="Адрес Кошелька"
                onChange={(e) => {
                    setWalletAddress();
                    props.filterWallet(e.target.value);
                }}
            />
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
