import React from 'react'
import style from './BenefistIndex.module.scss'
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
    <div className={style.item}>
      {elementItem}
    </div>
  )
}
