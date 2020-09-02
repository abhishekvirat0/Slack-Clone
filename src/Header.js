import React from 'react'
import './Header.css'
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from './StateProvider';

function Header() {
    const [{user}] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                {/* avatar for loggedin user  */}
                {/* Time Icon */}

                <Avatar
                    className="header__avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                <AccessTimeIcon/>
            </div>

            <div className="header__search">
                {/* searchIcon */}
                {/* input */}

                <SearchIcon/>
                <input placeholder="Search here.."></input>
            </div>

            <div className="header__right">
                {/* help icon  */}

                <HelpOutlineIcon/>
            </div>
        </div>
    )
}

export default Header