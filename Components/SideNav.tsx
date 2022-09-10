import React, { useState } from "react";
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [

    getItem('Navigation 1', 'sub1', null, [
        getItem('Submenu', 'sub2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')]),
    ]),
]
    function SideNav() {
        const [submenu, setSunmenu] = useState(false);
        return (
            <>
             <div className={`sidenav`}>
                <div>Electronic Devices <span></span></div>
                <div>Electronic Accessories <span></span></div>
                <div>TV &amp; Home Appliances <span></span></div>
                <div>Health &amp; Beauty <span></span></div>
                <div>Babies &amp; Toys <span></span></div>
                <div>Groceries &amp; Pets <span></span></div>
                <div>Home &amp; Lifestyle <span></span></div>
                <div>Women&apos;s Fashion &amp; Accessories <span></span></div>
                <div>Men&apos;s Fashion &amp; Accessories <span></span></div>
                <div>Kid&apos;s Fashion &amp; Accessories <span></span></div>
                <div>Sports &amp; Travel <span></span></div>
                <div>Automotive &amp; Motorcycles <span></span></div>
                {/* <Menu style={{ width: 256 }} mode="vertical" items={items} /> */}
            </div>
            </>
           
        )
    }
export default SideNav;