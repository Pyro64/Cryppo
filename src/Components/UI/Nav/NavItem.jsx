import { NavLink } from "react-router-dom";
import style from '../Header/Header.module.scss'

function NavItem(props) {
    let isLk = false
    if (props.hasLk) {
        return (
            <NavLink  onClick={() =>  props.hasLk(isLk)} state={{ name: props.href }} to={props.href} className={({ isActive }) => isActive ? `${style.link} ${style.active}` : `${style.link}`} end>
                {props.name}
            </NavLink>
        )
    }
    else {
        return (
            <NavLink  state={{ name: props.href }} to={props.href} className={({ isActive }) => isActive ? `${style.link} ${style.active}` : `${style.link}`} end>
                {props.name}
            </NavLink>
        );
    }

}

export default NavItem;
