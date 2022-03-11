import { NavLink } from "react-router-dom";
import style from '../Header/Header.module.scss'

function NavItem(props) {
    return (
        <NavLink to={props.href} className={({ isActive }) => isActive ? `${style.link} ${style.active}` : `${style.link}`}>
            {props.name}
        </NavLink>
    );
}

export default NavItem;
