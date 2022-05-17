import React from 'react';
import MyBar from '../../UI/MyBar/MyBar';
import Subtitle from '../../UI/Subtitle/Subtitle'
import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";
import Check from '../CheckLk/Check';
import HistoryBlock from '../History/HistoryBlock';
import Operation from '../OperationLk/Operation';
const BusinessLkMain = (props) => {
    return (
        <div className="main container">
            <Subtitle subtitle="Главная" />
            <div className="flex ">
                <div className="sidebar">
                    <div className="sidebar__inner">
                        {/* <HistoryBlock historyItem={props.historyItem} /> */}
                        <Check isBankCard={false} card={props.card} />
                    </div>
                </div>
                <div className="content">
                    <SubtitleLk arrow={true} subtitle="Статистика валют" />
                    <MyBar composition={props.composition} height={'200px'} />
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