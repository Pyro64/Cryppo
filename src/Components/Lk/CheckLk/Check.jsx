import React, { useState } from "react";
import style from "./Check.module.scss";
import CheckItem from "./CheckItem";
import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";
import CheckCardBlock from "./CheckCardBlock";
import Btn from "./../../UI/Btn/Btn";
import MyModal from "../../UI/MyModal/MyModal";
import CheckModal from "./CheckModal";
import three from "../../../Images/payIcon/3.svg";

export default function Check(props) {
    const [open, setOpen] = useState(false);
    function openModal() {
        setOpen(!open);
    }
    let elementCard = props.balances.map((e) => {
        if (e.active === true) {
            return (
                <CheckItem
                    id={e.id}
                    key={e.currency}
                    icon={e.icon ?? three}
                    currency={e.currency}
                    amount={e.amount}
                    amountInViewCurrency={e.amountInViewCurrency}
                />
            );
        }
    });

    return (
        <div className={style.containers}>
            <div className={style.block}>
                <div className={style.item}>{elementCard}</div>
                {props.isBankCard !== false ? (
                    <CheckCardBlock bankCardList={props.bankCardList} />
                ) : (
                    <Btn onClick={openModal} style={{ margin: "auto" }}>
                        Оставить заявку
                    </Btn>
                )}
            </div>
            <MyModal setOpen={setOpen} open={open}>
                <CheckModal
                    setOpen={setOpen}
                    open={open}
                    currencyList={props.currencyList}
                />
            </MyModal>
        </div>
    );
}
