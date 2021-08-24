import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "./../Item/Item";
import data from "../../data/data";

export default function ItemList() {
  const [value, setValue] = useState([]);
  const arr = [];
  useEffect(() => {
    data.forEach((item) => {
      arr.push(
        <Item
          key={item.id}
          id={item.id}
          category={item.category_id}
          title={item.title}
          picture={item.image}
          price={item.price}
          stock={item.stock}
        />
      );
    });
    setValue(arr);

  }, []);

  return <>{value}</>;
}