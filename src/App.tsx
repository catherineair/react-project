import React from 'react';
import { Timer } from './components/Timer';

function App()
{
  return <div>
    <Timer timeZoneIndex={20}></Timer>
    <Timer timeZoneIndex={15}></Timer>
  </div>
}

export default App;