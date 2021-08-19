import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const Item =({title,picture,price,category})=>{

    
    const handleAdd = (count) =>{
       
        console.log(count)
      
    }

    return(
        <Card>
            <Link to={`/${category}`}>
            <CardBody>
                <CardTitle className="h5">{title}</CardTitle>
                <CardImg className="h-5" src={picture}></CardImg>
                <CardText>${price}</CardText>
            </CardBody>
            <ItemCount stock={5} initial={1} onAdd = {handleAdd}></ItemCount>
            </Link>
        </Card>
    )
}
export default Item;
