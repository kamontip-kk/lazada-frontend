import React, { useEffect, useState } from "react";
import Timer from "./Timer";

function FlashSale() {
    let cards = [];
    const [sale, setSale] = useState(true);

    for (let i = 0; i < 6; i++) {
        cards.push(
            <div className={`foryou-card shadowonhover`}>
                <div className={`foryou-img`}>
                    <img src={`/images/aseprite.png`} alt={``} />
                </div>
                <div className={`foryou-description`}>
                    <div className={`name`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, beatae. Repellendus velit illo, placeat saepe ad debitis soluta, vero provident facere culpa nostrum itaque tempora iure harum officia molestiae! Blanditiis.</div>
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

    const getState = (state:boolean) =>{
        setSale(state);
    }

    return (
        <>
            {sale == true ?
                <div className={`FlashSale section`}>
                    <h2>Flash Sale</h2>
                    <div className={`onsale`}>
                        <div className={`countdown`}>
                            <span> On Sale Now</span>
                            <span>
                                <span className={`time`}>Ending in </span>
                                <Timer date={`09/13/2022`} passData={getState}/>
                            </span>
                        </div>
                        <div className={`shopall-border`}>
                            SHOP ALL PRODUCTS
                        </div>
                    </div>
                    <div className={`Flash-grid`}>
                        {cards}
                    </div>
                </div> :
                null}
        </>
    )
}
export default FlashSale;