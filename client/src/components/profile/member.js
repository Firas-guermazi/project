import React from 'react'
import Chart from './chart/chart'
import Bmi from './BMI/BMI'
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'



function MemberProfile() {
  return (
    <div> 
    <div className="middlepart">
  <h1>
Welcome to your profile
</h1>
</div>

<br></br>

    <div className="member-profile" >
{/* side cards and chart */}
<div className='member-middle'>

<Bmi/>
<div>


<div className="member-card"> 
<Card style={{ width: '10rem' , height: '7rem', color:'white' }}    className='membercards'>
  <Card.Body>
    <Card.Text>
    <div><i class="fa-solid fa-calendar-check fa-3x"></i></div>
    45 passages
       </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '10rem' , height: '7rem', color:'white' }}   className='membercards'>
  <Card.Body>
    <Card.Text>
    <div><i class="fa-solid fa-chart-pie fa-3x"></i></div>
    29 training sessions
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '10rem' , height: '7rem', color:'white' }}   className='membercards'>
  <Card.Body>
    <Card.Text>
    <div> <i class="fa-solid fa-fire fa-3x"></i></div>
    5673 kcal burned
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '10rem' , height: '7rem', color:'white' }} className='membercards'>
  <Card.Body>
    <Card.Text>
    <div><i class="fa-solid fa-weight-scale fa-3x"></i></div>
    -8.9 kg
    </Card.Text>
  </Card.Body>
</Card>

  </div>

  <Chart />
</div>
  </div>
    </div>
    <br></br>
    <div>
<Button> 🎯<Link to={"/Courses"} className='offerlink'>book your next training session </Link> 🎯</Button>

<p className="granola">You’re only one workout away from a good mood.</p>

<br></br>

</div>
    </div>
  )
}

export default MemberProfile