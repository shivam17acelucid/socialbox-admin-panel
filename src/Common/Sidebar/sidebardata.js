import React, { useEffect } from "react";
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
export const SidebarData = [

    {
        title: 'Bundles',
        path: `/bundles`,
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Cost',
        icon: <MdIcons.MdCompare />,
        path: "/cost",
        cName: 'nav-text',
    },
    {
        title: 'Add Creator',
        path: '/addInfluencer',
        icon: <AiIcons.AiFillCalculator />,
        cName: 'nav-text'
    },
]