import React from "react";
import style from "./CryppoLk.module.scss";
import Subtitle from "../../Subtitle/Subtitle";
import Check from "./CryppoLkComponents/CheckLk/Check";
import Invest from "./CryppoLkComponents/InvestLk/Invest";
import AddCard from "./CryppoLkComponents/AddCard/AddCard";
import Operation from "./CryppoLkComponents/OperationLk/Operation";
import Statistic from "./CryppoLkComponents/StatisticLk/Statistic";

export default function CryppoLk(props) {
  return (
    <div className={style.container}>
      <div className={style.wrapperMin}>
        <div className={style.item}>
          <Check card={props.card} bankCard={props.bankCard} />
        </div>
        <div className={style.item}>
          <Invest invest={props.invest} />
        </div>
        <div className={style.item}>
          <AddCard newCard={props.newCard} />
        </div>
      </div>
      <div className={style.wrapperMax}>
        <div className={style.item}>
          <Operation operationData={props.operationData} />
        </div>
        <Statistic className={style.item} statistic={props.statistic} />
      </div>
    </div>
  );
}
