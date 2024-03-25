import React from 'react';
import * as FaIcons from 'react-icons/fa6';
import * as IoIcons from 'react-icons/io5';
import * as MdIcons from 'react-icons/md';
import * as GoIcons from 'react-icons/go';


export const SidebarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdIcons.MdSpaceDashboard/>,
        cName: 'sid-text'
    },
    {
        title: "Profile",
        path: "/profile/:id",
        icon: <FaIcons.FaUser/>,
        cName: 'sid-text'
    },
    {
        title: "Practice",
        path: "/practice",
        icon: <IoIcons.IoMusicalNotes/>,
        cName: 'sid-text'
    },
    {
        title: "Goal",
        path: "/goal",
        icon: <GoIcons.GoGoal/>,
        cName: 'sid-text'
    },
    {
        title: "Achievements",
        path: "/achievements",
        icon: <FaIcons.FaAward/>,
        cName: 'sid-text'
    },
    {
        title: "Settings",
        path: "/settings",
        icon: <IoIcons.IoSettings/>,
        cName: 'sid-text'
    },
    {
        title: "Forum",
        path: "/forum",
        icon: <MdIcons.MdForum/>,
        cName: 'sid-text'
    }
]

