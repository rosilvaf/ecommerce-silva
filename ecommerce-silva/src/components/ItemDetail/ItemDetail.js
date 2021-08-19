import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({ title, price, picture, stock, id, category }) => {
  const handleAdd = (count) => {
    console.log(count);
  };

  
  return (
    <Card>
      <Link to={`/${category}/${id}`}>
        <CardBody>
          <CardTitle className="h5">{title}</CardTitle>
          <CardText>${price}</CardText>
          <img src={picture}></img>
          <ItemCount stock={stock} initial={1} onAdd={handleAdd}></ItemCount>
        </CardBody>
      </Link>
    </Card>
  );
};

export default ItemDetail;