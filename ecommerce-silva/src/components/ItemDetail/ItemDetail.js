import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

const ItemDetail =({title='',description=''})=>{
    return(
        <Card>
            <CardBody>
                <CardTitle className="h5">{title}</CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    )
}
export default ItemDetail;