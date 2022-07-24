import { FETCH_LIST_OF_TODOS, FETCH_LIST_OF_TODOS_FAILURE, FETCH_LIST_OF_TODOS_SUCCESS } from "./TodosType"

const initialTodosState = {
    loading: false,
    todos: [],
    error: '',
}

const TodosReducer = (state=initialTodosState, action) => {
    switch(action.type){
        case FETCH_LIST_OF_TODOS: return{
            ...state,
            loading: true,
        }
        case FETCH_LIST_OF_TODOS_SUCCESS : return{
            loading: false,
            todos: action.payload,
            error: ''
        }
        case FETCH_LIST_OF_TODOS_FAILURE: return{
            loading: false,
            todos: [],
            error: action.payload,
        }
        default: return state
    }
}

export default TodosReducer