// Importing Core React Module
import React from 'react';

// Importing Project Directory File
import './Header.component.css';
import { useStateValue } from '../../StateProvider'

// Importing Third Party Modules
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTimeRounded';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'

// Initializing the Header component
function Header() {
    const [{ user }] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <Avatar 
                    className="header__avatar"
                    alt = '{user?.displayName}'
                    src = '{user?.photoURL}'
                />
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                <SearchIcon />
                <input placeholder="Search" type="text"/>
            </div>
            <div className="header__right">
                <HelpOutlineIcon />
            </div>
        </div>
    );
};

// Exporting the Header Component
export default Header;