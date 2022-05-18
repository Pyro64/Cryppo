import React from 'react';
import MyBar from '../../UI/MyBar/MyBar';
import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";
import Check from '../CheckLk/Check';
import Operation from '../OperationLk/Operation';
import StatisticCash from '../StatisticCash/StatisticCash';
import DoughnutChart from './../DoughnutChart/DoughnutChart';
import CompositionIndex from './../CompositionIndex/CompositionIndex';
const BusinessLkMain = (props) => {
    return (
        <div className="main container">
            <div className="flex ">
                <div className="sidebar">
                    <div className="sidebar__inner">
                        <SubtitleLk arrow={false} subtitle="Счета" />
                        <Check isBankCard={false} card={props.card} />
                    </div>
                </div>
                <div className="content">
                    <SubtitleLk subtitle="Главная" />
                    <div className='block'>
                        <DoughnutChart updateChart={props.updateChart} addTag={props.addTag} filter={true}
                            isHover={props.isHover} setChartText={props.setChartText} operations={props.expenses} chartTextData={props.chartTextData} initChartText={props.initChartText} />
                    </div>
                    <SubtitleLk arrow={true} subtitle="Статистика валют" />
                    <CompositionIndex
                        composition={props.composition}
                        changeActiveIndex={props.changeActiveIndex}
                    />
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