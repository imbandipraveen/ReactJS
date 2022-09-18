import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from './Components/useState/useState'
import Home from './Components/Home'
import UseEffect from './Components/useEffect/useEffect'
import ContextHook from './Components/useContext/ContextHook'
import ReducerHooks from './Components/useReducer/ReducerHooks'
import ParentComponent from './Components/useCallback/ParentComponent'
import RefHook from './Components/useRef/RefHook'
import MemoHook from './Components/useMemo/MemoHook'
import ReduxMain from './Components/ReduxApp/ReduxMain'
function Routing() {
  return (
    <div>
        <BrowserRouter>
        <Home/> 
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/useState' element={<App/>}/>
            <Route path='/useEffect' element={<UseEffect/>}/>
            <Route path='/useContext' element={<ContextHook/>}/>
            <Route path='/useReducer' element={<ReducerHooks/>}/>
            <Route path='/useCallback' element={<ParentComponent/>}/>
            <Route path='/useRef' element={<RefHook/>}/>
            <Route path='/useMemo' element={<MemoHook/>}/>
            <Route path='/redux' element={<ReduxMain/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routing