import Nav from "../../Nav";
import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";

function Assignment5() {
    return (
      
        <div className="container">
        <Nav/>
        <br/>
        <h1>Assignment 5</h1>
        <a href="https://kanbas-node-server-app-ds-527a75a57960.herokuapp.com/a5/welcome"
           className="list-group-item">
          Welcome
        </a>

        <EncodingParametersInURLs/>

        <WorkingWithObjects/>

        <WorkingWithArrays/>
      </div>
    );
  }
  export default Assignment5;