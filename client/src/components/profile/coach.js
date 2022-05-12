import React from 'react'
import coach from './img/coach.JPG'


function CoachProfile() {
  return (
    <div>
   
    <div className="middlepart">

  {/* <img src='https://images-platform.99static.com/zZvvxqJQYxYHrINDphE_C3vIn8g=/0x0:1200x1200/500x500/top/smart/99designs-contests-attachments/88/88415/attachment_88415434' className='adminlogo' />
  */}
  <h3>
  Welcome to your profile
</h3>
</div>
<br></br>

<div className='coachimages'>
<img src='https://ad962edbae8ba7b03b7f-d10007df79b5b7a4e475a291e50a08cf.ssl.cf3.rackcdn.com/bp-coach-sportif/business-plan-coach-sportif.jpg' style={{width: '300px', height: '200px'}} />
<img src='https://www.ownsport.fr/blog/wp-content/uploads/2018/01/marche-coach-sportif-1024x637.jpg' style={{width: '300px', height: '200px'}} />
<img src='https://www.experts-et-decideurs.fr/wp-content/uploads/2016/03/Coach-sportif-entreprise.jpg' style={{width: '300px', height: '200px'}} />
<img src='https://www.lagazettedescommunes.com/wp-content/uploads/2020/02/coach-sportif.jpg' style={{width: '300px', height: '200px'}} />

</div>
<br></br>
<h4 style={{color:'darkblue'}}> Your schedule for today</h4>
<br></br>
<table id="customers">
  <tr>
  <th className="tableHead">WEEKS/DAYS</th>
    <th className="tableHead">MONDAY</th>
    <th className="tableHead">TUESDAY</th>
    <th className="tableHead">WEDNESDAY</th>
    <th className="tableHead">THURSDAY</th>
    <th className="tableHead">FRIDAY</th>
    <th className="tableHead">SATURDAY</th>
    <th className="tableHead">SUNDAY</th>
  </tr>
  <tr>
    <td>09H-10H</td>
    <td>-</td>
    <td>RPM</td>
    <td>-</td>
    <td>-</td>
    <td>BODY ATTAQUE</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>10h-11h</td>
    <td>-</td>
    <td>-</td>
    <td>BODY ATTAQUE</td>
    <td>-</td>
    <td>GRIT</td>
    <td>-</td>
    <td>RPM</td>
  </tr>
  <br></br>
  <tr>
    <td>12H-13H</td>
    <td>BODY ATTAQUE</td>
    <td>RPM</td>
    <td>-</td>
    <td>-</td>
    <td>GRIT</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>13H-14H</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <br></br>
  <tr>
    <td>17H-18H</td>
    <td>-</td>
    <td>GRIT</td>
    <td>-</td>
    <td>-</td>
    <td>BODY ATTAQUE</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>18H-19H</td>
    <td>-</td>
    <td>RPM</td>
    <td>BODY ATTAQUE</td>
    <td>-</td>
    <td>GRIT</td>
    <td>-</td>
    <td>-</td>
  </tr>
  
</table>
<br></br>


<div> <img src={coach} width="200" height="200" ></img></div>

<p className="granola"> Fitness is not about being better than someone else. It’s about being better than you used to be!</p>
<br></br>
   </div>
  )
}

export default CoachProfile