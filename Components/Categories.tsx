import React from "react";

function Categories(){
    let cards = [];

    for(let i=0; i<16; i++){
        cards.push(
            <div className={`categories-item shadowonhover`}>
                <img src={`/images/aseprite.png`} alt={``} width={80} height={80} />
                <span>Wireless and Bluetooth Speakers</span>
            </div>
        )
    }

    return(
        <div className={`Categories section`}>
            <h2>Categories</h2>
            <div className={`categories-grid`}>
                {cards}
            </div>
        </div>
    )
}
export default Categories;