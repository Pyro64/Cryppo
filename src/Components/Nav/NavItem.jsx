
import { NavLink } from "react-router-dom";
console.log(NavLink)
function NavItem(props) {
    return (
        <NavLink to={props.href} className="nav__link">{props.name}</NavLink>
    );
}

export default NavItem;
