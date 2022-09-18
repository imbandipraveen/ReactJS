import React from 'react'
import { useContext } from 'react'
import { UserContext, ChannelContext, ChannelContext1} from './ContextHook'
function ComponentC() {
    const user=useContext(UserContext);
    const channel=useContext(ChannelContext);
    const channel1 = useContext(ChannelContext1)
  return (
    <div>
        <button className='button button-input'>user - <button className='button'>{user}</button> </button>
        <button className='button button-input'>user - <button className='button'>{channel}</button> </button>
        <button className='button button-input'>user - <button className='button'>{channel1}</button> </button>
    </div>
  )
}

export default ComponentC