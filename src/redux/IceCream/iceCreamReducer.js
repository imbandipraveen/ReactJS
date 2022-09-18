import { BUY_ICECREAM } from "./iceCreamTypes";

const intialState={
    numOfIceCreams:100
}

const IceCreamReducer=(state=intialState,action)=>{

    switch(action.type){
        case BUY_ICECREAM:
            return {...state,numOfIceCreams:state.numOfIceCreams-action.payload}
        default:
            return state;
        
    }
}

export default IceCreamReducer