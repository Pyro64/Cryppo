import React from 'react';
import style from './Description.module.scss'
const Descriptionitem = (props) => {
    return (
        <div className={style.item}>
            <div className={style.wrapper}>
                <div className={style.number}>
                    {props.number}
                    <span>+</span>
                </div>
                <p>{props.text}</p>
            </div>

            <img src={props.img} alt="icon" />
        </div>
    );
}

export default Descriptionitem;
