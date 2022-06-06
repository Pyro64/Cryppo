import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import GeneralSetting from "../../Lk/GeneralSetting/GeneralSetting";
import Notification from "../../Lk/Notification/Notification";
import Security from "../../Lk/Security/Security";
import style from "../Styles/SettingLk.module.scss";

export default function SettingLk(props) {
  return (
    <div className="main container">
      <Tabs>
        <TabList className={style.list}>
          <Tab className={style.tab} selectedClassName={style.activeTab}>
            <div>Общие настройки</div>
          </Tab>
          <Tab className={style.tab} selectedClassName={style.activeTab}>
            <div>Безопасность</div>
          </Tab>
          <Tab className={style.tab} selectedClassName={style.activeTab}>
            <div>Уведомления</div>
          </Tab>
        </TabList>
        <TabPanel>
          <GeneralSetting
            langOption={props.langOption}
            currencyList={props.currencyList}
            user={props.user}
            setting={props.setting}
          />
        </TabPanel>
        <TabPanel>
          <Security
            deleteAddress={props.deleteAddress}
            connectOption={props.connectOption}
          />
        </TabPanel>
        <TabPanel>
          <Notification settingOption={props.settingOption} />
        </TabPanel>
      </Tabs>
    </div>
  );
}
