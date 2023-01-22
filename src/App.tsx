import React from 'react';
import { Timer } from './components/Timer';


function App() {
  const flexColumn: React.CSSProperties = { display: "flex", flexDirection: "column" }
  const flexRow: React.CSSProperties = {
    display: "flex", flexDirection: "row",
    justifyContent: "space-around", width: "50vw", marginTop: "4vh"
  }

  return <div style={flexColumn}>
    <div style={flexRow}>
      <Timer cityOrCountry={"Bangkok"} inputId={"id-1"}></Timer>
      <Timer cityOrCountry={"Paris"} inputId={"id-2"}></Timer>
    </div>
    <div style={flexRow}>
      <Timer cityOrCountry={"Berlin"} inputId={"id-3"}></Timer>
      <Timer cityOrCountry={"Moscow"} inputId={"id-4"}></Timer>
    </div>
  </div>
}

export default App;