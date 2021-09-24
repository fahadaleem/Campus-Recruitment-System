import React, { useContext, useEffect } from "react";
import "../stylesheets/CreateProfile.css";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { StudentContext } from "../../../context/StudentContext";

const CreateProfile = () => {
  // const {} = useContext(StudentContext);
  const {
    handleSaveStudentProfile,
    userProfile,
    handleGetUserProfile,
    handleSetProfile: setProfile,
  } = useContext(StudentContext);

  useEffect(() => {
    handleGetUserProfile();
  }, []);

  return (
    <>
      <Container>
        <h1 className="top-heading">
          Create your profile and land to your dream job!
        </h1>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleSaveStudentProfile(userProfile);
          }}
        >
          <Row>
            <Col md>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  value={userProfile.name || ""}
                  placeholder="Full name"
                  onChange={(e) =>
                    setProfile({ ...userProfile, name: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Father Name</Form.Label>
                <Form.Control
                  type="text"
                  value={userProfile.fatherName || ""}
                  onChange={(e) =>
                    setProfile({ ...userProfile, fatherName: e.target.value })
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
              value={userProfile.dob || ""}
              onChange={(e) =>
                setProfile({ ...userProfile, dob: e.target.value })
              }
              placeholder="Date of Birth"
            />
          </Form.Group>
          <Form.Label>Gender</Form.Label>
          <Form.Select
            className="mb-3"
            value={userProfile.gender || ""}
            onChange={(e) =>
              setProfile({ ...userProfile, gender: e.target.value })
            }
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
                  value={userProfile.phone || ""}
                  onChange={(e) =>
                    setProfile({ ...userProfile, phone: e.target.value })
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
                  value={userProfile.email || ""}
                  onChange={(e) =>
                    setProfile({ ...userProfile, email: e.target.value })
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
              value={userProfile.address || ""}
              onChange={(e) =>
                setProfile({ ...userProfile, address: e.target.value })
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
                  value={userProfile.college || ""}
                  onChange={(e) =>
                    setProfile({ ...userProfile, college: e.target.value })
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
                  value={userProfile.enrollmentNo || ""}
                  onChange={(e) =>
                    setProfile({ ...userProfile, enrollmentNo: e.target.value })
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
                  value={userProfile.education || ""}
                  onChange={(e) =>
                    setProfile({ ...userProfile, education: e.target.value })
                  }
                  controlId="formBasicEmail"
                >
                  <option>Select Education Level</option>
                  <option value="Matriculation">Matriculation</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Bachelors">Bachelors</option>
                  <option value="Masters">Masters</option>
                  <option value="M.Phil">M.Phil</option>
                  <option value="Technical Certified">
                    Technical Certified
                  </option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3">
                <Form.Label>Degree Name</Form.Label>
                <Form.Select
                  className="mb-3"
                  value={userProfile.degree || ""}
                  onChange={(e) =>
                    setProfile({ ...userProfile, degree: e.target.value })
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
                  value={userProfile.currentYear || ""}
                  onChange={(e) =>
                    setProfile({ ...userProfile, currentYear: e.target.value })
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
                  value={userProfile.cgpa || ""}
                  onChange={(e) =>
                    setProfile({ ...userProfile, cgpa: e.target.value })
                  }
                  placeholder="CGPA"
                />
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
            <Form.Control
              type="text"
              value={userProfile.skillName || ""}
              onChange={(e) =>
                setProfile({ ...userProfile, skillName: e.target.value })
              }
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  userProfile.skills.push(userProfile.skillName);
                  setProfile({ ...userProfile, skillName: "" });
                }
              }}
              placeholder="Skills"
            />
            <div className="skill-set mt-2">
              {userProfile.skills &&
                userProfile.skills.map((skill, i) => {
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
                  value={userProfile.linkedin || ""}
                  onChange={(e) =>
                    setProfile({ ...userProfile, linkedin: e.target.value })
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
                  value={userProfile.github || ""}
                  onChange={(e) =>
                    setProfile({ ...userProfile, github: e.target.value })
                  }
                  placeholder="Github Profile"
                />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3">
                <Form.Label>Your Portfolio</Form.Label>
                <Form.Control
                  value={userProfile.portfolio || ""}
                  onChange={(e) =>
                    setProfile({ ...userProfile, portfolio: e.target.value })
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
              value={userProfile.about || ""}
              onChange={(e) =>
                setProfile({ ...userProfile, about: e.target.value })
              }
              placeholder="Describe yourself"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      )
    </>
  );
};

export default CreateProfile;
