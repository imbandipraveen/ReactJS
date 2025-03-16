import { BUY_CAKE, ADD_CAKE } from "./cakeTypes";
export function buyCake(number = 1) {
  return {
    type: BUY_CAKE,
    info: "buy cake",
    payload: number,
  };
}
export function addCake(number = 1) {
  return {
    type: ADD_CAKE,
    payload: number,
  };
}
