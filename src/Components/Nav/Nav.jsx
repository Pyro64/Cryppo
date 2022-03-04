import React from 'react'
import NavItem from '../NavItem/NavItem'
import style from './Nav.module.scss'
function Nav() {
    return (<nav className={style.nav}>
        <NavItem href='/' name='CRYPPO' />
        <NavItem href='/business' name='CRYPPO Business' />
        <NavItem href='/index' name='CRYPPO index' />
    </nav>);
}

export default Nav;

