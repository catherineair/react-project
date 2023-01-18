import React from 'react';
import { Timer } from './components/Timer';

function App()
{
  return <div>
    <Timer cityOrCountry={'Canada'} regularity={3}></Timer>
    <Timer cityOrCountry={'Paris'} regularity={6}></Timer>
    <Timer cityOrCountry={'Iceland'} regularity={12}></Timer>
    <Timer cityOrCountry={'Milan'} regularity={18}></Timer>
  </div>
}

export default App;