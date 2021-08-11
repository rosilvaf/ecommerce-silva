import React from 'react';
import ItemList from '../Item/ItemList';

const ItemListContainer = ({greeting}) => {
    return (
        <>
            <h2>{greeting}</h2>
            <ItemList></ItemList>
        </>
    )
}
export default ItemListContainer;
