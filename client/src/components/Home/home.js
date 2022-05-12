import React from 'react';
import Top from './topsection'
import Card from './middlesectioncard'
import Middle from './middlesection'
import Low from './lowersection'

function home() {
  return (<div>
  <div class="image-container">
  <div class="text">GoGym</div>
</div>
<Top/>
<Card/>
<Middle/>
<Low/>
<br></br>
</div>);
}

export default home;
