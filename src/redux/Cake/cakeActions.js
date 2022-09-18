// import { BUY_CAKE, BUY_MOBILE } from "./cakeTypes";
import { BUY_CAKE, BUY_PEN,ADD_CAKE } from "./cakeTypes";
export function buyCake(number=1){
    return {
        type:BUY_CAKE,
        info:"buy cake",
        payload:number
    }
}
export function addCake(number = 1){
    return {
        type:ADD_CAKE,
        payload:number
    }
}


// export function buyCake(){
//     return {
//         type:BUY_MOBILE,
//         infor:"BUY MOBILE"
//     }
// }