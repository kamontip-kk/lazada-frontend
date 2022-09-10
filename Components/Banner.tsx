import React from "react";
import SideNav from "./SideNav";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function Banner() {
    return (
        <div className={`Banner`}>
            <div className={`padding`}>
                <SideNav/>
                <div className={`carousel`}>
                    <Carousel showStatus={false} showArrows={false} showThumbs={false} autoPlay={true}>
                        <div>
                            <img src="/images/banner2.jpeg" />
                        </div>
                        <div>
                            <img src="/images/banner2.jpeg" />
                        </div>
                        <div>
                            <img src="/images/banner2.jpeg" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
export default Banner;