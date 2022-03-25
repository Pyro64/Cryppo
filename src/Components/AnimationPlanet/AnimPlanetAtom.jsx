import React from 'react'

import style from './AnimPlanet.module.scss'
export default function AnimPlanetAtom(props) {
    return (
        <img className={style.atom} src={props.img} alt="" />
    )
}
