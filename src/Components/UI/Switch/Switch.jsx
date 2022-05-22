import React, { useState } from "react";
import style from "./Switch.module.scss";
export default function Switch() {
  const [toggle, setToggle] = useState(false);
  function switchTheme() {
    setToggle(!toggle);
  }
  return (
    <div
      onClick={switchTheme}
      className={toggle ? `${style.switch}` : ` ${style.dark} ${style.switch} `}
    >
      <div className={style.colorMode}></div>
    </div>
  );
}
