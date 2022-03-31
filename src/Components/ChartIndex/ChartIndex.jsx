import React from 'react'
import Subtitle from '../Subtitle/Subtitle'
import style from './ChartIndex.module.scss'
import Text from '../Text/Text'


export default function ChartIndex() {
  return (
    <div className={style.chartContainer}>
      <Subtitle subtitle="Статистика роста индекса" gradient="." />
      <div className={style.number}>867%</div>
      <Text text="Процентный показатель изменения курса индекса за все время" />

    </div>
  )
}
