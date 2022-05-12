import { INCREMENT, DECREMENT} from "./action-type";

const initialState ={
    counter:0,
    price:0,
}

const counterReducer =(state=initialState, action)=>{

switch(action.type){
case INCREMENT: return{
    ...state, 
    counter:state.counter+1,
    price:state.price+Number(action.payload)
}
case DECREMENT: return{
    ...state, counter:state.counter-1
}
default: return state
}

}
export default counterReducer;