import React from "react";
import { Card, Row } from "reactstrap";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router";

const ItemListContainer = ({ greeting}) => {
  

  return (
    <>
      <Card>{greeting}</Card>
     
      <Row>
        <div className="col-sm-4">
          <ItemList></ItemList>
        </div>
        </Row>
    </>
  );
};
export default ItemListContainer;

