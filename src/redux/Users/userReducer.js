import {
    FETCH_USER_SUCESS,
    FETCH_USER_FAILURE,
    FETCH_USER_REQUEST} from './userTypes'


    const intialState={
        loading:true,
        users:[],
        error:''
    }


    const UserReducer=(state=intialState,action)=>{

        switch(action.type){
            case FETCH_USER_REQUEST:
                return {...state,loading:true,}
            case FETCH_USER_SUCESS:
                return {...state,loading:false,users:action.payload}
            case FETCH_USER_FAILURE:
                return {...state,loading:false,error:action.payload}
            default:
                return state;
            
        }
    }

    export default UserReducer;