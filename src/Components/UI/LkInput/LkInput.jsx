import { Input } from 'antd';
import React from 'react';
import style from './LkInput.module.scss'
const LkInput = (props) => {
    return (
        <div className={style.block}>
            <p>{props.title}</p>
            <Input type={props.type} />
        </div>
    );
}

export default LkInput;
