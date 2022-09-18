import { BUY_CHOCOLATE } from "./chocolateTypes";

const intialState={
    numOfChocolates:20
}

const ChocolateReducer=(state=intialState,action)=>{
switch(action.type){
    case BUY_CHOCOLATE:
        return {...state,numOfChocolates:state.numOfChocolates-1}
    default:
        return state;
}
}

export default ChocolateReducer