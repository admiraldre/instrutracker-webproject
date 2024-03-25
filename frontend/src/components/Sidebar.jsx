import React, { Children, useState } from 'react';
import { SidebarData } from './SidebarData';
import * as FaIcons from 'react-icons/fa6';
import * as IoIcons from 'react-icons/io5';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Sidebar = ({ children }) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    axios.defaults.withCredentials = true;

    const handleLogout = () => {
        axios.get('/userLogout')
            .then(res => {
                if (res.data.status) {
                    navigate('/login')
                }
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <div className='side-container'>
            <div className="actual-sidebar">
                <div style={{ width: isOpen ? "300px" : "50px" }} className='sidebar'>
                    <div className='top-section'>
                        <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className='bars'>
                            <FaIcons.FaBars onClick={toggle} />
                        </div>
                    </div>
                    {
                        SidebarData.map((item, index) => (
                            <NavLink to={item.path} key={item.index} className='link' activeclassname='active'>
                                <div className='icon'>{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className='link_text'>{item.title}</div>
                            </NavLink>
                        ))
                    }
                    <div className='logoutButton' style={{ display: isOpen ? "" : "none" }} ><IoIcons.IoExit />
                        <button className='logoutActualButton' onClick={handleLogout}>Logout</button></div>
                </div>
                <main className='main-children'>{children}</main>
            </div>
        </div>
    );
}

export default Sidebar;

