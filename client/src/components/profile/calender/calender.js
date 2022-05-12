import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import {useDispatch} from "react-redux"
// import {bookTraining} from '../../../redux/action/action'

function Calender() {
  // const dispatch =useDispatch();
  const [value, onChange] = useState(new Date());
//   const submit = (value)=>{
//     onChange(value)
//     dispatch(bookTraining({value}))
// }

  return (
    <div className='modalcalendar'>
      {/* <Calendar onChange={()=>submit(value)} value={value} /> */}
      <Calendar onChange={onChange} value={value} />
      {/* <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {Date.toDateString()}
      </p> */}
    </div>
  );
}

export default Calender;




