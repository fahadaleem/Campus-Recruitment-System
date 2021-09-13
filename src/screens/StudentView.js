import React, {useContext} from "react";
import StudentNavbar from "../components/student/StudentNavbar";
import {GlobalContext} from "../context/GlobalContext";
import Login from "./Login";
import {Switch, Route} from "react-router-dom";
import Home from "../components/student/home/Home"
const StudentView =()=>{
    const {user} =  useContext(GlobalContext);
    return (
        <div>
            {user.accountType === "student" ? <>
            <StudentNavbar/>
            <Switch>
                <Route path="/student/home" render={Home}/>
                </Switch>

            </> : <Login />}
        </div>
    )
}

export default StudentView