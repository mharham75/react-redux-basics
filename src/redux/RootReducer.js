import { combineReducers } from "redux";
import CakeReducer from "./cake/CakeReducer";
import ChocolateReducer from "./chocolate/ChocolatesRedcuer";

const RootReducer = combineReducers({
    cake: CakeReducer,
    chocolate: ChocolateReducer,
})

export default RootReducer