import React from "react";
import Image from "next/image";

const collection = (src: string) => {

}

function Collections() {
    let cards = [];

    for(let i=0; i<8; i++){
        cards.push(
            <div className={`collections-card shadowonhover`}>
            <span>Show off your wallets &gt;</span>
            <p>1,538 products</p>
            <div className={`collections-card-img`}>
                <img src={`/images/aseprite.png`} alt={``} width={65} height={65} />
                <img src={`/images/aseprite.png`} alt={``} width={65} height={65} />
                <img src={`/images/aseprite.png`} alt={``} width={65} height={65} />
            </div>
        </div>
        )
    }
    return (
        <div className={`Collections section`}>
            <h2>Collections</h2>
            <div className={`collection-grid-bg`}>
                <div className={`collection-grid`}>
                   {cards}
                </div>

            </div>
        </div>
    )
}
export default Collections;