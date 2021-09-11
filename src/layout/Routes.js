import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../screens/Home";

// import Adminview, company view and student view from screens folder
import AdminView from "../screens/AdminView";
import CompanyView from "../screens/CompanyView";
import StudentView from "../screens/StudentView";

// import Login component from screens folder
import Login from "../screens/Login";
// import Signup component from screens folder
import Signup from "../screens/Signup";


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/admin" component={AdminView} />
      <Route exact path="/company" component={CompanyView} />
      <Route exact path="/student" component={StudentView} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </Switch>
  );
};

export default Routes;
