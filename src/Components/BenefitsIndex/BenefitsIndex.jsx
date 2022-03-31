import React from 'react'
import Subtitle from '../Subtitle/Subtitle'
import style from './BenefitsIndex.module.scss'
import BenefitsIndexItem from './BenefitsIndexItem'
export default function BenefitsIndex(props) {

  let elementItem = props.benefits.map(e =>
    <BenefitsIndexItem
      id={e.id}
      key={e.id}
      icon={e.icon}
      text={e.text}
    />
  )
  return (
    <div id="benefitsIndex" className={style.container}>
      <Subtitle modify={{ textAlign: "center" }} subtitle="Преимущества и гарантии" gradient="." />
      <div className={style.block}>
        {elementItem}
      </div>
    </div>
  )
}
