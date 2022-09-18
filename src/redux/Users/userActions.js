import {FETCH_USER_REQUEST,FETCH_USER_FAILURE,FETCH_USER_SUCESS}  from './userTypes';
import axios from 'axios';
export function fetchUserSuccess(users){
 return {
     type:FETCH_USER_SUCESS,
     payload:users
 }
}

export function fetchUserFailure(error){
    return {
        type:FETCH_USER_FAILURE,
        payload:error
    }
}
export function fetchUserRequest(){
    return {
        type:FETCH_USER_REQUEST,
    }
}

export function fetchUsers(number=1){
 return (dispatch)=>{
     dispatch(fetchUserRequest);
     axios.get(`https://jsonplaceholder.typicode.com/users/${number}`)
     .then((res)=>{
        dispatch(fetchUserSuccess(res.data));
     })
     .catch((error)=>{
         dispatch(fetchUserFailure(error));
     })
 }
}
