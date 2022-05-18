import React from 'react'
import ExchangeCash from '../../UI/ExchangeCash/ExchangeCash';
import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";
import Check from '../CheckLk/Check';
import DoughnutChart from './../DoughnutChart/DoughnutChart';

export default function Balance(props) {
    return (
        <div className="main container">
            <div className="flex ">
                <div className="sidebar">
                    <div className="sidebar__inner">
                        <SubtitleLk arrow={false} subtitle="Балансы" />
                        <Check isBankCard={false} card={props.card} />
                    </div>
                </div>
                <div className="content">
                    <SubtitleLk subtitle="Дашборд" />
                    <div className='block'>
                        <DoughnutChart updateChart={props.updateChart} addTag={props.addTag} filter={true}
                            isHover={props.isHover} setChartText={props.setChartText} operations={props.expenses} chartTextData={props.chartTextData} initChartText={props.initChartText} />
                    </div>
                    <ExchangeCash />
                </div>
            </div>
        </div>
    )
}
