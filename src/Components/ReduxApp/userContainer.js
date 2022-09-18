import React, { useState } from 'react'
import { fetchUsers } from '../../redux'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
function UserContainer() {
    const users=useSelector(state=>state.users)
    const dispatch=useDispatch();
    const [id,setId]=useState(1);
    const [idFromButtonClick,setIdFromButtonClick] = useState(1);
    useEffect(()=>{
      console.log("ID FROM BUTTON CLICK",idFromButtonClick);
        dispatch(fetchUsers(idFromButtonClick))

    },[idFromButtonClick])
 
  return (
    <div>                   
        <input type="number" value={id} onChange={(e)=>{setId(e.target.value)}}/>
        <button onClick={()=>setIdFromButtonClick(id)}>Submit</button>

    {
        users.loading?<h1>loading</h1>:<button className='button button-input'>{users.users.name}</button>
    }

    </div>
  )
}

export default UserContainer