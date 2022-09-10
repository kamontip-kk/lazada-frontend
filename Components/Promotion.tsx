import React from "react";

function Promotion() {
    return (
        <div className={`Promotion section`}>
            <div className={`promote-banner`}>
                <div className={`promote-item`}></div>
                <div className={`promote-item`}></div>
                <div className={`promote-item`}></div>
            </div>
            <div className={`service`}>
                <div>
                    <span className={`service-title`}>Customer Care</span>
                    <a>Help Center</a>
                    <a>How to Buy</a>
                    <a>Shipping &amp; Delivery</a>
                    <a>International Product Policy</a>
                    <a>How to Return</a>
                    <a>Contact Us</a>
                </div>
                <div>
                    <span>Lazada</span>
                    <a>About Lazada</a>
                    <a>Afﬁliate Program</a>
                    <a>Careers</a>
                    <a>Terms &amp; Conditions</a>
                    <a>Privacy Policy</a>
                    <a>Press &amp; Media</a>
                    <a>Security</a>
                    <a>Popular Products</a>
                    <a>Intellectual Property Protection</a>
                </div>
                <div className={`lazapp`}>
                    <img src={`/images/aseprite.png`} alt={``} width={42} height={42} />
                    <div>
                        <div className={`title`}>Go where your heart beats</div>
                        <div className={`text`}>Download the App</div>
                    </div>

                </div>
                <div id={`download`}>
                    <div>
                        Appstore
                    </div>
                    <div>
                        GooglePlay
                    </div>
                    <div>
                        AppGallery
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Promotion;