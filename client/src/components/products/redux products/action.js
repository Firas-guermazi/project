import { INCREMENT, DECREMENT } from "./action-type";

export const incrementHandler =(price)=>{
return {
    type:INCREMENT,
    payload:price
}
}
export const decrementHandler =()=>{
return {type:DECREMENT}
}