import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/moduleReducer";
import  assignmentsReducer from "../Courses/Assignments/assignmentReducer"

const store = configureStore({
  reducer: {
    modulesReducer, assignmentsReducer, 
  }
});


export default store;