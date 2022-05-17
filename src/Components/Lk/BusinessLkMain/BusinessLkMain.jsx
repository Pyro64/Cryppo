import React from 'react';
import Subtitle from '../../UI/Subtitle/Subtitle'
import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";
const BusinessLkMain = (props) => {
    return (
        <div className="main">
            <div className="flex container">
                <Subtitle subtitle="Главная" />
                <div className="sidebar">
                    <div className="sidebar__inner">
                        <SubtitleLk subtitle="История операций" />
                    </div>
                </div>
                <div className="content">

                </div>
            </div>
        </div>
    );
};

export default BusinessLkMain;