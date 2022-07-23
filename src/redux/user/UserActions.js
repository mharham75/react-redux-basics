import axios from "axios"
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./UserTypes"

export const fetchUserRequest = () => {
    return{
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = users => {
    return{
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetchUserFailure = error => {
    return{
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( response => {
            const data = response.data
            dispatch(fetchUserSuccess(data))
        })
        .catch( err => dispatch(fetchUserFailure(err.message)))
    }
}