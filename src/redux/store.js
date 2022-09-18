import { createStore ,applyMiddleware} from "redux";
import logger from 'redux-logger'
import rootReducer from "./rootReducer";
import reduxThunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,reduxThunk)))
export default store;

// const store= createStore(rootReducer);



