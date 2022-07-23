import { BUY_CHOCOLATE } from "./ChocolatesType"

export const buyChocolate = (number=1) => {
    return{
        type: BUY_CHOCOLATE,
        payload: number
    }
}