import React from "react";

function Payment() {
    return (
        <div className={`Payment padding`}>
            <div className={`method`}>
                <p>Payment Mehthods</p>
                <span><img src="" alt="CASH ON DELIVERY" /></span>
                <span><img src="" alt="VIS" /></span>
                <span><img src="" alt="MasterCasd" /></span>
                <span><img src="" alt="JCB" /></span>
            </div>
            <div className={`delivery`}>
                <div>
                    <p>Delivery Services</p>
                    <div className={`express`}>
                        <span><img src="" alt="img" /></span>
                        <span><img src="" alt="img" /></span>
                        <span><img src="" alt="img" /></span>
                        <span><img src="" alt="img" /></span>
                        <span><img src="" alt="img" /></span>
                        <span><img src="" alt="img" /></span>
                        <span><img src="" alt="img" /></span>
                        <span><img src="" alt="img" /></span>
                        <span><img src="" alt="img" /></span>
                    </div>
                </div>
                <div className={`verify`}>
                    <p>Verified by</p>
                    <div className={`verify-flex`}>
                        <div>
                            <img src="" alt="img" />
                        </div>
                        <div>
                            <img src="" alt="img" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Payment;