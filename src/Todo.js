import { useState } from "react";
import "./Todo.css";
import { useSelector, useDispatch } from 'react-redux'
import { addTask, addTask2, deleteTask, searchTask, handleToggle } from "./Redux/Reducers";
//import { Link } from "react-router-dom";

const Todo = () => {

  const dispatch = useDispatch();
  const showtasks= useSelector(state => state.todos.tasks)

  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
 


  return (
      <div className="pa3 pa5-ns">
          <div className="pa4 black-80">
               <div>
                     <p className="f3 b db mb2">Add a task</p>
                    <div className="add-btn">
                         
                         <div className="input-add">
                         <input id="name" placeholder="What do you need to do today?" className="input-reset ba b--black-20 pa2 db w-100" type="text" aria-describedby="name-desc"
                         value={inputValue}
                         onChange={(e) => setInputValue(e.target.value)}
                         onKeyPress={(event) => {if(event.key === 'Enter'){
                                               dispatch(addTask2(inputValue)); setInputValue("")}}
                                                }/>
                         </div>
                         <div className="div-btn-add"><button className="f5 link dim white bg-dark-gray btn-add" onClick={() =>{ dispatch(addTask(inputValue));
                                                setInputValue("");}}>Add items</button></div>
                    </div>

                    <div className="mt3">
                         <label htmlFor="name" className="f3 b db mb2">Search for a task</label>
                         <input id="name" placeholder="search for a task" className="input-reset ba b--black-20 pa2 mb2 db w-100 di" type="text" aria-describedby="name-desc"
                         value={searchValue}
                         onChange={(e) => {setSearchValue(e.target.value) ; 
                                            dispatch(searchTask(searchValue))}}/>
                    </div>
               </div>
               
               

               
          </div>
     
          <ul className="list pl0 measure center">
           {showtasks.map((item, indice) => (
                    <div  key={indice} className="list-items ba bl-0 bt-0 br-0 b--dotted b--black-30">
                         <input type="checkbox" onClick={() => dispatch(handleToggle(item))}/>
                         <li className={`li-deco ${item.status ? "complete" : ""}`}
                             >
                              {item.title}
                         </li>
                         
                         <button className="btn-delete" onClick={() => dispatch(deleteTask(item.title))}>
                              <i className="fa-solid fa-trash" ></i>
                         </button>
                    </div>
                   
                    )
                    )}
          </ul>
     </div>
    
  );
};

export default Todo;
