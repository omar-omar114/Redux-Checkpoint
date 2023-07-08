import React from 'react'
import { Link} from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signin = ({myList}) => {

  const navigate = useNavigate();  
  const [myEmail, setMyEmail] = useState('');
  const [myPassword, setPassword] = useState('');

  
  const verifyEntries = () => {
     for(var i=0; i<myList.length; i++){
          if(myEmail === myList[i].email && myPassword === myList[i].password){
               navigate('/Todo');
               break;
          
          }
     }    
  }
    
  return (
     <div>
          <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-50-l mw6  shadow-5 center">
          <main className="pa4 black-80">
          <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
               <legend className="f1 fw6 ph0 mh0">Sign In</legend>
               <div className="mt3">
               <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
               <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"
               onChange={(e) => setMyEmail(e.target.value)}/>
               </div>
               <div className="mv3">
               <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
               <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"
               onChange={(e) => setPassword(e.target.value)}/>
               </div>
          </fieldset>
          <div className="">
               <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"
               onClick={verifyEntries}/>
          </div>
          <div className="lh-copy mt3 pointer">
               <Link to="/Registre"><p className="f6 link dim black db">Register</p></Link>
          </div>
          </div>
          </main>
          </article>
     </div>
     
  )
}

export default Signin