import React , {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getOffers,removeOffers} from '../../redux/action/action';
import {ListGroup, Badge} from 'react-bootstrap'; 

function ListOfPersons() {
const dispatch=useDispatch()
useEffect(()=>{dispatch(getOffers())},[])
const offers = useSelector((state) => state.ContactReducer.getoffer)
const deletePersone = (ID) =>{
  dispatch(removeOffers(ID))
  window.location.reload();
}
return (<div className="list-offer-persons">
<h4 className='granola'>Interested persons to be contacted</h4>
    {offers?.map((el, key) =>(

      <ListGroup as="ol" numbered className="listOfIntertedPersons">
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold"> {el.fullname}</div>
     Email= {el.email}
    </div>
    <Badge bg="primary" pill>
   Phone= {el.phone}
    </Badge>
    <div  onClick={()=> deletePersone(el._id)}><i class="fas fa-trash"></i></div>
  </ListGroup.Item>
</ListGroup>




    )
) 
}
</div>)}
export default ListOfPersons;
 {/* <ListGroup className="listOfIntertedPersons">
    <ListGroup.Item variant="success">{el.fullname}</ListGroup.Item>
  <ListGroup.Item>{el.email}</ListGroup.Item>
  <ListGroup.Item>{el.phone}</ListGroup.Item>
</ListGroup> */}