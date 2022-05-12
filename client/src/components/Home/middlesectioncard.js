import React from 'react';
import { sports } from './listmiddlesection';
import {Card} from 'react-bootstrap';


function middlesectioncard() {
  return (<div className="middle-card"> {sports.map((el, key) =>( <div>
<Card style={{ width: '18rem' , height: '25rem'  }}  className='cards'>
  <Card.Img variant="top" src={el.image} style={{ width: '18rem' , height: '12rem'  }}/>
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <Card.Text>
    {el.description}
    </Card.Text>
  </Card.Body>
</Card>
</div>))}
  </div>);
}

export default middlesectioncard;
