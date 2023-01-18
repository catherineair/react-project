import { BlockList } from "net";
import React from "react";

import timeZones from "../time-zones";

    type TimerProps = 
{
    cityOrCountry: string;
    regularity: number;
}

    export const Timer: React.FC<TimerProps> = (props) => 
{
    const timeZoneIndex:number = getIndex(props.cityOrCountry);

    const timeZone: string = timeZones[timeZoneIndex].name;

    const [time, setTime] = React.useState(new Date());

    function getLocalIndex(): number
{
    return timeZones.findIndex( elem => Intl.DateTimeFormat().resolvedOptions().timeZone === elem.name)
}

    function tick() 
    {
        console.log("tick");
        setTime(new Date());
    }

    React.useEffect(()=>{
        const interval = setInterval(tick, 1000);
        return ()=>clearInterval(interval);
    }, [])
    
    return <div>
        <h3>Time in time zone {timeZone}</h3>
        <label style={{display: "block",
         textAlign: "center", color: "blue", fontSize: "2em"}}>Time {time.toLocaleTimeString(undefined,{timeZone})}</label>
    </div>
}

    function getIndex(cityOrCountry: string): number
{
    let index = timeZones.findIndex( elem =>
        {
            return JSON.stringify(elem).includes(cityOrCountry);
        }
        )
        
        return index > -1 ? index : getLocalIndex();
}

    function getLocalIndex(): number
{
    return timeZones.findIndex( elem => Intl.DateTimeFormat().resolvedOptions().timeZone === elem.name)
}