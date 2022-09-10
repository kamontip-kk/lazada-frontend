import React from "react";

function Menu(){
    return(
        <div className={`Menu`}>
                <div className={`menuitem shadowonhover`}>
                    <img src={`/images/aseprite.png`} alt={``} width={32} height={32} />
                    LazMall
                </div>
                <div className={`menuitem shadowonhover`}>
                    <img src={`/images/aseprite.png`} alt={``} width={32} height={32} />
                    Vouchers
                </div>
                <div className={`menuitem shadowonhover`}>
                    <img src={`/images/aseprite.png`} alt={``} width={32} height={32} />
                    Top-Up, Bills&amp;Food
                </div>
                <div className={`menuitem shadowonhover`}>
                    <img src={`/images/aseprite.png`} alt={``} width={32} height={32} />
                    LazLOOK
                </div>
                <div className={`menuitem shadowonhover`}>
                    <img src={`/images/aseprite.png`} alt={``} width={32} height={32} />
                    LazPick
                </div>
        </div>
    )
}

export default Menu;