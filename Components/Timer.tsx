import { useState, useEffect } from "react";

function Timer({date, passData}:any) {

    const [seconds, setSeconds] = useState(0); //4
    const [minutes, setMinutes] = useState(0); //7
    const [hours, setHours] = useState(0);

    const difference = +new Date(`${date}`) - +new Date();

    useEffect(() => {
        setTimeout(() => {
            if (difference <= 0) {
                passData(false);
                return;
            }
            setSeconds(Math.floor((difference / 1000) % 60))
            setMinutes(Math.floor((difference / 1000 / 60) % 60));
            setHours(Math.floor(difference / (1000 * 60 * 60)));

        }, 1000);

    }, [difference])

    return (
        <span className={`Timer`}>
            <span>
                {hours}
            </span> :
            <span>
                {minutes < 10 ? `0${minutes}` : minutes}
            </span> :
            <span>
                {seconds < 10 ? `0${seconds}` : seconds}
            </span>
        </span>
    )
}

export default Timer;