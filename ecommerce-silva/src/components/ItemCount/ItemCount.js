import React, { useState , useEffect} from "react";
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

const ItemCount = ({ initial, stock, onAdd =()=>{}}) => {
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
  useEffect(()=>{
    onAdd(count)
  },[count])
  

  return (
    <>
      <Card>
        <CardBody>
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
        </CardBody>
      </Card>
    </>
  );
};

export default ItemCount;

