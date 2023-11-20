import { Provider } from "react-redux";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import store from "./store";
import Assignment5 from "./a5";

function Labs() {
   const { pathname } = useLocation();
    return(
       <Provider store={store}>
       <div>
          <Assignment3/>
          <Assignment4/>
          <Assignment5/>
       </div>
       </Provider>
    );
 }
 export default Labs;