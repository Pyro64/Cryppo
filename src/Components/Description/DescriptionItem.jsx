import React from 'react';
import style from './Description.module.scss'
const Descriptionitem = (props) => {
    return (
        <div className={style.item}>
            <div className={style.number}>
                {props.number}
                <span>+</span>
            </div>
            <p>{props.text}</p>
        </div>
    );
}

export default Descriptionitem;
