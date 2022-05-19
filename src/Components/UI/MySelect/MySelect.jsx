import React from 'react'
import { Select } from 'antd';
import style from './MySelect.module.scss'
import MySelectTitle from './MySelectTitle';

const { Option } = Select;
export default function MySelect(props) {
    let option = props.cashOption.map(e =>
        <Option className={`${style.option}`} value={`${e.id}`} key={e.id} id={e.id}>
            <div className={style.item}>
                <img src={e.img} alt={e.value} />
                <div className={style.name}>{e.value}</div>
            </div>
        </Option>
    )
    function handleChange(value) {
        // console.log(`selected ${value}`);
    }
    return (
        <div className={style.container}>
            <MySelectTitle title={props.title} />
            <Select dropdownClassName={style.dropdown} className={`${style.select}`} defaultValue="" onChange={handleChange}>
                {option}
            </Select>
        </div>
    )
}
