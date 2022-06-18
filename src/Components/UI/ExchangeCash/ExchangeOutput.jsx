import React, { useState } from "react";
import style from "./ExchangeCash.module.scss";
import MySelect from "./../MySelect/MySelect";
import ExchangeCashShow from "./ExchanheCashShow";
import { useEffect } from "react";
import * as WithdrawApi from "../../../Api/WithdrawApi";
export default function ExchangeOutput(props) {
    useEffect(() => {}, []);
    const [walletAddress, setWalletAddress] = useState(null);
    const [currency, setCurrency] = useState(null);
    const [amount, setAmount] = useState(null);

    const Withdraw = () => {
        const id = WithdrawApi.WithdrawPost(
            currency,
            walletAddress,
            null,
            amount
        );
        WithdrawApi.GenerateWithdrawCodeGet(id);
    };
    return (
        <div className="block">
            <div className={style.content}>
                <div className={style.itemFull}>
                    <div className={style.title}>Вывод</div>
                    <MySelect
                        currencyList={props.currencyList}
                        change={setCurrency}
                    />
                </div>
                <div className={style.itemFull}>
                    <div className={style.subtitle}>
                        Адрес криптовалютного кошелька получателя
                    </div>
                    <input
                        className={style.input}
                        type="text"
                        placeholder="Введите адрес"
                        value={walletAddress}
                        onChange={(e) => setWalletAddress(e.target.value)}
                    />
                </div>
                <div className={style.itemFull}>
                    <div className={style.subtitle}>Сумма к покупке</div>
                    <input
                        className={style.input}
                        type="number"
                        placeholder="0.000000"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
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
                    description={`Вы вывели ${amount} BTC`}
                    btn="Вывести"
                    Withdraw={Withdraw}
                />
            </div>
        </div>
    );
}
