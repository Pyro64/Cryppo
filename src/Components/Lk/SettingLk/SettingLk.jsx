import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import GeneralSetting from '../GeneralSetting/GeneralSetting';
import style from "./SettingLk.module.scss"

export default function SettingLk(props) {
  return (
    <div className="main container">
    <Tabs>
    <TabList className={style.list}>
    <Tab className={style.tab} selectedClassName={style.activeTab}><div>Общие настройки</div></Tab>
    <Tab className={style.tab} selectedClassName={style.activeTab}><div>Безопасность</div></Tab>
    <Tab className={style.tab} selectedClassName={style.activeTab}><div>Уведомления</div></Tab>
    <Tab className={style.tab} selectedClassName={style.activeTab}><div>Подключить магазин</div></Tab>
    </TabList>
   <TabPanel>
   <GeneralSetting setting={props.setting}/>

   </TabPanel>
   <TabPanel>
   </TabPanel>
   <TabPanel></TabPanel>
   <TabPanel></TabPanel>
    
    </Tabs>
  </div>
  )
}
