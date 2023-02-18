import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigator } from './navigators/Navigator';
import './App.css'

import { layoutConfig } from './config/layout-config';
import { Employees } from './pages/Employees';
import { AddEmployee } from './pages/AddEmployee';
import { AgeStatistics } from './pages/AgeStatistics';
import { SalaryStatistics } from './pages/SalaryStatistics';


function App() {
  return <BrowserRouter>
      <Routes>
          <Route path='/' element={<Navigator className={layoutConfig.className}
           routes={layoutConfig.routes}  />}>
              <Route index element={<Employees/>}/>
              <Route path='add' element={<AddEmployee/>}/>
              <Route path='statistics/age' element={<AgeStatistics/>}/>
              <Route path='statistics/salary' element={<SalaryStatistics/>}/>
              
          </Route>
              
      </Routes>
  </BrowserRouter>

}
export default App;