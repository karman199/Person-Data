import React, { Fragment } from 'react';
import logo from '../assets/img/logo.svg';


const Header = () => {
        return (
                <Fragment>
                    <div id="menu-item">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1>Work Data</h1> 
                    </div>
                </Fragment>               
        );
    }
export default Header;