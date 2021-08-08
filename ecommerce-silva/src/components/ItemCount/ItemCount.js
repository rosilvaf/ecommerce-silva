import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Row,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setInitial] = useState(initial);
  const handleRest = () => {
    if (count > 0) {
      setInitial(count - 1);
    }
  };
  const handleAdd = () => {
    if (count < stock) {
      setInitial(count + 1);
    }
  };

  return (
    <>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Tiger Shirt</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Shirt
          </CardSubtitle>
          <CardText>Add product to cart</CardText>
          <Card>
            <Container>
              <Row>
                <Col>
                  <Button onClick={handleRest}>-</Button>
                </Col>
                <Col>
                  <span>{count}</span>
                </Col>
                <Col>
                  <Button onClick={handleAdd}>+</Button>
                </Col>
              </Row>
            </Container>
          </Card>
          <Button onClick={() => onAdd(count)}>Add to Cart</Button>
        </CardBody>
      </Card>
    </>
  );
};

export default ItemCount;

