import React from 'react'
import Subtitle from '../../../Subtitle/Subtitle'
import style from './StatisticIndex.module.scss'
import Text from '../../../Text/Text'
import ChartIndex from '../ChartIndex/ChartIndex'


export default function StatisticIndex() {
  return (
    <div className={style.chartContainer}>
      <Subtitle subtitle="Статистика роста индекса" gradient="." />
      <div className={style.number}>867%</div>
      <Text text="Процентный показатель изменения курса индекса за все время" />
      <ChartIndex />
    </div>
  )
}
