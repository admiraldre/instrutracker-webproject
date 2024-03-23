import React, { Children, useState } from 'react';
import './Sidebar.css';
import { SidebarData } from './SidebarData';
import * as FaIcons from 'react-icons/fa6';
import * as IoIcons from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons';

const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <IconContext.Provider value={{ color: '' }}>
            <div className='container'>
                <div style={{width: isOpen ? "300px": "50px"}} className='sidebar'>
                    <div className='top-section'>
                        {/* <div className='logo'><h1 style={{display: isOpen ? "block": "none"}}>InstruTracker</h1></div> */}
                        <div style={{marginLeft: isOpen ? "50px": "0px"}} className='bars'>
                            <FaIcons.FaBars onClick={toggle} />
                        </div>
                    </div>
                    {
                        SidebarData.map((item,index)=>(
                            <NavLink to={item.path} key={item.index} className='link' activeclassName='active'>
                                <div className='icon'>{item.icon}</div>
                                <div style={{display: isOpen ? "block": "none"}} className='link_text'>{item.title}</div>
                            </NavLink>
                        ))
                    }
                </div>
                <main className='main-children'>{children}</main>
            </div>
        </IconContext.Provider>
    );
}

export default Sidebar;


{/* <IconContext.Provider className='sbar-container' value={{ color: '#fff' }}>
            <div className='sidebar'>
                <Link to='#' className='menu-bars' onClick={showSideBar}>
                    <FaIcons.FaBars />
                </Link>
            </div>
            <nav className={sbar ? 'menu-bar-active' : 'sid-menu'}>
                <ul className='sid-menu-items'>
                    <li className='sidbar-toggle' onClick={showSideBar}>
                        <Link to='#' className='menu-bars'>
                            <IoIcons.IoClose />
                        </Link>
                    </li>
                    {SidebarData.map((item,index) => (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span className='item-title'>{item.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </IconContext.Provider> */}