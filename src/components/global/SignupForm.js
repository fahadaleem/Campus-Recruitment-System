import React, { useContext, useState } from "react";
import "./global.css";
// import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Form, Button, Alert } from "react-bootstrap";
import { GlobalContext } from "../../context/GlobalContext";
import { Link } from "react-router-dom";
const SignupForm = () => {
  const { handleSignupUser, error } = useContext(GlobalContext);
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    accountType: "",
  });
  return (
    <div className="login-div">
      <div className="login-container shadow">
        <h1 className="login-heading">Create Your Account!</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSignupUser(user);
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter full name"
              className="shadow-none"
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="shadow-none"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              className="shadow-none"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Account Type</Form.Label>
            <Form.Select
              aria-label="Default select example"
              className="shadow-none"
              value={user.accountType}
              onChange={(e) =>
                setUser({ ...user, accountType: e.target.value })
              }
            >
              <option>Open this select menu</option>
              <option value="student">Student</option>
              <option value="company">Company</option>
            </Form.Select>
          </Form.Group>
          <p className="register-text">
            If you don't have an account register <Link to="/login">here!</Link>
          </p>
          <div className="d-grid">
            <Button
              type="submit"
              size="lg"
              className="submit-btn border-0 shadow-none"
            >
              Signup
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
