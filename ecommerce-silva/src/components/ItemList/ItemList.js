import React from "react";
import Item from "./../Item/Item";

const ItemList = ({ items }) => {
  console.log(items)
  
  return (
    <>
      <div className="d-flex flex-row p-5">
        {items.map((item) => (
          <Item
            key={item.id}
            category={item.category}
            title={item.title}
            picture={item.picture}
            price={item.price}
          />
        ))}
        ;
      </div>
    </>
  );
};
export default ItemList;