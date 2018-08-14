import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
// import Carousal from "./components/Carousal";
// import Welcome from "./components/Welcome";
import Homepage from "./pages/Homepage";
import Browsepage from "./pages/Browsepage";


const App = () => (
  <Router>
    <div>
      <Browsepage/>
      {/* <Dashboard/> */}
      {/* <Homepage/> */}
      <Switch>
        {/* <Route exact path="/" component={Homepage} />
        <Route exact path="/loggedin" component={Dashboard} />
   */}
      </Switch>
    </div>
  </Router>
);

export default App;
