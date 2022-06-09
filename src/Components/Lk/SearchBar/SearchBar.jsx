import React from "react";
import style from "./SearchBar.module.scss";
import search from "../../../Images/icon/search.svg";
import { Tag, DatePicker, ConfigProvider } from "antd";
import moment from "moment";
import "moment/locale/ru";
import locale from "antd/lib/locale/ru_RU";
import SearchWithTag from "../../UI/SearchWithTag/SearchWithTag";

const { RangePicker } = DatePicker;

const Searchbar = (props) => {
    const enterDataRange = (value, dateString) => {
        props.filterDate(dateString);
    };

    const inputChange = (e) => {
        let value = e.target.value;
        props.inputChange(value);
    };

    const inputKeyDown = (e) => {
        if (e.key === "Enter") {
            props.addTag();
        }
    };

    // let location = useLocation();
    // let title = location.state;
    // console.log(location)
    return (
        <div className={style.container}>
            <div className={style.block}>
                <div className={style.flex}>
                    <ConfigProvider locale={locale}>
                        <RangePicker
                            inputReadOnly={true}
                            defaultValue={moment("2015-01-01", "YYYY-MM-DD")}
                            onChange={enterDataRange}
                        />
                    </ConfigProvider>
                    <div className={style.input}>
                        {/* <
                            value={props.operationsFilter.searchQuery}
                            className={style.inputItem}
                            placeholder="Найдите любые события и операции"
                            type="text"
                            onKeyDown={inputKeyDown}
                            onChange={inputChange}
                        /> */}
                        <SearchWithTag props={props} />
                    </div>
                </div>
                <img
                    className={style.icon}
                    onClick={props.addTag}
                    src={search}
                    alt="search"
                />
            </div>
        </div>
    );
};

export default Searchbar;
