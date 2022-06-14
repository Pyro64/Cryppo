import { connect } from "react-redux";
import SettingLk from "./SettingLk";
import {
    SetActiveCurrencyPostTC,
    DeleteDevicePostTC,
} from "../../../Redux/user-reducer";

let mapStateToProps = (state) => {
    return {
        setting: state.lk.business.settingData,
        langOption: state.lk.business.langOption,
        currencyList: state.lk.business.currencyList,
        balances: state.user.business.balances,
        entries: state.user.business.entries,
        terminals: state.user.business.terminals,
        notificationsSettings:
            state.user.business.userInfo.notificationsSettings,
        user: state.user.business,
    };
};

const SettingLkContainer = connect(mapStateToProps, {
    SetActiveCurrencyPostTC,
    DeleteDevicePostTC,
})(SettingLk);

export default SettingLkContainer;
