import React,{ useState } from 'react'
import {Form, Button, Alert} from 'react-bootstrap'
import {useDispatch} from "react-redux"
import {signUp} from '../../redux/action/action'
import {Link} from 'react-router-dom'
function Register() {
  
  const [fullname, setFullname]=useState('')
  const [email, setEmail]=useState('')
  const [age, setAge]=useState(0)
  const [password, setPassword]=useState('')
  const [role, setRole]=useState('')
  const dispatch =useDispatch();
  const sendsignUp = () =>{
    dispatch(signUp({fullname, email, age, password, role}))
    alert('Registred successfully!');
  }
  return (
    <div className="allcourses">
    
     <div className="middlepart">  <h1>CREATE YOUR ACCOUNT</h1></div>
     <div className="register">
      <Form.Label htmlFor="inputPassword5"><h5>Name</h5></Form.Label>
      <Form.Control    type="text"   id="name" onChange={(e)=>setFullname(e.target.value)} />
      <Form.Label htmlFor="inputPassword5"><h5>Email</h5></Form.Label>
      <Form.Control    type="text"   id="email"  onChange={(e)=>setEmail(e.target.value)}/>
      <Form.Label htmlFor="inputPassword5"><h5>Password</h5></Form.Label>
      <Form.Control    type='password'   id="Password" onChange={(e)=>setPassword(e.target.value)} />
      <Form.Label htmlFor="inputPassword5"><h5>Age</h5></Form.Label>
      <Form.Control    type="number"   id="age" onChange={(e)=>setAge(e.target.value)} />
      <br></br>
      {/* <Form.Label htmlFor="inputPassword5"><h5>Role</h5></Form.Label>
      <Form.Control    type="text"   id="role" onChange={(e)=>setRole(e.target.value)} /> */}
      <Form.Select onChange={(e)=>setRole(e.target.value)} aria-label="Default select example">
  <option>ROLE</option>
  <option value='member'>member</option>
  <option value='coach'>coach</option>
</Form.Select>
  <br></br>
  {/* <Form.Select aria-label="Default select example">
  <option>member/coach position</option>
  <option value="High">coach</option>
  <option value="Medium-high">member</option>

</Form.Select> */}
<br></br>
{/* <input className= 'btn btn-primary' defaultValue='Submit' onClick={sendsignUp}></input> */}
      <Button onClick={sendsignUp}><Link style={{textDecoration: 'none'}} to={'/signin'} className='offerlink'>SUBMIT </Link></Button>
      <div> not a member?  </div>
 </div>
 </div>
  )
}

export default Register