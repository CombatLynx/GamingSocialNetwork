import React, {FC} from "react";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";
import TimerForStaying from "./TimerForStaying/TimerForStaying";
// @ts-ignore
import logoHeader from "../../assets/images/emblem_195x195.png"

type PropsType = {
    isAuth: boolean,
    login: string | null,
    userId: null | number,
    logOut: () => void
}

const Header: FC<PropsType> = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes["header-item"]}>
                <TimerForStaying/>
            </div>
            <div className={`${classes["header-item"]} ${classes["header__logo-position"]}`}>
                <img className={classes.logo}
                     src={logoHeader}
                     alt="logo"/>
            </div>
            <div className={classes["login-block"] + ' ' + classes["header-item"]}>
                <div className={classes.login}>{props.isAuth
                    ? <div>
                        <div>{props.login}</div>
                        <div>{props.userId}</div>
                        <div>
                            <button onClick={props.logOut}>Logout</button>
                        </div>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </header>
    );
}

export default Header;