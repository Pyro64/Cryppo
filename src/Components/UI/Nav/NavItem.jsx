import { NavLink } from "react-router-dom";
import style from "../Header/Header.module.scss";
import { userSlice } from "../../../Redux/user-reducer";
import { useDispatch } from "react-redux";

function NavItem(props) {
    const { SetLk } = userSlice.actions;
    const dispatch = useDispatch();
    if (props.linkToLk) {
        return (
            <NavLink
                onClick={() => dispatch(SetLk(false))}
                state={{ name: props.href }}
                to={props.href}
                className={({ isActive }) =>
                    isActive ? `${style.link} ${style.active}` : `${style.link}`
                }
                end
            >
                {props.name}
            </NavLink>
        );
    } else {
        return (
            <NavLink
                state={{ name: props.href }}
                to={props.href}
                className={({ isActive }) =>
                    isActive ? `${style.link} ${style.active}` : `${style.link}`
                }
                end
            >
                {props.name}
            </NavLink>
        );
    }
}

export default NavItem;
