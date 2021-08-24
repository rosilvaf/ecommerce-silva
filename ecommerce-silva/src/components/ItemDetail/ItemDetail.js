import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardText, CardTitle, Button } from "reactstrap";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({ title, price, picture, stock, id, category ,seller,condition}) => {
  const [itemCount,setItemCount]=useState()
  const [itemCountFinal,setItemCountFinal]=useState(true)
  const [buyButtonVisibility,setBuyButtonVisibility]= useState(true)

  const onAdd = (count) => {
    setItemCount(count);
  };
  
  const onAddtoCart = ()=>{
    setItemCountFinal(false)
    setBuyButtonVisibility(false)
  }

  const finishBuy = () =>{
    
    console.log('finalice compra')
  }

  return (
    <Card>
      <Link to={`/${category}/${id}`}>
        <CardBody>
          <CardTitle className="h5">{title}</CardTitle>
          <CardText>${price}</CardText>
          <CardText>{seller}</CardText>
          <CardText>{condition}</CardText>
          <img src={picture}></img>
         {itemCountFinal && <ItemCount stock={stock} initial={1} onAdd={onAdd}></ItemCount>} 
       { buyButtonVisibility && <Button onClick={onAddtoCart}>Add to Cart</Button>}
        {!buyButtonVisibility && <Button onClick={finishBuy}>Finish the buy</Button>}
        </CardBody>
      </Link>
    </Card>
  );
};

export default ItemDetail;