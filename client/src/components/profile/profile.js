import React from 'react'
import {useSelector } from 'react-redux'
import Admin from './admin'
import Member from './member'
import Coach from './coach'


function Profile() {
 let current_user = JSON.parse(localStorage.getItem('current_user'))
 
  return (
    <div>
   { 
    current_user?.role[0].post == 'admin' ? 
    <Admin />:

     current_user?.role[0].post == 'member' ? 
    
    <Member/>
   
    :
    <Coach/> 
    }
    
    {/*current_user?.role[0].post = 'admin'? 

    <Admin/> 

    : 

    current_user?.role[0].post = 'member' 

    ?  

    <Member/> 

    : 

    <Coach/> */}
    
    </div>
  )
}

export default Profile