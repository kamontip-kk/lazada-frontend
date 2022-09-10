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
                <div>
                    <span className={`sidetitle`}>Electronic Devices</span>
                    <span className={`arrow`}></span>
                </div>
                <div><span className={`sidetitle`}>Electronic Accessories</span><span className={`arrow`}></span></div>
                <div><span className={`sidetitle`}>TV &amp; Home Appliances</span><span className={`arrow`}></span></div>
                <div><span className={`sidetitle`}>Health &amp; Beauty</span><span className={`arrow`}></span></div>
                <div><span className={`sidetitle`}>Babies &amp; Toys</span><span className={`arrow`}></span></div>
                <div><span className={`sidetitle`}>Groceries &amp; Pets</span><span className={`arrow`}></span></div>
                <div><span className={`sidetitle`}>Home &amp; Lifestyle</span><span className={`arrow`}></span></div>
                <div><span className={`sidetitle`}>Women&apos;s Fashion &amp; Accessories</span><span className={`arrow`}></span></div>
                <div><span className={`sidetitle`}>Men&apos;s Fashion &amp; Accessories</span><span className={`arrow`}></span></div>
                <div><span className={`sidetitle`}>Kid&apos;s Fashion &amp; Accessories</span><span className={`arrow`}></span></div>
                <div><span className={`sidetitle`}>Sports &amp; Travel</span><span className={`arrow`}></span></div>
                <div><span className={`sidetitle`}>Automotive &amp; Motorcycles</span><span className={`arrow`}></span></div>
                {/* <Menu style={{ width: 256 }} mode="vertical" items={items} /> */}
            </div>
        </>

    )
}
export default SideNav;