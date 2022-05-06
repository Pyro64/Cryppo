import React from "react";
import style from "./SearchBar.module.scss";
import search from "../../../../Images/icon/search.svg";
import {Tag, DatePicker, ConfigProvider} from "antd";
import moment from 'moment';
import 'moment/locale/ru';
import locale from 'antd/lib/locale/ru_RU';
import {SubTitle} from "chart.js";

const {RangePicker} = DatePicker;

const Searchbar = (props) => {

    const inputChange = (e) => {
        let value = e.target.value
        props.inputChange(value)
    }

    const inputKeyDown = (e) => {
        if (e.key === "Enter") {
            props.addTag();
        }
    };

    const RemoveTag = (e) => {
        const tag = props.operationsFilter.tags.filter((item) => {
            return item === e;
        });
        props.removeTag(tag[0]);
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
                            inputReadOnly={true} className={style.picker}
                            defaultValue={moment('2015-01-01', 'YYYY-MM-DD')}/>
                    </ConfigProvider>
                    <div className={style.input}>
                        {props.operationsFilter.tags.map((e) => (
                            <Tag
                                id={e.id}
                                key={e.id}
                                className={style.tag}
                                closable
                                onClose={() => {
                                    RemoveTag(e);
                                }}
                            >
                                {e.name}
                            </Tag>
                        ))}
                        <input
                            value={props.operationsFilter.searchQuery}
                            className={style.inputItem}
                            placeholder="Найдите любые события и операции"
                            type="text"
                            onKeyDown={inputKeyDown}
                            onChange={inputChange}
                        />
                    </div>
                </div>
                <img className={style.icon} onClick={props.addTag} src={search} alt="search"/>
            </div>
        </div>
    );
};

export default Searchbar;
