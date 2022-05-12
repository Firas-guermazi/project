import React from 'react';
import logo from './Capture.PNG'
import {Card, Button} from 'react-bootstrap';

function Footer() {
  return( <div className="footer">
<div className="hours"> <p>Working hours:</p>
<ul>
    <li>Monday to Friday 07:00 - 22:00</li>
    <li>Weekend 07:00 - 18:00 </li>
    
</ul>

</div>
<img  src={logo} width="120" height="80" className="footerlogo"></img>
<div> <p>Follow us</p>
<div className="socialmedia">
<a href="https://www.facebook.com/gymparktunisia"><Button className='socialmedia' variant="light"><i class="fa fa-facebook-f"></i></Button></a>
{" "}
<a href="https://www.instagram.com/gym_park_/?hl=fr"><Button className='socialmedia' variant="light"><i class="fa fa-instagram"></i></Button></a>


</div>

</div>

  </div>
  )
}

export default Footer;
