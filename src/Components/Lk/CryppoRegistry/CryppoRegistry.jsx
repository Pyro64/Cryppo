import React, { useState } from "react";
import style from "./CryppoRegistry.module.scss";
import { NavLink } from "react-router-dom";
import LkInput from "../../UI/LkInput/LkInput";

const CryppoRegistry = (props) => {
    const [emailName, setEmailName] = useState("");
    const [passwordName, setPasswordName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let email = formData.get("email");
        let password = formData.get("password");
    };

    return (
        <div className="main">
            <div className={style.entance}>
                <div className={style.title}>Регистрация</div>
                <form className={style.modal} onSubmit={handleSubmit}>
                    <div className={style.modalRow}>
                        <LkInput
                            className={style.input}
                            title="Email"
                            type="text"
                            value={emailName}
                            name="email"
                            onChange={(e) => setEmailName(e.target.value)}
                        />
                        <LkInput
                            className={style.input}
                            title="Email"
                            type="text"
                            value={emailName}
                            name="email"
                            onChange={(e) => setEmailName(e.target.value)}
                        />
                    </div>
                    <div className={style.modalRow}>
                        <LkInput
                            className={style.input}
                            title="Email"
                            type="text"
                            value={emailName}
                            name="email"
                            onChange={(e) => setEmailName(e.target.value)}
                        />
                        <LkInput
                            className={style.input}
                            title="Email"
                            type="text"
                            value={emailName}
                            name="email"
                            onChange={(e) => setEmailName(e.target.value)}
                        />
                    </div>
                    <div className={style.modalRow}>
                        <LkInput
                            className={style.input}
                            title="Email"
                            type="text"
                            value={emailName}
                            name="email"
                            onChange={(e) => setEmailName(e.target.value)}
                        />
                        <LkInput
                            className={style.input}
                            title="Email"
                            type="text"
                            value={emailName}
                            name="email"
                            onChange={(e) => setEmailName(e.target.value)}
                        />
                    </div>

                    <button className={style.button} type="submit">
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CryppoRegistry;
