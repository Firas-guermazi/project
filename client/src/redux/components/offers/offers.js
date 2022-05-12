import React, {useState}  from 'react';
import {Modal, Button, Form} from 'react-bootstrap'; 
import {useDispatch} from "react-redux"
import {chosenOffer} from '../../redux/action/action'

function Offers({handlerOffer}) {
  // imported for the form group
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
 // added to make the choose offer btn functionnal
 const [fullname,setFullname]=useState('')
 const [email,setEmail]=useState('')
 const [phone,setPhone]=useState('')


 const dispatch =useDispatch();
 const submitoffer = () =>{
   dispatch(chosenOffer({fullname, email, phone}));
  console.log(submitoffer) 
  handleClose()
  alert('submitted successfully!');
 }

return (
<div>

{/* first we present the offers */}
<div class="image-offer">
  <div class="text-offer" >OUR OFFERS</div>
</div>
<br></br>
<div>

<h3 className='introffer'> We provide 2 offers : 6months vs 12 months membership</h3>
</div>
 {/* offer 6 monthes description */}
  <div className="offer">
  <div className="halfoffer">
<h3>6 month subscription</h3>

<h4>Unlimited access</h4>
⏱️ 06:30 - 21:30 H ⏱️ 
<h3>600Dt</h3>

<ul>
<li>cardio training area</li>
<li>weight training area</li>
<li>fitness area</li>
</ul>

<p>Unlimited access to all Gosports Gym classes and clubs</p>

<Button variant="dark" onClick={handleShow}>Choose 6 months offer</Button>
</div>

{/* offer one year description*/}
 <div className="halfoffer">
<h3>12 month subscription</h3>

<h4>Unlimited access</h4>
⏱️ 06:30 - 21:30 H ⏱️ 
<h3>930Dt</h3>

<ul>
<li>cardio training area</li>
<li>weight training area</li>
<li>fitness area</li>
</ul>
<p>Unlimited access to all Gosports Gym classes and clubs</p>


<Button variant="dark" onClick={handleShow}>Choose 12 months offer</Button>

{/* the modal form that will fill potential member details */}
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Please fill this form and Gosports team will contact you</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>FULLNAME</Form.Label>
    <Form.Control type="email" placeholder="add the movie name" onInput ={(e)=>setFullname(e.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>EMAIL</Form.Label>
    <Form.Control type="email" placeholder="add the movie name"  onInput={(e)=>setEmail(e.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
    <Form.Label>PHONE NUMBER</Form.Label>
    <Form.Control type="email" placeholder="add the movie description"  onInput={(e)=>setPhone(e.target.value)} />
    </Form.Group>
     </Form>
    </Modal.Body>
        <Modal.Footer>
            
            <Button variant="info" onClick={submitoffer}>
            Save Changes
            </Button>
        </Modal.Footer>
        </Modal>
</div>
 </div>
  
  </div>);
}

export default Offers;
