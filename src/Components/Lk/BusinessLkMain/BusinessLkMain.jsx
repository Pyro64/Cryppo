import React from 'react';
import Subtitle from '../../UI/Subtitle/Subtitle'
import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";
import HistoryBlock from '../History/HistoryBlock';
const BusinessLkMain = (props) => {
    return (
        <div className="main container">
            <Subtitle subtitle="Главная" />
            <div className="flex ">
                <div className="sidebar">
                    <div className="sidebar__inner">
                        <HistoryBlock historyItem={props.historyItem} />
                    </div>
                </div>
                <div className="content">

                </div>
            </div>
        </div>
    );
};

export default BusinessLkMain;