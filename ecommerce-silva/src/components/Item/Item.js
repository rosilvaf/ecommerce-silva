import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

const Item =({title,picture,price})=>{
    return(
        <Card>
            <CardBody>
                <CardTitle className="h5">{title}</CardTitle>
                <CardImg className="h-5" src={picture}></CardImg>
                <CardText>${price}</CardText>
            </CardBody>
        </Card>
    )
}
export default Item;