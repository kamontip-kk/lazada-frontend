import { Button } from "antd";
import React, { useState } from "react";
import { CloseOutlined } from '@ant-design/icons';

function Ads(){
    const [close, setClose] = useState(false);

    return(
        <>
            {close == true? null:
            <div className={`Ads`}>
                <div className={`adsimg`}>
                    <img src="" alt="Advertisement" />
                    <div>
                        <CloseOutlined onClick={()=> setClose(true)}/>
                    </div>
                </div>
            </div>
            }
            
        </>
    )
}

export default Ads;