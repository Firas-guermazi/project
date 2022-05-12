import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap'
import {useDispatch} from "react-redux"
import {signIn} from '../../redux/action/action'
import {Link} from 'react-router-dom'

function Login() {
const dispatch =useDispatch();
const [password, setPassword]=useState('')
const [email, setEmail]=useState('')
const history =useHistory()
const submit = ()=>{
dispatch(signIn({email, password}, history))
setTimeout(() => {
window.location.reload();
}, 10000);
}

return (
<div className='allcourses'>
<div className="middlepart">  <h1>LOGIN</h1></div>
<div >
<div className='register'>
<Form >
<Form.Group >
    <Form.Label htmlFor="inputPassword5">Email</Form.Label>
    <Form.Control    type="text"   id="email"  onChange={(e)=>setEmail(e.target.value)}/>
    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
    <Form.Control    type='password'   id="Password" onChange={(e)=>setPassword(e.target.value)} />
    </Form.Group>
</Form>
    <Button onClick={submit}><Link to={'/Profile'} className='offerlink' style={{textDecoration: 'none'}}  >SUBMIT</Link></Button>
    {/* <input className= 'btn btn-primary' defaultValue='Submit' onClick={submit}></input> */}
<div> Not a member? <Link to={'/register'} style={{textDecoration: 'none', color:"blue"}}  className='offerlink'>REGISTER</Link> </div>
    </div>
</div>
</div> 
)
}

export default Login