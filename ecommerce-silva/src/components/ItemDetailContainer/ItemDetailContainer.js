import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./../ItemDetail/ItemDetail"
import data from "../../data/data";


const ItemDetailContainer = () => {
  let {category,id}=useParams()
  console.log(category)
  console.log(id)
    
  const [items, setItems] = useState([]);
  const getProducts = () => {
    const getList = (id = null) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const product = data.find((product) => product.id === id);
          if (product != null) resolve(product);
          reject({
            status: 404,
          });
        }, 2000);
      });
    };

    const myPromise = new Promise(async (resolve, reject) => {
      const product = await getList(id).catch((err) => reject(err));
    
      product ? resolve(product) : console.log("not product");
    });

    myPromise
      .then((result) => setItems(result))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getProducts();
  }, []);   
       
       
      

  return (
    <>
       <ItemDetail
              key={items.id}
              id={items.id}
              title={items.title}
              seller={items.seller}
              condition={items.condition}
              stock={items.stock}
              picture={items.image}
              price={items.price}
              category={items.category_id}
              ></ItemDetail>

  </>   
  );

};

export default ItemDetailContainer;