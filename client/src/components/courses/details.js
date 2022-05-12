import React, {useState} from 'react'
import {Card, Button,Modal} from 'react-bootstrap';
import Calender from '../profile/calender/calender'
 

  function Details({Liste,match,history}) {
    console.log(history)
 
    const found=Liste.find((elem) => (elem.id == match.params.id))
    console.log(found)
     // imported for the form group
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
    return (
        <div className="details">


<Card className="detailscard">
<Card.Img variant="top" className="detailsimg" src={found.image} style={{ width: '25rem' , height: '15rem'  }}/>
<Card.Body>
<h2>{found.title}</h2>
<h4>Time: {found.duration}</h4>
<h5>Intencity: {found.intensity}</h5>
  <Card.Text>
  {found.description}
  </Card.Text>
</Card.Body>
<div className="btns">
<Button variant="light" onClick={handleShow}>Book</Button>
       {/* <Button variant="light" onClick={()=>history.goBack()}>Go back</Button>
            <Button variant="light" onClick={()=>history.push('/')}>Home</Button> */}
            </div>
            <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton>
            <Modal.Title>Book your course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
 <Calender />
    </Modal.Body>
        <Modal.Footer>
           
            <Button variant="info" >
            Save Changes
            </Button>
        </Modal.Footer>
        </Modal>


</Card>
            
        
         
           
        
     

   
            
        </div>
    )
}

export default Details;
