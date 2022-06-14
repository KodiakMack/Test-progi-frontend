import React, { useState } from "react";
import { Form, Card, Button, Image, Container } from "react-bootstrap";
import validator from "validator";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

const StepOne = ({ nextStep, handleFormData, values, prevStep }) => {
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();
    // Validation parameters for radio buttons ? Check NPM VALIDATOR Docs..
    if (validator.isEmpty(values.maxPrice)) {
      setError(true);
    } else {
      console.log(values);
      nextStep();
    }
  };

  return (
    <div>
      <Container className="d-flex flex-column align-items-center">
        <h1 className="mb-5">Select your desired vehicle</h1>
        <Form onSubmit={submitFormData}>
          <ToggleButtonGroup
            style={{ border: error ? "2px solid red" : "" }}
            className="mb-5"
            type="radio"
            name="options"
            defaultValue={[1]}
          >
            <ToggleButton
              className="hl-toggle"
              id="tbg-radio-1"
              value={"Honda Civic 2020"}
              defaultValue={values.vehicleSelect}
              type="radio"
              onChange={handleFormData("vehicleSelect")}
            >
              <Image className="vehicle-img" src={pic1} />
              Honda Civic 2020
            </ToggleButton>

            <ToggleButton
              id="tbg-radio-2"
              value={"Ford F150 2017"}
              defaultValue={values.vehicleSelect}
              type="radio"
              onChange={handleFormData("vehicleSelect")}
            >
              <Image className="vehicle-img" src={pic2} />
              Ford F150 2017
            </ToggleButton>

            <ToggleButton
              id="tbg-radio-3"
              value={"Kia Rio 2015"}
              defaultValue={values.vehicleSelect}
              type="radio"
              onChange={handleFormData("vehicleSelect")}
            >
              <Image className="vehicle-img" src={pic3} />
              Kia Rio 2015
            </ToggleButton>
          </ToggleButtonGroup>

          <div />
          {/* maxprice */}

          <Form.Group className="mb-3">
            <Form.Label>Your maximum bid price</Form.Label>
            <Form.Control
              className="w-25"
              style={{ border: error ? "2px solid red" : "" }}
              name="maxPrice"
              defaultValue={values.maxPrice}
              type="number"
              step="any"
              placeholder="Maximum Bid Price"
              onChange={handleFormData("maxPrice")}
            />
            {error ? (
              <Form.Text style={{ color: "red" }}>
                This is a required field
              </Form.Text>
            ) : (
              ""
            )}
          </Form.Group>
          {/* maxprice end */}
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

export default StepOne;
