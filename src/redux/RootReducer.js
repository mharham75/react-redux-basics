import { combineReducers } from "redux";
import CakeReducer from "./cake/CakeReducer";
import ChocolateReducer from "./chocolate/ChocolatesRedcuer";
import TodosReducer from "./todos/TodosReducer";
import UserReducer from "./user/UserReducer";

const RootReducer = combineReducers({
    cake: CakeReducer,
    chocolate: ChocolateReducer,
    user: UserReducer,
    todo: TodosReducer,
})

export default RootReducer