import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/Styles/styles.css'
function Home() {
  return (
    <div style={{marginBottom:"10px"}}>
     <Link to="/useState"><button className='button'>useState</button></Link>
     <Link to="/useEffect"><button className='button'>useEffect</button></Link>
     <Link to="/useContext"><button className='button'>useContext</button></Link>
     <Link to="/useReducer"><button className='button'>useReducer</button></Link>
     <Link to="/useCallback"><button className='button'>useCallback</button></Link>
     <Link to="/useRef"><button className='button'>useCallback</button></Link>
     <Link to="/useMemo"><button className='button'>useMemo</button></Link>
     <Link to="/redux"><button className='button'>Redux</button></Link>
    </div>
  )
}

export default Home