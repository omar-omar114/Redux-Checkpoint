

import './App.css';
import Registre from './Registre/Registre';
import Signin from './Signin/Signin';
import Todo from './Todo';
import 'tachyons';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState } from 'react';



function App() {

const [myList, setMyList]=useState([{name: "omar",email: "dar.omar@gmail.com",password: '1111'}]);

const addUsers = (user) => {
  setMyList([...myList,user]);
}



  return (
    <div>
      <BrowserRouter>

      <Routes>
        <Route path='/' element={<Signin myList={myList} onAddUser={addUsers}/>}/>
        <Route path='Registre' element={<Registre onRegistre={addUsers}/>}/>
        <Route path='Todo' element={<Todo/>}/>
      </Routes>
      </BrowserRouter>
    </div>
     
  );
}

export default App;
