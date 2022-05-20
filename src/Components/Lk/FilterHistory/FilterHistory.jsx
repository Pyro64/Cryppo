import React from "react";
import MySelect from "../../UI/MySelect/MySelect";
import LkInput from "../../UI/LkInput/LkInput";
import { DatePicker, ConfigProvider } from "antd";
import moment from "moment";
import "moment/locale/ru";
import locale from "antd/lib/locale/ru_RU";
const { RangePicker } = DatePicker;
export default function FilterHistory(props) {
  return (
    <div className="block">
      <MySelect title="Валюта" cashOption={props.cashOption} />
      <LkInput title="Адрес Кошелька" />
      <p>По дате</p>
      <ConfigProvider locale={locale}>
        <RangePicker
          inputReadOnly={true}
          defaultValue={moment("2015-01-01", "YYYY-MM-DD")}
        />
      </ConfigProvider>
    </div>
  );
}
