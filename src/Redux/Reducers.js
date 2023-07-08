import { createSlice } from "@reduxjs/toolkit";

const initialState = {tasks :[
                              { title: "do my homework", status: false },
                              { title: "runnig", status: false },
                              { title: "eating my dinner", status: false },
                         ],
               }

export const myslices = createSlice({
     name: 'todos',
     initialState,
     reducers :{
          addTask(state,action) {
               if (action.payload.length !== 0) {
                    state.tasks = [...state.tasks,{title: action.payload, status : false}]
                  }
               
          },

          addTask2(state,action) {
               if (action.payload.length !== 0) {
                    state.tasks = [...state.tasks,{title: action.payload, status : false}];
                  }
          },

          deleteTask(state, action) {
               console.log('im workin')
               state.tasks = [...state.tasks.filter((item) => item.title !== action.payload)];
          },

          searchTask(state,action) {
               
               state.tasks= state.tasks.filter((todo) =>
                    todo.title.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()))
          },

          handleToggle(state, action){
               const updatedTodos = state.tasks.map((todo, i) => {
                 if (todo.title === action.payload.title) {
                   return { ...todo, status: !todo.status };
                 } else {
                   return todo;
                 }
               });
               state.tasks= [...updatedTodos];
             }
}
})

export const { addTask,addTask2, deleteTask, searchTask, handleToggle } = myslices.actions
export default myslices.reducer