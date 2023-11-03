import React from "react";
import HelloRedux from "./HelloRedux";
import TodoList from "../../a4/ReduxExamples/todos/TodoList";
import Counter1 from "./counters/Counter1";
import Counter2 from "./counters/Counter2";


const ReduxExamples = () => {
  return (
    <div>
      <h2>Redux Examples</h2>
      <TodoList />
      <Counter1/>
      <Counter2 />
      <HelloRedux />
    </div>
  );
};

export default ReduxExamples;