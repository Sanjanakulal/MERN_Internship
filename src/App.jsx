import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Firstapp from './Components/Firstapp'
import Testing from './Components/Testing'
import Register from './Components/Mui/Register'
import Arrowfunction from './Components/ES7/Arrowfunction'
import BasicTable from './Components/Mui/Basictable'
import ArrayMethod from './Components/ES7/Arraymethod'
import Spreadoperator from './Components/ES7/Spreadoperator'
import MediaCard from './Components/Mui/MediaCard'
import Muiappbar from './Components/Mui/Muiappbar'
import Destructuring from './Components/ES7/Destructuring'
import Importmodule from './Components/ES7/Importmodule'
import Ternaryoperator from './Components/ES7/Ternaryoperator'
import Props from './Components/ES7/Props'
import HookUseState from './Components/Hook/HookUseState'
import Counter from './Components/Hook/Counter'
import ThemeToggle from './Components/Hook/ThemeToggle'
import HookUseEffect from './Components/Hook/HookUseEffect'
import ApiAxios from './Components/Hook/ApiAxios'
import AxiosTask from './Components/Hook/AxiosTask'
import AxiosCard from './Components/Hook/AxiosCard'



export default function App() {
  return (
    <div>
     <BrowserRouter>
     <Muiappbar/>
        <Routes>
         <Route path='/Firstapp' element={<Firstapp/>} />
          <Route path='/' element={<Register/>} />
          <Route path='/Arrowfunction' element={<Arrowfunction/>} />
           <Route path='/BasicTable' element={<BasicTable/>} />
           <Route path='/ArrayMethod' element={<ArrayMethod/>} />
           <Route path='/Spreadoperator' element={<Spreadoperator/>} />
           <Route path='/MediaCard' element={<MediaCard/>} />
           <Route path='/Muiappbar' element={<Muiappbar/>} />
           <Route path='/Destructuring' element={<Destructuring/>} />
           <Route path='/Importmodule' element={<Importmodule/>} />
           <Route path='/Ternaryoperator' element={<Ternaryoperator/>} />
           <Route path='/Props' element={<Props name="sanjana" />} />
           <Route path='/HookUseState' element={<HookUseState/>} />
           <Route path='/Counter' element={<Counter/>} />
           <Route path='/ThemeToggle' element={<ThemeToggle/>} />
           <Route path='/HookUseEffect' element={<HookUseEffect/>} />
           <Route path='/ApiAxios' element={<ApiAxios/>} />
          <Route path='/AxiosTask' element={<AxiosTask/>} />
          <Route path='/AxiosCard' element={<AxiosCard/>} />
            
        </Routes>
     </BrowserRouter>
    </div>
  )
}