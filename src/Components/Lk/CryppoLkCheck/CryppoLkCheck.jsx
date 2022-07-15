import React from "react";
import CryppoLkCheckAction from "./CryppoLkCheckAction/CryppoLkCheckAction";
import CryppoLkCheckSelect from "./CryppoLkCheckSelect/CryppoLkCheckSelect";
import CryppoLkCheckSlider from "./CryppoLkCheckSlider/CryppoLkCheckSlider";
import CryppoLkCheckEvent from "./CryypoLkCheckEvent/CryppoLkCheckEvent";
export default function CryppoLkCheck(props) {
  return (
    <>
      <CryppoLkCheckSelect {...props.cardList} />
      <CryppoLkCheckSlider {...props.cardList[0]} />
      <CryppoLkCheckAction />
      <CryppoLkCheckEvent
        expenses={props.expenses}
        arrival={props.arrival}
        filter={false}
      />
    </>
  );
}
