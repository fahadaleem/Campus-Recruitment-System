import React, { useContext, useState } from "react";
import "./global.css";
// import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Form, Button, Alert } from "react-bootstrap";
import { GlobalContext } from "../../context/GlobalContext";
import { Link } from "react-router-dom";
const LoginForm = () => {
  const { handleLoginUser, error } = useContext(GlobalContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
    accountType: "",
  });
  return (
    <div className="login-div">
      <div className="login-container shadow">
        <h1 className="login-heading">Login Your Account!</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleLoginUser(user);
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="shadow-none input-text-field"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              className="shadow-none input-text-field"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Account Type</Form.Label>
            <Form.Select
              aria-label="Default select example"
              className="shadow-none input-form-select"
              onChange={(e) =>
                setUser({ ...user, accountType: e.target.value })
              }
            >
              <option>Open this select menu</option>
              <option value="admin">Admin</option>
              <option value="student">Student</option>
              <option value="company">Company</option>
            </Form.Select>
          </Form.Group>
          <p className="register-text">
            If you don't have an account register{" "}
            <Link to="/signup">here!</Link>
          </p>
          <div className="d-grid">
            <Button
              type="submit"
              size="lg"
              className="submit-btn border-0 shadow-none"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
