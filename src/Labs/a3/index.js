import { Link } from "react-router-dom";
import JavaScript from "./JavaScript";
import Nav from "../../Nav";
import Classes from "./Classes";
import PathParameters from "./PathParameters";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./todo/TodoList";

function Assignment3() {
  return (
    <div className="container">
         <Nav />
      <h1>Assignment 3</h1>
      <br/>
      <TodoList/>
      <br/>
      <ConditionalOutput/>
      <br/>
      <Styles/>
      <br/>
      <Classes/>
      <br/>
      <PathParameters/>
      <br/>
      <JavaScript></JavaScript>
    </div>
  );
}
export default Assignment3;