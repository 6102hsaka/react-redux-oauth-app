import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import LoginPage from '../auth/LoginPage';
import LogoutPage from '../auth/LogoutPage';
import './Header.css';


const Header = () => {

    const isSignedIn = useSelector(state => state.auth.isSignedIn);
    const userProfile = useSelector(state => state.auth.userProfile);

    const ProfileComponent = () => {
        
        const [ isDropdownOpen, setDropdownOpen ] = useState(false);
        const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

        return (
            <Dropdown isOpen={isDropdownOpen} toggle={toggleDropdown} >
                <DropdownToggle caret color="danger">
                    {`Hello, ${userProfile.firstname}`}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Profile</DropdownItem>
                    <DropdownItem> <LogoutPage/> </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        )

    }

    return (
        <header className="header">
            <div className="header-title">
                MyApp
            </div>
            <div>
                { !isSignedIn ? <LoginPage /> :  <ProfileComponent />}
            </div>
        </header>
    )
}

export default Header;