import { BUY_CHOCOLATE } from "./ChocolatesType"

const initialChocolateState = {
    numOfChocolates: Math.floor(Math.random()*1000)
}

const ChocolateReducer = (state=initialChocolateState, action) => {
    switch(action.type){
        case BUY_CHOCOLATE: return{
            ...state,
            numOfChocolates: state.numOfChocolates-action.payload
        }
        default: return state
    }
}

export default ChocolateReducer