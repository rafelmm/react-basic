import React from 'react';
import {Link} from 'react-scroll';
import MenuButton from './MenuButton';

const Menu = ({menuItems, menuActive, onMenuClick}) => {
    return (
        <div className="menu">
            <MenuButton menuActive={menuActive} handleClick={onMenuClick}/>
            <div className={(menuActive?"active ":"") + "menu-items-container"}>
                <ul>
                    {menuItems.map(i => 
                        <li key={i.id.toString()}>
                            <Link 
                                activeClass="active"
                                to={i.id} 
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                duration={500} 
                            >
                                {i.menuTitle}
                            </Link>
                        </li>)}
                </ul>
            </div>
        </div>

    );
}

export default Menu;