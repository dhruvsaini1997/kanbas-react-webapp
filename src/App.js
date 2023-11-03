import logo from "./logo.svg";
import './App.css';
import Kanbas from "./Kanbas";
import HelloWorld from "./Labs/a3/HelloWorld";
import Assignment4 from "./Labs/a4/"
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Assignment3 from "./Labs/a3";
import { Provider } from "react-redux";
import store from "./Labs/store";

function App() {
  const screen = "Labs";
  return (
    <Provider store={store}>
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Kanbas" />} />
          <Route path="/Hello" element={<HelloWorld />} />
          <Route path="/Labs/a3/*" element={<Assignment3 />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/Labs/a4/*" element={<Assignment4/>}/>
          {/* <Route path="/Lectures" element={<StateManagement />} /> */}
        </Routes>
        {/* {screen === "Hello" && <HelloWorld />}
        {screen === "Labs" && <Labs />}
        {screen === "Kanbas" && <Kanbas />} */}
      </div>
    </HashRouter></Provider>
  );
}

export default App;