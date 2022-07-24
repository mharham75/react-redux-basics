import axios from "axios"
import { FETCH_LIST_OF_TODOS, FETCH_LIST_OF_TODOS_FAILURE, FETCH_LIST_OF_TODOS_SUCCESS } from "./TodosType"

export const fetchListOfTodos = () => {
    return{
        type: FETCH_LIST_OF_TODOS,
    }
}

export const fetchListOfTodosSuccess = todos => {
    return{
        type: FETCH_LIST_OF_TODOS_SUCCESS,
        payload: todos,
    }
}

export const fetchListOfTodosFailure = error => {
    return{
        type: FETCH_LIST_OF_TODOS_FAILURE,
        payload: error,
    }
}

export const fetchTodos = () => {
    return function(dispatch){
        dispatch(fetchListOfTodos())
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            const data = response.data
            dispatch(fetchListOfTodosSuccess(data))
        })
        .catch(err => dispatch(fetchListOfTodosFailure(err.message)))
    }
}