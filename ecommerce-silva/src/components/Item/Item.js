import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import ItemCount from "../ItemCount/ItemCount";
import { Link ,useParams} from "react-router-dom";

const Item =({title,picture,price,stock,category,id})=>{
  
    const handleAdd = (count) =>{
       
        console.log(count)      
    }
    
    return(
        <Link to={`${category}/${id}`} >
        <Card>
            <CardBody>
                <CardTitle className="h5">{title}</CardTitle>
                <CardImg className="h-5" src={picture}></CardImg>
                <CardText>${price}</CardText>
            </CardBody>
            <ItemCount stock={stock} initial={1} onAdd = {handleAdd}></ItemCount>
        </Card>
        </Link>
    )
}
export default Item;