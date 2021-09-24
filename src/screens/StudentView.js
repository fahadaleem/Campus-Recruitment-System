import React, { useContext } from "react";
import StudentNavbar from "../components/student/StudentNavbar";
import { GlobalContext } from "../context/GlobalContext";
import Login from "./Login";
import { Switch, Route } from "react-router-dom";
import Home from "../components/student/home/Home";
import CreateProfile from "../components/student/createProfile/CreateProfile";
import { StudentProvider } from "../context/StudentContext";
const StudentView = () => {
  const { user } = useContext(GlobalContext);
  return (
    <StudentProvider>
      {user.accountType === "student" ? (
        <>
          <StudentNavbar />
          <Switch>
            <Route exact path="/student/home" component={Home} />
            <Route path="/student/profile" component={CreateProfile} />
          </Switch>
        </>
      ) : (
        <Login />
      )}
    </StudentProvider>
  );
};

export default StudentView;
