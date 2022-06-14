import React from "react";
import { Container, Button } from "react-bootstrap";

const Submission = ({ values, nextStep, prevStep }) => {
  const { firstName, lastName, email, vehicleSelect, maxPrice } = values;
  const handleClick = (e) => {
    e.preventDefault();
    alert("Invoice Submitted");
    nextStep();
  };
  return (
    <div className="submission">
      <Container>
        <h1 className="mb-5">Please verify your order:</h1>

        <p>
          <b>First Name: </b>
          {firstName}
        </p>
        <p>
          <b>Last Name:</b> {lastName}
        </p>
        <p>
          <b>Email:</b> {email}
        </p>
        <p>
          <b>Selected Vehicle:</b> {vehicleSelect}
        </p>
        <p>
          <b>Selected Bid Price:</b> {maxPrice}$
        </p>
        <div className="mt-5">
          <Button className="" variant="primary" onClick={prevStep}>
            Previous
          </Button>
          <Button className="mx-2" onClick={handleClick} variant="primary">
            Confirm Details
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Submission;
