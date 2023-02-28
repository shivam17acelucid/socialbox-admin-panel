import React, { useState } from "react";
import './sidebar.scss';
import { Link } from 'react-router-dom';
import { SidebarData } from "./sidebardata";
import * as FaIcons from 'react-icons/fa';
import { IconContext } from "react-icons/lib";
import { AiFillCaretDown } from 'react-icons/ai';
import { AiFillCaretRight } from 'react-icons/ai';
import logo from '../../Assets/Images/inflyu.png';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className={sidebar ? 'nav-menu' : 'nav-menu-active'}>
                <nav className="navbar">
                    <img src={logo} className='logo' />
                    <ul className="nav-menu-items">
                        {
                            SidebarData.map((item, index) => {
                                return (
                                    <li className={item.cName}>
                                        {
                                            sidebar === true ?
                                                <Link to={item.path}>
                                                    {item.icon}
                                                </Link>
                                                :
                                                <Link to={item.path}>
                                                    {item.icon}
                                                    <span
                                                    >{item.title}</span>
                                                </Link>
                                        }

                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>
            </div >
        </IconContext.Provider >
    )
}
export default Navbar;