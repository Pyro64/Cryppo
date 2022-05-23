import React from 'react'
import style from "./Security.module.scss"
import Btn from "./Btn"
import { NavLink } from 'react-router-dom'
import { Tabs,Tab,TabList} from 'react-tabs'

export default function Security(props) {
  return (
    <div className={style.container}> 
    <div className={style.block}>
    <div className={style.content}>
      <div className={style.contentItem}>
      <div className={style.title}>Двухфакторная авторизация</div>
      <div className={style.text}>Двухфакторная авторизация позволяет значительно повысить защиту вашего счёта. <NavLink to="">Как она работает?</NavLink></div>
      <Btn/>
      </div>
      <div className={style.contentItem}>
      <div className={style.text}>Подключите желаемый тип двухфакторной авторизации</div>
      <Tabs>
      <TabList className={style.list}>
      <Tab className={style.tab} selectedClassName={style.activeTab}><div>Google Auth</div></Tab>
      <Tab className={style.tab} selectedClassName={style.activeTab}><div>Telegram</div></Tab>
      <Tab className={style.tab} selectedClassName={style.activeTab}><div>SMS</div></Tab>
      
      </TabList>
      
      </Tabs>
      <div className={style.info}>
      <div className={style.infoIcon}></div>
      <div className={style.infoText}>Двухфакторная авторизация по СМС не рекомендуется, т.к. доставка кодов зависит от работы мобильных сетей.</div>

      </div>
      </div>
    </div>
    <div className={style.content}>
    <div className={style.title}>Платежный пароль</div>
      <div className={style.text}>Запрашивать пароль при каждом переводе / платеже</div>
      <Btn/>
      
    </div>


    </div>
    <div className={style.block}>
    <div className={style.content}></div>
    
    </div>
    </div>
  )
}
