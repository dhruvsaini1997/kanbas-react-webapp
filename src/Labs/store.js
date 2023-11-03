import helloReducer from "./a4/ReduxExamples/HelloRedux/helloRedux";
import counter1Reducer from "./a4/ReduxExamples/counters/counter1Reducer";
import counter2Reducer from "./a4/ReduxExamples/counters/counter2Reducer";
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./a4/ReduxExamples/todos/todosReducer";
const store = configureStore({
  reducer: {
    helloReducer,
    counter1Reducer: counter1Reducer,
    counter2Reducer,
    todosReducer,
  },
});

export default store;