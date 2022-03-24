import React from 'react';
import style from './ScrollBtn.module.scss'
const Scrollbtn = (props) => {
    return (
        <div className={style.link}>{props.name}</div>
    );
}

export default Scrollbtn;
