import React, { useEffect } from "react";
import { Button } from 'antd';

function JustForYou(){
    let cards = [];

    for(let i=0; i<24; i++){
        cards.push(
            <div className={`foryou-card shadowonhover`}>
                <div className={`foryou-img`}>
                    <img src={`/images/aseprite.png`} alt={``} width={189} height={189} />
                </div>
                <div className={`foryou-description`}>
                    <div className={`name`}>กระปุกออมสินอิเล็กทรอนิกส์ กล่องนิรภัยสำหรับเด็กเก็บเงินเหรียญดิจิทัลเซฟประหยัดเงินเครื่อง ATM ขนาดเล็กของขวัญสำหรับเด็ก</div>
                    <div className={`price`}>฿65.00</div>
                    <div className={`sale`}>
                        <span className={`originalprice`}>฿89.00</span>
                        <span>&nbsp;-60%</span>
                    </div> 
                    <div className={`rating`}>
                        <span>star </span>
                        <span>(78)</span>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className={`JustForYou section`}>
            <h2>Just For You</h2>
            <div className={`foryou-grid`}>
                {cards}
            </div>
            <div className={`loadmore`}>
                <Button type="primary" ghost style={{width:'387px',padding:'8px',height:'auto',fontWeight: '500'}}>LOAD MORE</Button>
            </div>
        </div>
    )
}
export default JustForYou;