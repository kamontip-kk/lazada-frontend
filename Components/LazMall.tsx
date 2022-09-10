import React from "react";

function LazMall() {
    let cards = [];

    for(let i=0; i<6; i++){
        cards.push(
            <div className={`lazmall-card shadowonhover`}>
                    <div className={`lazmall-img-bg`}>
                        <img src={`/images/aseprite.png`} alt={``}/>
                        <div className={`gradient-box`}></div>
                    </div>
                    <div className={`lazmall-display`}>
                        <img className={`lazmall-card-img`} src={`/images/aseprite.png`} alt={``} width={52} height={52} /><br />
                        <span id={`lazmall-card-title`}>Lenuo</span><br />
                        <span>Enjoy Success</span>
                    </div>
            </div>
        )
    }
    return (
        <div className={`LazMall section`}>
            <h2>LazMall</h2>
            <div className={`lazmall-grid`}>
                {cards}
            </div>
            
        </div>
    )
}
export default LazMall;