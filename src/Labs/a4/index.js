import Nav from "../../Nav";
import Add from "./Add";
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariable";
import ChildStateComponent from "./ChildStateComponent";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";

function Assignment4() {
  return (
    <div className="container">
        <Nav/>
        <br/>
      
      <Add a={1} b={2} />
      <br/>
      <EventObject/>
      <br/>
      <ParentStateComponent/>
      <br/>
      <PassingDataOnEvent/>
      <br/>
      <PassingFunctions/>
      <br/>
      <StringStateVariables/>
      <br/>
      <ArrayStateVariable/>
      <br/>
      <BooleanStateVariables/>
      <br/>
      <ChildStateComponent/>
      <br/>
      <ClickEvent/>
      <br/>
      <ObjectStateVariable/>
      <br/>
      <Counter/>
      <br/>
      <DateStateVariable/>

      <br/>
      <ReduxExamples/>

        
      </div>
  );
}
export default Assignment4;