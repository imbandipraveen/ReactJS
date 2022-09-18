import React from 'react'
import ComponentA from './ComponentA';
export const UserContext=React.createContext();
export const ChannelContext=React.createContext();
export const ChannelContext1 =React.createContext();
function ContextHook() {
  return (
    <div>
        <UserContext.Provider value={"Bandi praveen"}>
            <ChannelContext.Provider value={"Praveentechintelugu"}>
            <ChannelContext1.Provider value={"CHANNELLLLLLLLL"}>
          <ComponentA/>
        </ChannelContext1.Provider>

            </ChannelContext.Provider>
        </UserContext.Provider>
       
    </div>
  )
}

export default ContextHook