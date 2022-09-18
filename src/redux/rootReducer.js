import { combineReducers } from "redux";
import ChocolateReducer from "./Chocolate/chocolateReducer";
import cakeReducer from "./Cake/cakeReducers";
import IceCreamReducer from "./IceCream/iceCreamReducer";
import UserReducer from "./Users/userReducer";
const rootReducer=combineReducers({
    cake:cakeReducer,
    chocolate:ChocolateReducer,
    iceCream:IceCreamReducer,
    users:UserReducer
})
export default rootReducer;