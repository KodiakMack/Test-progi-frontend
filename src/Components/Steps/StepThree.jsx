import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import validator from "validator";

const StepThree = ({ prevStep, nextStep, handleFormData, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();

    if (
      validator.isEmpty(values.firstName) ||
      validator.isEmpty(values.lastName) ||
      validator.isEmpty(values.email)
    ) {
      setError(true);
    } else {
      console.log(values);
      nextStep();
    }
  };

  return (
    <div className=" ">
      <Container>
        <Form onSubmit={submitFormData}>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              className="w-50"
              style={{ border: error ? "2px solid red" : "" }}
              name="firstName"
              defaultValue={values.firstName}
              type="text"
              placeholder="First Name"
              onChange={handleFormData("firstName")}
            />
            {error ? (
              <Form.Text style={{ color: "red" }}>
                This is a required field
              </Form.Text>
            ) : (
              ""
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              className="w-50"
              style={{ border: error ? "2px solid red" : "" }}
              name="lastName"
              defaultValue={values.lastName}
              type="text"
              placeholder="Last Name"
              onChange={handleFormData("lastName")}
            />
            {error ? (
              <Form.Text style={{ color: "red" }}>
                This is a required field
              </Form.Text>
            ) : (
              ""
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              className="w-50"
              style={{ border: error ? "2px solid red" : "" }}
              type="email"
              placeholder="email"
              onChange={handleFormData("email")}
            />
            {error ? (
              <Form.Text style={{ color: "red" }}>
                This is a required field
              </Form.Text>
            ) : (
              ""
            )}
          </Form.Group>
          <div className="mt-5">
            <Button className="" variant="primary" onClick={prevStep}>
              Previous
            </Button>
            <Button className="mx-2" variant="primary" type="submit">
              Continue
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default StepThree;
