import { ADD_CAKE, BUY_CAKE } from "./cakeTypes";
const intialState = {
  numOfCakes: 10,
};

const cakeReducer = (state = intialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case ADD_CAKE:
      return {
        ...state,
        numOfCakes: Number(state.numOfCakes) + Number(action.payload),
      };
    default:
      return state;
  }
};

export default cakeReducer;
