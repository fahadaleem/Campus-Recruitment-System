import React, { useState } from "react";
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

const CreateProfile = () => {
  const [profile, setProfile] = useState({
    name: "",
    fatherName: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    dob: "",
    college: "",
    enrollmentNo: "",
    education: "",
    degree: "",
    currentYear: "",
    skills: [],
    skillName: "",
    cgpa: "",
    linkedIn: "",
    github: "",
    portfolio: "",
    about: "",
  });

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
              <Form.Control
                type="text"
                value={profile.name}
                placeholder="Full name"
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
              />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Father Name</Form.Label>
              <Form.Control
                type="text"
                value={profile.fatherName}
                onChange={(e) =>
                  setProfile({ ...profile, fatherName: e.target.value })
                }
                placeholder="Full name"
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>DOB</Form.Label>
          <Form.Control
            type="date"
            value={profile.dob}
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
            placeholder="Date of Birth"
          />
        </Form.Group>
        <Form.Label>Gender</Form.Label>
        <Form.Select
          className="mb-3"
          value={profile.gender}
          onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
          controlId="formBasicEmail"
        >
          <option>Select Your Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Not Specified">Not Specified</option>
        </Form.Select>
        <Row>
          <Col md>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone No.</Form.Label>
              <Form.Control
                type="text"
                value={profile.phone}
                onChange={(e) =>
                  setProfile({ ...profile, phone: e.target.value })
                }
                placeholder="Full name"
              />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={profile.email}
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
                placeholder="Email"
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            value={profile.address}
            onChange={(e) =>
              setProfile({ ...profile, address: e.target.value })
            }
            type="text"
            placeholder="Address"
          />
        </Form.Group>
        <Row>
          <Col md>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>College Name</Form.Label>
              <Form.Control
                type="text"
                value={profile.college}
                onChange={(e) =>
                  setProfile({ ...profile, college: e.target.value })
                }
                placeholder="College/University Name"
              />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enrollment/Roll No.</Form.Label>
              <Form.Control
                type="text"
                value={profile.enrollmentNo}
                onChange={(e) =>
                  setProfile({ ...profile, enrollmentNo: e.target.value })
                }
                placeholder="Enrollment/Roll No."
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Education Level</Form.Label>
              <Form.Select
                className="mb-3"
                value={profile.education}
                onChange={(e) =>
                  setProfile({ ...profile, education: e.target.value })
                }
                controlId="formBasicEmail"
              >
                <option>Select Education Level</option>
                <option value="Matriculation">Matriculation</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Bachelors">Bachelors</option>
                <option value="Masters">Masters</option>
                <option value="M.Phil">M.Phil</option>
                <option value="Technical Certified">Technical Certified</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group className="mb-3">
              <Form.Label>Degree Name</Form.Label>
              <Form.Select
                className="mb-3"
                value={profile.degree}
                onChange={(e) =>
                  setProfile({ ...profile, degree: e.target.value })
                }
                controlId="formBasicEmail"
              >
                <option>Select Degree</option>
                <option value="B-Tech">B-Tech</option>
                <option value="BS">BS</option>
                <option value="BSc">BSc</option>
                <option value="BBA">BBA</option>
                <option value="BCOM">BCOM</option>
                <option value="BE">BE</option>
                <option value="MS">MS</option>
                <option value="MCS">MCS</option>
                <option value="MA">MA</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md>
            <Form.Group className="mb-3">
              <Form.Label>Your Current Year</Form.Label>
              <Form.Select
                className="mb-3"
                value={profile.currentYear}
                onChange={(e) =>
                  setProfile({ ...profile, currentYear: e.target.value })
                }
                controlId="formBasicEmail"
              >
                <option>Current Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year"> 2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
                <option value="Degree Completed">Degree Completed</option>
                <option value="None">None</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group className="mb-3">
              <Form.Label>Your CGPA</Form.Label>
              <Form.Control
                type="number"
                value={profile.cgpa}
                onChange={(e) =>
                  setProfile({ ...profile, cgpa: e.target.value })
                }
                placeholder="CGPA"
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>
            Skills{" "}
            <span className="skill-message">type your skill and hit enter</span>
          </Form.Label>
          <Form.Control
            type="text"
            value={profile.skillName}
            onChange={(e) =>
              setProfile({ ...profile, skillName: e.target.value })
            }
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                profile.skills.push(profile.skillName);
                setProfile({ ...profile, skillName: "" });
              }
            }}
            placeholder="Skills"
          />
          <div className="skill-set mt-2">
            {profile.skills.map((skill, i) => {
              return (
                <div key={i} className="skill-item">
                  <span className="skill-name">
                    {skill} <button class="remove-skill-btn">X</button>
                  </span>
                </div>
              );
            })}
          </div>
        </Form.Group>
        <Row>
          <Col md>
            <Form.Group className="mb-3">
              <Form.Label>Your LinkedIn Profile</Form.Label>
              <Form.Control
                type="text"
                value={profile.linkedin}
                onChange={(e) =>
                  setProfile({ ...profile, linkedin: e.target.value })
                }
                placeholder="LinkedIn Profile"
              />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group className="mb-3">
              <Form.Label>Your Github Profile</Form.Label>
              <Form.Control
                type="text"
                value={profile.github}
                onChange={(e) =>
                  setProfile({ ...profile, github: e.target.value })
                }
                placeholder="Github Profile"
              />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group className="mb-3">
              <Form.Label>Your Portfolio</Form.Label>
              <Form.Control
                value={profile.portfolio}
                onChange={(e) =>
                  setProfile({ ...profile, portfolio: e.target.value })
                }
                type="text"
                placeholder="Portfolio"
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Tell About Yourself</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            value={profile.about}
            onChange={(e) => setProfile({ ...profile, about: e.target.value })}
            placeholder="Describe yourself"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CreateProfile;
