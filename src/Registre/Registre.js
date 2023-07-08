import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Registre = ({onRegistre}) => {

  const[newName, setNewName] = useState('');
  const[newEmail, setNewEmail] = useState('');
  const[newPassword, setNewPassword] = useState('');

  const isUserValid =(user) => {
     return(
          newName &&
          newEmail &&
          newPassword
     )
  }

  const addNewUsers = (e) => {
     const user ={name:newName, email:newEmail, password:newPassword};
     if (isUserValid(user)){
          onRegistre(user);
          setNewName('');
          setNewEmail('');
          setNewPassword('');
     }

  }

  return (
     <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-50-l mw6  shadow-5 center">
     <main className="pa4 black-80">
     <div className="measure">
     <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f1 fw6 ph0 mh0">Registeration</legend>
          <div className="mt3">
          <label className="db fw6 lh-copy f5" htmlFor="name">name</label>
          <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}/>
          </div>
          <div className="mt3">
          <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
          <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}/>
          </div>
          <div className="mv3">
          <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
          <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}/>
          </div>
     </fieldset>
     <div className="">
          <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"
          onClick={addNewUsers}/>
          <Link to="/"><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib ml3" type="submit" value="Sign in"/></Link>
     </div>
     </div>
     </main>
     </article>
  )
}

export default Registre