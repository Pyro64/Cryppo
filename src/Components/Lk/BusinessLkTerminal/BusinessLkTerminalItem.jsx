import React from "react";
import { userSlice } from "../../../Redux/user-reducer";
import style from "./BusinessLkTerminal.module.scss";
import BusinessLkTerminalLogin from "./BusinessLkTerminalModal/BusinessLkTerminalLogin";
import BusinessLkTerminalName from "./BusinessLkTerminalModal/BusinessLkTerminalName";
import BusinessLkTerminalPassword from "./BusinessLkTerminalModal/BusinessLkTerminalPassword";
import { useDispatch } from "react-redux";

export default function BusinessLkTerminalItem(props) {
    const dispatch = useDispatch();
    return (
        <div
            className={
                props.connected
                    ? `${style.card} ${style.connected}`
                    : `${style.card} ${style.notConnected}`
            }
        >
            <div className={style.flex}>
                <div>
                    <div className={style.title}>{props.name}</div>
                    <div className={style.text}>{props.login}</div>
                </div>
                <div>
                    <div className={style.text}>
                        {new Date(props.createDate).toLocaleDateString()}
                    </div>
                    <div className={style.text}>{props.terminalId}</div>
                </div>
            </div>
            <div className={style.flex}>
                <BusinessLkTerminalName
                    id={props.id}
                    TerminalsChangeNamePostTC={props.TerminalsChangeNamePostTC}
                />
                <BusinessLkTerminalLogin
                    id={props.id}
                    TerminalsChangeLoginPostTC={
                        props.TerminalsChangeLoginPostTC
                    }
                />
                <BusinessLkTerminalPassword
                    TerminalsChangePasswordPostTC={
                        props.TerminalsChangePasswordPostTC
                    }
                />
                <div
                    className={style.link}
                    onClick={() => {
                        //props.TerminalsDeletePostTC(props.id);
                        dispatch(userSlice.actions.TerminalDelete(props.id));
                    }}
                >
                    Удалить терминал
                </div>
            </div>
        </div>
    );
}
