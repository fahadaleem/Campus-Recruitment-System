import React, {useState} from "react";
import "../stylesheets/CreateProfile.css";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  Container,
  Badge,
  Col,
  Row,
} from "react-bootstrap";


const HelloWorld = ()=>{
   
    return (
        <h1>Hello</h1>
    )
}

const CreateProfile = () =>{
   
    // const [profile, setProfile] = useState({
    //     name: "",
    //     email: "",
    //     phone: "",
    //     address: "",
    //     dob: "",
    //     college: "",
    //     enrollmentNo:"",
    //     education:"",
    //     degree:"",
    //     year:"",
    //     cgpa:"",
    //     skills:[],
    //     linkedIn:"",
    //     github:"",
    //     portfolio:"",
    //     about:"",
    // })
   
  return (
      <Container>
        <h1 className="top-heading">
          Create your profile and land to your dream job!
        </h1>
        <Form>
          <Row>
            <Col md>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Full name" />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Father Name</Form.Label>
                <Form.Control type="text" placeholder="Full name" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>DOB</Form.Label>
            <Form.Control type="date" placeholder="Full name" />
          </Form.Group>
          <Row>
            <Col md>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone No.</Form.Label>
                <Form.Control type="text" placeholder="Full name" />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Full name" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control as="textarea" type="text" placeholder="Full name" />
          </Form.Group>
          <Row>
            <Col md>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>College Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="College/University Name"
                />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enrollment/Roll No.</Form.Label>
                <Form.Control type="text" placeholder="Enrollment/Roll No." />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Education Level</Form.Label>
                <Form.Select className="mb-3" controlId="formBasicEmail">
                  <option>Matriculation</option>
                  <option>Intermediate</option>
                  <option>Bachelors</option>
                  <option>Masters</option>
                  <option>M.Phil</option>
                  <option>Technical Certification</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3">
                <Form.Label>Degree Name</Form.Label>
                <Form.Select className="mb-3" controlId="formBasicEmail">
                  <option>B-Tech</option>
                  <option>BS</option>
                  <option>BSc</option>
                  <option>BBA</option>
                  <option>BCOM</option>
                  <option>BE</option>
                  <option>MS</option>
                  <option>MCS</option>
                  <option>MA</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md>
              <Form.Group className="mb-3">
                <Form.Label>Your Current Year</Form.Label>
                <Form.Select className="mb-3" controlId="formBasicEmail">
                  <option>1st Year</option>
                  <option>2nd Year</option>
                  <option>3rd Year</option>
                  <option>4th Year</option>
                  <option>Degree Completed</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3">
                <Form.Label>Your CGPA</Form.Label>
                <Form.Control type="number" placeholder="CGPA" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>
              Skills{" "}
              <span className="skill-message">
                type your skill and hit enter
              </span>
            </Form.Label>
            <Form.Control type="text" placeholder="Skills" />
            <div className="skill-set mt-2">
              <div className="skill-item">
                <span className="skill-name">
                  HTML <button class="remove-skill-btn">X</button>{" "}
                </span>
              </div>
              <div className="skill-item">
                <span className="skill-name">
                  JavaScript <button class="remove-skill-btn">X</button>{" "}
                </span>
              </div>
              <div className="skill-item">
                <span className="skill-name">
                  HTML <button class="remove-skill-btn">X</button>{" "}
                </span>
              </div>
            </div>
          </Form.Group>
          <Row>
            <Col md>
              <Form.Group className="mb-3">
                <Form.Label>Your LinkedIn Profile</Form.Label>
                <Form.Control type="text" placeholder="LinkedIn Profile" />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3">
                <Form.Label>Your Github Profile</Form.Label>
                <Form.Control type="text" placeholder="Github Profile" />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3">
                <Form.Label>Your Portfolio</Form.Label>
                <Form.Control type="text" placeholder="Portfolio" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tell About Yourself</Form.Label>
            <Form.Control as="textarea" type="text" placeholder="Describe yourself" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
  );
};

export default CreateProfile;
