import React, { useEffect, useState } from "react";
import Ads from "./Ads";
import { useRouter } from "next/router";
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';

function Header() {
    const [ads, setAds] = useState(true);
    const router = useRouter();

    const showads = () => {
        if (window.scrollY >= 80) {
            setAds(false);
        } else {
            setAds(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', showads);
    })
    
    return (
        <div className={`Header`}>
            <div className={`subheader`}>
                <a id={`activeheader`}>SAVE MORE ON APP</a>
                <a id={`activeheader`}>SELL ON LAZADA</a>
                <a>CUNTOMER CARE</a>
                <a>TRACK MY ORDER</a>
                <a>LOGIN</a>
                <a>SIGNUP</a>
                <a id={`lastheader`}>เปลี่ยนภาษา</a>
            </div>
            <div className={`mainheader`}>
                <span className={`mainheader-item logo`}>
                    <img src={`/images/lazada.png`} alt={``}/>
                </span>
                <span className={`mainheader-item`}>
                    <input type={`text`} placeholder="Search in Lazada"/>
                    <button><SearchOutlined /></button>
                    <span className={`cart`}>
                        <ShoppingCartOutlined/>
                    </span>
                </span>
                <span className={`mainheader-item gift`}>
                    <img src={``} alt={`New User Free Gift`} />
                </span>
            </div>
        </div>

    )
}

export default Header;