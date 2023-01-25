import React from 'react';
import { Timer } from './components/Timer';
import { Input } from './components/Input';



function App() 
{
  // const flexColumn: React.CSSProperties = { display: "flex", flexDirection: "column" }
  // const flexRow: React.CSSProperties = {
  //   display: "flex", flexDirection: "row",
  //   justifyContent: "space-around", width: "50vw", marginTop: "4vh"
  // }

  const properties: React.CSSProperties = 
  {
    display: "flex",
    flexWrap: "wrap"
  }

  const [cityCountry, setCityCountry] = React.useState<string[]>([]);

  function creatingDivs(value: string): string 
  {
    const cityOrCountry: string[] = value.split("#");
    setCityCountry(cityOrCountry.slice());
    return ''
  }

  function getDivs(cityCountry: string[]): JSX.Element[] 
  {
    console.log(cityCountry);
    return cityCountry.map(value => <Timer cityOrCountry={value}></Timer>)
  }

  return <section style={{ display: "flex", flexDirection: "column"}}>
    <Input placeHolder={'enter cities or countries separated by #'} inputProcess={creatingDivs} ></Input>
    <section style={properties}>
      {getDivs(cityCountry)}
    </section>
  </section >

}

/*<div style={flexColumn}>
  <div style={flexRow}>
    <Timer cityOrCountry={"Paris"} inputId={"id-1"}></Timer>
    <Timer cityOrCountry={"Prague"} inputId={"id-2"}></Timer>
  </div>
  <div style={flexRow}>
    <Timer cityOrCountry={"Netanya"} inputId={"id-3"}></Timer>
    <Timer cityOrCountry={"Moscow"} inputId={"id-4"}></Timer>
  </div>
</div>
}*/

export default App;