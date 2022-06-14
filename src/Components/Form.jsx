import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import StepOne from "../Components/Steps/StepOne";
import StepTwo from "../Components/Steps/StepTwo";
import StepThree from "../Components/Steps/StepThree";
import Submission from "../Components/Steps/Submission";
import Invoice from "./Steps/Invoice";

function Form() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    vehicleSelect: "",
    maxPrice: "",
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  switch (step) {
    // Intro
    case 1:
      return (
        <div className="step-container">
          <Container className=" ">
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepOne
                  nextStep={nextStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    // Vehicle Select
    case 2:
      return (
        <div className="step-container">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepTwo
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    // Personal Info
    case 3:
      return (
        <div className="step-container">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepThree
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    // Data Review
    case 4:
      return (
        <div className="step-container">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Submission
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />{" "}
              </Col>
            </Row>
          </Container>
        </div>
      );
    // Invoice Details with print options
    case 5:
      return (
        <div className="step-container">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Invoice values={formData} />{" "}
              </Col>
            </Row>
          </Container>
        </div>
      );
    default:
      return <div className="main-form"></div>;
  }
}

export default Form;
