import React from "react";
import Item from ".../Item/Itemem/Item";
import ItemListContainer from "../IteamListContainer/ItemListContainer";

const ItemList = ({ items }) => {
 

  return (
    <>
      <div className="d-flex flex-row p-5">
        { items.map((item) => 
       <Item
      key={item.id}
      title={item.title}
      picture={item.picture}
      price={item.price}
      />
      )};
      </div>
    </>
  )};
export default ItemList;