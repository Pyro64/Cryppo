import React from 'react'
import SubtitleLk from '../../UI/SubtitleLk/SubtitleLk'
import style from './History.module.scss'
export default function HistoryBlock() {
  return (
    <div className={style.container}>
      <SubtitleLk subtitle="История операций" />
    </div>
  )
}
