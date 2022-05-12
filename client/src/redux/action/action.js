import {SIGNUP, SIGNIN, GET_USER, BOOK_TRAINING, ADD_TRAINING, GET_ALL_TRAINING,  GET_OFFER,  OFFER, DELETE_OFFER, INCREMENT} from '../action-type/action-type'
import axios from 'axios'


// frontend only action
export const incrementHandler =()=>{
return {
type:INCREMENT,
}}

// backend actions with axios
//user, history
export const signUp=(data) => async(dispatch)=>{
    
    try {
        const userwhosignup = 
        await axios.post('http://localhost:5000/signup',data);
       
        dispatch({
                type:SIGNUP, 
                payload:userwhosignup.data
            })
        } catch (error) {
            console.log (error)
        }
    }

export const signIn=(data, history) => async(dispatch)=>{
  
    try {
        const userwhosignin = 
        await axios.post('http://localhost:5000/signin', data);
        dispatch({
                type:SIGNIN,
                payload:userwhosignin.data
        })
       
       dispatch(currentUser( userwhosignin.data.token, history))
    } catch (error) {
        console.log (error)
    }
}


export const currentUser=(token, history) => async(dispatch)=>{

    const config = { headers:{authorization:token}}
    try {
        const user = await axios.get('http://localhost:5000/current', config);
        dispatch({
                type:GET_USER, 
                payload:user.data
        })
        
        localStorage.setItem('current_user', JSON.stringify(user.data));
       
        setTimeout(() => {
            history.push('/Profile')
        }, 500);

        
    } catch (error) {
        console.log (error)
    }
}

export const bookTraining=(data) => async(dispatch)=>{
    try {
        const bookedtraining = await axios.post('http://localhost:5000/addcalender',data);
        dispatch({
                type:BOOK_TRAINING,
                payload:bookedtraining.data
        })
    } catch (error) {
        console.log (error)
    }
}

export const addTraining=(data,history) => async(dispatch)=>{
    try {
        const addedtraining = await axios.post('http://localhost:5000/addtrainig',data);
        dispatch({
                type:ADD_TRAINING,
                payload:addedtraining.data
        })
        history.push("/Courses")
    } catch (error) {
        console.log (error)
    }
}

export const getAllTraining=() => async(dispatch)=>{
    try {
        const res = await axios.get('http://localhost:5000/listtrainings');
        dispatch({
                type:GET_ALL_TRAINING,
                payload:res.data.Training,
        })
    } catch (error) {
        console.log (error)
    }
}

export const chosenOffer=(data) => async(dispatch)=>{
    console.log(data)
    try {
        const offer = await axios.post('http://localhost:5000/offer',data);
        dispatch({
                type:OFFER,
                payload:offer.data
        })
    } catch (error) {
        console.log (error)
    }
}
export const getOffers=() => async(dispatch)=>{
    
    try {
        const interstePersons = await axios.get('http://localhost:5000/displayPersons');
        dispatch({
                type:GET_OFFER,
                payload:interstePersons.data.Persons,
        })
    } catch (error) {
        console.log (error)
    }
}
export const removeOffers=(ID) => async(dispatch)=>{
    
    try {
        const removedPersons = await axios.delete(`http://localhost:5000/offer/${ID}`);
        dispatch({
                type:DELETE_OFFER,
                payload:removedPersons.data.Persons,
        })
    } catch (error) {
        console.log (error)
    }
}

