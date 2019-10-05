import React from 'react';
import './menu.css';

const MenuButton = ({menuActive, handleClick}) => {
    
    return (
        <>
            <div className={(menuActive?"active ":"") +"menu-button-container"} onClick={handleClick}>
                <div className="menu-bar bar1"></div>
                <div className="menu-bar bar2"></div>
                <div className="menu-bar bar3"></div>
            </div>
        </>
    );
}

export default MenuButton;