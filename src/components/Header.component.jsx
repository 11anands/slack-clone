import React from 'react';
import './css/Header.component.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTimeRounded';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <Avatar 
                    className="header__avatar"
                    alt = 'No Image'
                    src = ''
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

export default Header;