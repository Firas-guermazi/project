import React from 'react'
import {Card} from 'react-bootstrap';
import MultiLineChart from './chart/linechart'
import AddCourse from '../courses/addCourse'
import ListOfPersons from '../offers/listOfPersons'

function AdminProfile() {
  return (
    <div>
    <div className="middlepart">

  <img src=' https://us.123rf.com/450wm/anatolir/anatolir2011/anatolir201105528/159470802-jurist-avatar-icon-flat-style.jpg?ver=6' className='adminlogo' />
 
  <h3>
GOSPORTS ADMIN PROFILE
</h3>
</div>
<br></br>
<div className='admin-middle'>

<AddCourse/>
<MultiLineChart />

<div className="member-card-side"> 
<Card style={{ width: '15rem' , height: '10rem'}}   className='admin-cards' >
  <Card.Body>
    <Card.Title ></Card.Title>
    <Card.Text>
    <h5>20 new members</h5>
    <br></br>
    <i class="fa-solid fa-coins fa-3x" ></i>
  

    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '15rem' , height: '10rem'}}   className='admin-cards' >
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text>
    <h5>10000dt profits</h5>
    <br></br>
    <i class="fa-solid fa-dollar-sign fa-3x"></i>
 
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '15rem' , height: '10rem'}}   className='admin-cards' >
  <Card.Body>
    <Card.Title></Card.Title>
    <h5>2% gain</h5>
    <br></br>
    <Card.Text>
    <i class="fa-solid fa-chart-line fa-3x"></i>
    </Card.Text>
  </Card.Body>
</Card>
  </div>
</div>
<div> 
<ListOfPersons/>
<br></br>
 </div>




    </div>
  )
}

export default AdminProfile