import React from 'react';
import { Timer } from './components/Timer';


function App() {
  const flexColumn: React.CSSProperties = {display: "flex", flexDirection: "column"};

  const flexRow: React.CSSProperties = 
  {
    display: "flex", flexDirection: "row",
    justifyContent: "space-around", width: "50vw", marginTop: "4vh"
  }

  return <div style={flexColumn}>
    <div style={flexRow}>
      <Timer cityOrCountry={"Russia"} inputId={"id-1"}></Timer>
      <Timer cityOrCountry={"Israel"} inputId={"id-2"}></Timer>
    </div>
    <div style={flexRow}>
      <Timer cityOrCountry={"Prague"} inputId={"id-3"}></Timer>
      <Timer cityOrCountry={"Canada"} inputId={"id-4"}></Timer>
    </div>
  </div>
}

export default App;