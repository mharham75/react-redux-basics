import { combineReducers } from "redux";
import CakeReducer from "./cake/CakeReducer";
import ChocolateReducer from "./chocolate/ChocolatesRedcuer";
import UserReducer from "./user/UserReducer";

const RootReducer = combineReducers({
    cake: CakeReducer,
    chocolate: ChocolateReducer,
    user: UserReducer,
})

export default RootReducer