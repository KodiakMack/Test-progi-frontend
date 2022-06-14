import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Invoice({ values }) {
  const { firstName, lastName, email, vehicleSelect, maxPrice } = values;
  let totalPrice = { maxPrice };

  return (
    <div className="invoice">
      <Container>
        <p>invoice goes here</p>
      </Container>
    </div>
  );
}

export default Invoice;
