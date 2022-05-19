import { Input } from 'antd';
import React from 'react';
import style from './LkInput.module.scss'
const LkInput = (props) => {
    return (
        <div className={style.container}>
            <p>{props.title}</p>
            <Input disable={props.disable} type={props.type} value={props.value} />
        </div>
    );
}

export default LkInput;
