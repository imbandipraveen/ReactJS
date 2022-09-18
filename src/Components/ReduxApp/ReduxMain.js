import CakeContainer from './CakeContainer'
import React from 'react'
import ChocolateContainer from './ChocolateContainer'
import IceCreamContaniner from './IceCreamContaniner'
import UserContainer from './userContainer'
import store from '../../redux/store'
import { Provider } from 'react-redux'
import ItemContainer from './itemContainer'
function ReduxMain() {
  return (
    <Provider store={store}>
        <div className='box'>
            <h1> react redux cake application</h1>
            <CakeContainer/>
         </div>
         <div className='box'>
            <h1> react redux chocolate application</h1>
            <ChocolateContainer/>
         </div>
         <div className='box'>
            <h1> react redux chocolate application</h1>
            <IceCreamContaniner/>
         </div>
         <div className='box'>
            <h1> react redux chocolate application</h1>
            <UserContainer/>
         </div>
         <div className='box'>
            <h1>react redux cake + chocolate container</h1>
            <ItemContainer/>
            <ItemContainer cake/>
         </div>
    </Provider>
  
  )
}

export default ReduxMain