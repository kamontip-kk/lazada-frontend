import React from "react";

function Menu(){
    return(
        <div className={`Menu`}>
                <div className={`menuitem shadowonhover`}>
                    <img src={`/images/aseprite.png`} alt={``} />
                    LazMall
                </div>
                <div className={`menuitem shadowonhover`}>
                    <img src={`/images/aseprite.png`} alt={``}/>
                    Vouchers
                </div>
                <div className={`menuitem shadowonhover`}>
                    <img src={`/images/aseprite.png`} alt={``}/>
                    Top-Up, Bills&amp;Food
                </div>
                <div className={`menuitem shadowonhover`}>
                    <img src={`/images/aseprite.png`} alt={``}/>
                    LazLOOK
                </div>
                <div className={`menuitem shadowonhover`}>
                    <img src={`/images/aseprite.png`} alt={``}/>
                    LazPick
                </div>
        </div>
    )
}

export default Menu;