import React, {useState} from 'react';
import MenuButton from './MenuButton';

const Menu = ({menuItems}) => {
    const [menuActive, setMenuActive] = useState();
    
    return (
        <div className="menu">
            <MenuButton menuActive={menuActive} handleClick={() => setMenuActive(!menuActive)}/>
            <div className={(menuActive?"active ":"") + "menu-items-container"}>
                <ul>
                    {menuItems.map(i => <li><a href={i.href}>{i.text}</a></li>)}
                </ul>
            </div>
        </div>

    );
}

export default Menu;