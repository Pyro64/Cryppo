import React from 'react'
import style from './Suggestions.module.scss'

export default function Suggestions(props) {
  return (
    <div className='container'>
        <div className={style.container}>
            <div className={style.content}>
            <div className={style.title}>ПРЕДЛОЖЕНИЕ ДЛЯ ПРОФЕССИОНАЛЬНЫХ ИНВЕСТОРОВ</div>
            <div className={style.text}>Разместите до 10% инвестиционного капитала, чтобы получить от 3 до 15% в месяц в долларовом эквиваленте*, без навыков профессионального трейдинга и/или передачи средств в доверительное управление.</div>
            <div className={style.block}>
                <div className={style.item}>
                    <div className={style.itemNumber}>390</div>
                    <div className={style.itemText}>ДНЕЙ ТЕСТОВОЙ РАБОТЫ</div>
                </div>
                <div className={style.item}>
                    <div className={style.itemNumber}>1574</div>
                    <div className={style.itemText}>ИНВЕСТИЦИОННЫЕ ОПЕРАЦИИ</div>
                </div>
                <div className={style.item}>
                    <div className={style.itemNumber}>38%</div>
                    <div className={style.itemText}>ПРИБЫЛИ USDT</div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
