import React from 'react'
import image1 from './images/1.jpg'
import image2 from './images/2.png'
import image3 from './images/3.jpg'
import image4 from './images/4.jpg'
import image5 from './images/5.jpg'
import {Carousel} from 'react-bootstrap';
import {ListGroup, Button}  from 'react-bootstrap';
import {Link} from 'react-router-dom'


function Contact() {
    return (<div>
      <div class="image-offer">
      
      <div class="text-offer">Contact</div> </div>
      
        <div className='contact'>
        <p className="introcourses">Gosports is a series of gyms covering up to 2500m² spaces with their indoor and outdoor layout.</p>
        <br></br>
            <ListGroup>
  
  <ListGroup.Item>PHONE:   39 143 900</ListGroup.Item>
  <ListGroup.Item>EMAIL:   hello@gosports.co</ListGroup.Item>
  <ListGroup.Item >ADRESS: <br></br>
  <li > GOSPORTS, 1 Place Tahar Haddad, 1 Tunis 1053, Tunis 1053</li>
  <li> GOSPORTS, 12 rue  Saada, MARSA, 1080</li>
  <li> GOSPORTS, 53 rue Hedi nouira, Nasr, 1010</li>
  <li> GOSPORTS, sous-sol Colise Soula, Manar, 1007</li>
  <li> GOSPORTS, 4 rue ottman bey, Zahra, 2001 </li>
  </ListGroup.Item>
  </ListGroup>


{/* // here i will add a map */}


        <div className="granola">
  
  <p style={{color: 'black'}}>Our clubs are based all over Tunisia in multiple locations: </p>
  
      </div>
  <div className='carousel'>
      <Carousel>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={image1}
        alt="First slide"
        
      />
      <Carousel.Caption>
      <h1 className="clubh1">MARSA</h1>
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1500}>
      <img
        className="d-block w-100"
        src={image2} 
        alt="Second slide"
      />
      <Carousel.Caption>
      <h1 className="clubh1"> NASR</h1>
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={image3} 
        alt="Third slide"
      />
      <Carousel.Caption>
      <h1 className="clubh1"> LAC 1</h1>
       
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src={image4} 
        alt="Third slide"
      />
      <Carousel.Caption>
      <h1 className="clubh1"> MANAR</h1>
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={image5} 
        alt="Third slide"
      />
      <Carousel.Caption>
      <h1 className="clubh1"> ZAHRA</h1>
       
      </Carousel.Caption>
    </Carousel.Item>

  </Carousel>
  </div>
  <div className="granola">
  
  <p style={{color: 'black'}}> You are always welcome</p>
  
      </div>
      <br></br>
  <Link to="/"><Button variant="light">Home</Button></Link>
        </div>
        </div>
    )
}

export default Contact
