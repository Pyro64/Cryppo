import React from 'react';
import MyBar from '../../UI/MyBar/MyBar';
import Subtitle from '../../UI/Subtitle/Subtitle'
import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";
import Check from '../CheckLk/Check';
import HistoryBlock from '../History/HistoryBlock';
import Operation from '../OperationLk/Operation';
import StatisticCash from '../StatisticCash/StatisticCash';
const BusinessLkMain = (props) => {
    return (
        <div className="main container">

            <div className="flex ">
                <div className="sidebar">
                    <div className="sidebar__inner">
                        <Check isBankCard={false} card={props.card} />
                    </div>
                </div>
                <div className="content">
                    <SubtitleLk subtitle="Главная" />
                    <StatisticCash filter={false} isHover={props.isHover} setChartText={props.setChartText} expenses={props.expenses} arrival={props.arrival} chartTextData={props.chartTextData} initChartText={props.initChartText} operationData={props.operationData} setModal={props.setModal} operationModal={props.operationModal} isModal={props.isModal} switchModal={props.switchModal} updateChart={props.updateChart} />
                    <SubtitleLk arrow={true} subtitle="Статистика валют" />
                    <div className="block">
                        <MyBar composition={props.composition} height={'300px'} />
                    </div>
                    <SubtitleLk arrow={true} subtitle="Последние операции" />
                    <Operation
                        operationData={props.operationData}
                        setModal={props.setModal}
                        operationModal={props.operationModal}
                        isModal={props.isModal}
                        switchModal={props.switchModal} />
                </div>
            </div>
        </div>
    );
};

export default BusinessLkMain;