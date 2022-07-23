import { BUY_CHOCOLATE } from "./ChocolatesType"

export const buyChocolate = (number) => {
    return{
        type: BUY_CHOCOLATE,
        payload: number
    }
}