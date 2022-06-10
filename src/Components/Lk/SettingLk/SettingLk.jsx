import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import GeneralSetting from "../GeneralSetting/GeneralSetting";
import Notification from "../Notification/Notification";
import Security from "../Security/Security";
import style from "./SettingLk.module.scss";

export default function SettingLk(props) {
    return (
        <div className="main container">
            <Tabs>
                <TabList className={style.list}>
                    <Tab
                        className={style.tab}
                        selectedClassName={style.activeTab}
                    >
                        <div>Общие настройки</div>
                    </Tab>
                    <Tab
                        className={style.tab}
                        selectedClassName={style.activeTab}
                    >
                        <div>Безопасность</div>
                    </Tab>
                    <Tab
                        className={style.tab}
                        selectedClassName={style.activeTab}
                    >
                        <div>Уведомления</div>
                    </Tab>
                </TabList>
                <TabPanel>
                    <GeneralSetting
                        langOption={props.langOption}
                        currencyList={props.currencyList}
                        balances={props.balances}
                        user={props.user}
                        setting={props.setting}
                        SetActiveCurrencyPostTC={props.SetActiveCurrencyPostTC}
                    />
                </TabPanel>
                <TabPanel>
                    <Security
                        DeleteDevicePostTC={props.DeleteDevicePostTC}
                        entries={props.entries}
                        terminals={props.terminals}
                    />
                </TabPanel>
                <TabPanel>
                    <Notification
                        notificationsSettings={props.notificationsSettings}
                    />
                </TabPanel>
            </Tabs>
        </div>
    );
}
