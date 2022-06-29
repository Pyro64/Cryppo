import React, { useContext, useEffect } from "react";
import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";
import Check from "../CheckLk/Check";
import Operation from "../OperationLk/Operation";
import MyBar from "../../UI/MyBar/MyBar";
import DoughnutChart from "../DoughnutChart/DoughnutChart";
import SidebarTabs from "../SidebarTabs/SidebarTabs";
import { UIContext } from "../../Context/UIContext";
const BusinessLkMain = (props) => {
    const expenses = props.expenses.filter((e) => {
        if (e.parentCategory == undefined) return e;
    });
    const [uiContext, setUiContext] = useContext(UIContext);
    useEffect(() => {
        setUiContext({ ...uiContext, isLk: true });
    }, []);
    return (
        <div className="main container">
            <div className="flex ">
                <div className="sidebar">
                    <div className="sidebar__inner">
                        <SubtitleLk arrow={false} subtitle="Счета" />
                        <Check
                            isBankCard={false}
                            cardList={props.cardList}
                            currencyList={props.currencyList}
                        />
                        <SidebarTabs tabs={props.tabs.addTerminal} />
                    </div>
                </div>
                <div className="content">
                    <SubtitleLk subtitle="Главная" />
                    <div className="block">
                        <DoughnutChart
                            operationType="expenses"
                            updateChart={props.updateChart}
                            filter={false}
                            isHover={props.isHover}
                            operations={expenses}
                            doughuntTextData={props.doughuntTextData}
                        />
                    </div>
                    <SubtitleLk arrow={true} subtitle="Статистика валют" />
                    <div className="block">
                        <MyBar
                            allwaysColor={true}
                            revenue={props.revenue}
                            height={`300px`}
                            changeActiveIndex={props.changeActiveIndex}
                        />
                    </div>

                    <SubtitleLk arrow={true} subtitle="Последние операции" />
                    <Operation
                        PaymentsPostTC={props.PaymentsPostTC}
                        paymentList={props.paymentList}
                        operationList={props.operationList}
                        setModal={props.setModal}
                        operationModal={props.operationModal}
                        isModal={props.isModal}
                        switchModal={props.switchModal}
                    />
                </div>
            </div>
        </div>
    );
};

export default BusinessLkMain;
