import React, { useState } from "react";
import style from "./ExchangeCash.module.scss";
import MySelect from "./../MySelect/MySelect";
import LkInput from "./../LkInput/LkInput";
import ExchangeCashShow from "./ExchanheCashShow";
import styled from "styled-components";
export default function ExchangeOutput(props) {
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
  const [adress, setAdress] = useState("");

  return (
    <div className="block">
      <div className={style.content}>
        <div className={style.itemFull}>
          <div className={style.title}>Вывод</div>
          <MySelect currencyList={props.currencyList} />
        </div>
        <div className={style.itemFull}>
          <div className={style.subtitle}>
            Адрес криптовалютного кошелька получателя
          </div>
          <Input
            type="number"
            placeholder="Введите адрес"
            value1={(e) => e.target.value}
          />
        </div>
        <div className={style.itemFull}>
          <div className={style.subtitle}>Сумма к покупке</div>
          <Input
            type="number"
            placeholder="0.000000"
            value2={(e) => e.target.value}
          />
        </div>
        <div className={style.itemFull}>
          <div className={style.comission}>Комиссия 0.00000 BTC</div>
        </div>
      </div>
      <div className={style.bottom}>
        <div className={style.flex}>
          <div className={style.option}>Сумма к списанию</div>
          <div className={style.text}>12213.090909090909 USD</div>
        </div>
        <ExchangeCashShow
          message="Вывод средств прошел успешно"
          description="Вы вывели X BTC"
          btn="Вывести"
        />
      </div>
    </div>
  );
}
