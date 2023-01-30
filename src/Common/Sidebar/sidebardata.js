import React, { useEffect } from "react";
import * as BiIcons from 'react-icons/bi';
export const SidebarData = [

    {
        title: 'Bundles',
        path: `/bundles`,
        icon: <BiIcons.BiCoinStack />,
        cName: 'nav-text'
    },
    {
        title: 'Cost',
        icon: <BiIcons.BiRupee />,
        path: "/cost",
        cName: 'nav-text',
    },
    {
        title: 'Add Creator',
        path: '/addInfluencer',
        icon: <BiIcons.BiAddToQueue />,
        cName: 'nav-text'
    },
]