import React from "react";
import style from "./ExchangeCash.module.scss";
import MySelect from "./../MySelect/MySelect";
import LkInput from "./../LkInput/LkInput";
import ExchangeCashShow from "./ExchanheCashShow";
import styled from "styled-components";
export default function ExchangeCash(props) {
    const Input = styled.input`
        width: 100%;
        border: 1px solid #424242;
        border-radius: 76px;
        padding-left: 10px;
        padding-bottom: 10px;
        padding-top: 10px;
        color: #fff;
        background: rgba(91, 91, 91, 0.2);
        outline: none;
    `;
    return (
        <div className="block">
            <div className={style.content}>
                <div className={style.itemContent}>
                    <div className={style.item}>
                        <div className={style.title}>Продажа</div>
                        <MySelect currencyList={props.currencyList} />
                    </div>
                    <div className={style.item}>
                        <div className={style.title}>Купить</div>
                        <MySelect currencyList={props.currencyList} />
                    </div>
                </div>
                <div className={style.itemContent}>
                    <div className={style.item}>
                        <div className={style.subtitle}>Сумма на продажу</div>
                        <Input type="number" placeholder="0.000000" />
                    </div>
                    <div className={style.item}>
                        <div className={style.subtitle}>Сумма к покупке</div>
                        <Input type="number" placeholder="0.000000" />
                    </div>
                </div>
            </div>
            <div className={style.bottom}>
                <p className={style.text}>1 ETH = 12213.090909090909 USDа</p>
                <ExchangeCashShow
                    message="Обмен прошел успешно"
                    description="Вы обменяли X BTN на X ETC"
                    btn="Продолжить"
                />
            </div>
        </div>
    );
}
