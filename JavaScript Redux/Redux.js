const BUY_CAKE='BUY_CAKE';  ///acton types
const redux=require('redux');
const createStore=redux.createStore;
function buyCake(){   ////action creators
  return{
    type:BUY_CAKE,
    info:'first redux actio'
  }
}

const intialState={   //intial state
    numOfCakes:10
}

const reducer=(state=intialState,action)=>{   ///reducer
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,numOfCakes:state.numOfCakes-1
            }
        default:
         return state;
    }
}

const store=createStore(reducer)
console.log("Intial State",store.getState())
store.subscribe(()=>{console.log("Updated state ",store.getState())})
store.dispatch(buyCake());
store.dispatch(buyCake());




