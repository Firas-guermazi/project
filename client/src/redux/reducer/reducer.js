import {SIGNUP, SIGNIN, GET_USER, BOOK_TRAINING, ADD_TRAINING, GET_ALL_TRAINING,OFFER, GET_OFFER, DELETE_OFFER} from '../action-type/action-type'

const initialState={
    user:{},
    usersignup:{},
    bookedtraining:{},
    addedtraining:{},
    currentUser:{},
    listtraining:[],
    offer:{},
    getoffer:[],
    deletedOffer:{},
} 

const contactReducer = (state=initialState, action) =>{
switch (action.type) {
    case SIGNUP: 
    localStorage.setItem('token',action.payload.token )
    return{

        ...state, 
        usersignup:action.payload
    }
    case SIGNIN: 
    localStorage.setItem('token',action.payload.token)
    return{
        ...state, 
        user:action.payload
    }
    case BOOK_TRAINING: return{
        ...state, 
        bookedtraining:action.payload
    }
    case ADD_TRAINING: return{
        ...state, 
        addedtraining:action.payload
    }
    case GET_ALL_TRAINING:return{
        ...state, 
        listtraining:action.payload
    }
    case GET_USER: return{
        ...state, 
        currentUser:action.payload
    }
    case GET_OFFER: return{
        ...state, 
        getoffer:action.payload
    }
    case OFFER: return{
        ...state, 
        offer:action.payload
    }
    case DELETE_OFFER: return{
        ...state, 
        deletedOffer:action.payload
    }
    default:
return state
}
}

export default contactReducer