import React from "react";
import { Routes, Route } from "react-router";
import SettingLkMain from "./SettingLkMain";
import GeneralSetting from "../GeneralSetting/GeneralSetting";
import Security from "../Security/Security";
import Notification from "../Notification/Notification";

export default function SettingLk(props) {
  return (
    <Routes>
      <Route path="/" element={<SettingLkMain />} />
      <Route
        path="general"
        element={
          <GeneralSetting
            langOption={props.langOption}
            currencyList={props.currencyList}
            user={props.user}
            setting={props.setting}
          />
        }
      />
      <Route
        path="safety"
        element={
          <Security
            deleteAddress={props.deleteAddress}
            connectOption={props.connectOption}
          />
        }
      />
      <Route
        path="notification"
        element={<Notification settingOption={props.settingOption} />}
      />
    </Routes>
  );
}
