import React, { useState } from "react";
import { Scrollable } from "./UIProvider";

const UIContext = React.createContext([{}, () => {}]);

const UIContextProvider = (props) => {
    const [state, setState] = useState({
        isBusiness: false,
        isWallet: true,
        isLk: false,
        scrollable: true,
    });
    return (
        <UIContext.Provider value={[state, setState]}>
            <Scrollable scrollable={state.scrollable} />
            {props.children}
        </UIContext.Provider>
    );
};

export { UIContext, UIContextProvider };
