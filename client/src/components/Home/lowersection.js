import React from 'react';
import image3 from './images/booster.png';
import image4 from './images/Compound.jpg';
import image5 from './images/fitness.jpg';
import image8 from './images/workout-timed.jpg';
import image9 from './images/exercice.png';
import image10 from './images/04run-gym-.jpg';



function lowersection() {
  return (<div>
  <div className="lowerimg" >


<img  className="lowimg" src={image3} width='350' height='200'/>
<img  className="lowimg" src={image4}  width='350' height='200'/>
<img   className="lowimg" src={image5} width='350' height='200' />

<img  className="lowimg" src={image9} width='350' height='200' />
 <img  className="lowimg" src={image8} width='350' height='200' />
 <img className="lowimg"  src={image10} width='350' height='200' />
</div>
<div className="middlepart">
<h1>
Such a pleasure!
</h1>
<span>Enjoy a pleasant setting, {"\n"} airy and air-conditioned spaces, state-of-the-art equipment and qualified coaches to supervise, motivate and support you. </span>
Gosports Gym is a fitness center that offers a variety of classes in a fitness area for adults, teens and children. You will find everything you need in our weight training and cardio training areas with quality equipment.
</div>
<div className="lowercols">
<p className="lowerhalfcols">To maintain your weight: Work your way up to 150 minutes a week of moderate-intensity aerobic activity (for example, 30 minutes a day, 5 days a week). Strong scientific evidence shows that physical activity can help you maintain your weight over time. </p>
<p className="lowerhalfcols">
<img src="https://www.codsils.com/wp-content/uploads/2019/03/Blog-2-new.jpg" className="lowerSectionImg" ></img>
</p>
</div>
<div className="lowercols">
<p className="lowerhalfcolsTwo">
<img src="https://static9.depositphotos.com/1028911/1113/i/600/depositphotos_11133731-stock-photo-diet-concept.jpg" className="lowerSectionImgTwo" ></img>
</p>
<p className="lowerhalfcols">To lose weight and keep it off: You will need a high amount of physical activity unless you also adjust your diet and reduce the amount of calories you’re eating and drinking. Getting to and staying at a healthy weight requires both regular physical activity and a healthy eating plan.</p>
</div>

</div>)
}

export default lowersection;
