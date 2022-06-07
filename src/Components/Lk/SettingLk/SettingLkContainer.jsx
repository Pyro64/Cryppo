import { connect } from "react-redux";
import SettingLk from "./SettingLk";
import { setModal, switchModal, deleteAddress } from "../../../Redux/Lk-reducer";

let mapStateToProps = (state) => {
    return {
        setting: state.lk.business.settingData,
        langOption: state.lk.business.langOption,
        currencyList: state.lk.business.currencyList,
        user: state.user.business,
        settingOption: state.lk.business.settingOption,
        connectOption: state.lk.business.connectOption,
        settingOption: state.lk.business.settingOption,
    };
};

const SettingLkContainer = connect(mapStateToProps, {

    deleteAddress

})(SettingLk);

export default SettingLkContainer;
