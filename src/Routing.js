import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import UseState from "./Components/useState/useState";
import Home from "./Components/Home";
import UseEffect from "./Components/useEffect/useEffect";
import ContextHook from "./Components/useContext/ContextHook";
import ReducerHooks from "./Components/useReducer/ReducerHooks";
import { CallbackHook } from "./Components/CallbackHook";
import { UseRef } from "./Components/useRef";
import { MemoHookExplanation } from "./Components/useMemo";
import { ReduxMain } from "./Components/ReduxApp";
function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/" element={<UseState />} />
          <Route path="/useState" element={<UseState />} />
          <Route path="/useEffect" element={<UseEffect />} />
          <Route path="/useContext" element={<ContextHook />} />
          <Route path="/useReducer" element={<ReducerHooks />} />
          <Route path="/useCallback" element={<CallbackHook />} />
          <Route path="/useRef" element={<UseRef />} />
          <Route path="/useMemo" element={<MemoHookExplanation />} />
          <Route path="/redux" element={<ReduxMain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing