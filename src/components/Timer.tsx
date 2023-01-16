import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import timeZones from "../time-zones";

type TimerProps =
{
   timeZoneIndex: number;   
}

export const Timer: React.FC<TimerProps> = (props) =>
{
    const timeZone = timeZones[props.timeZoneIndex].name;

    const [time, setTime] = React.useState<Date>(new Date());

    function tick()
    {
        console.log("tick");
        setTime(new Date());   
    }

    React.useEffect(() =>
    {
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, []);

    setInterval(tick, 1000);

    return <div>
        <h3>Time in time zone {timeZone}</h3>
        <label style={{display: "block", textAlign: "center", fontSize: "2em"}}>Time {time.toLocaleTimeString(undefined, {timeZone})}</label>
    </div>
}