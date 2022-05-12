import React, {useState, useEffect} from 'react';
import {Card, Button, Modal} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {getAllTraining, incrementHandler} from '../../redux/action/action';
import Calender from '../profile/calender/calender';



function Courses() {
    // imported for the form group
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
  const dispatch=useDispatch()
  const PLUS=()=>{dispatch(incrementHandler())};
  const number =useSelector((state)=>state.CounterReducer.counter)
  useEffect(()=>{
    dispatch(getAllTraining())
  },[])
  //what are excatly trainings that are being map??
  const trainings = useSelector((state) => state.ContactReducer.listtraining)

  return ( <div>
 <div class="image-offer">
  <div class="text-offer">OUR COURSES</div> </div>
  <div  className="allcourses">  
  <div c>

<p> 

Our gyns are rich in the latest Technogym equipment, enhanced with committed coaches who listen to you and provided with professional classes that are intensely beneficial.
</p>

    </div>
    
    <div  className='course'>
    {/* {courseslist.map((el, key) =>( <div> this is when i used to map the list in list.js */}
 {trainings?.map((el, key) =>( <div>
<Card style={{ border:"success" , width: '18rem', height: '35rem'}}>
  <Card.Img className="cardimg" variant="top" src={el.image} style={{ width: '18rem' , height: '12rem'  }}/>
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <Card.Text>
    <h6> ⏱️ Time: {el.duration} min</h6>
<p> 💪 Intensity: {el.intencity}</p>
  {el.description}
  </Card.Text>
    {/* <Card.Text> <Link to={`/Details/${el.id}`}><Button variant="info">DETAILS</Button></Link></Card.Text> */}
  </Card.Body>
  <div className="btns">
  <span>Total booked places:{number}</span> 

<br></br>
<Button variant="info" onClick={handleShow}>Book</Button>
            </div>
            <br></br>
            <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton>
            <Modal.Title>Book your course</Modal.Title>
        </Modal.Header>
        <Modal.Body ClassName="modalcalendar">
       
<Calender />

<Button onClick={()=> PLUS()} variant="info"> Submit</Button>


    </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
        </Modal>
       
  </Card>
  </div>))}
</div>
</div>
  </div>);
}

export default Courses;
