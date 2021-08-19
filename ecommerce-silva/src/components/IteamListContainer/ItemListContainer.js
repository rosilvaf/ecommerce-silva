import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailList from "./../ItemDetail/ItemDetail";
import ItemDetail from "./../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [value, setValue] = useState([]);
  const arr = [];
  
  useEffect(() => {
    setTimeout(() => {
      fetch("https://api.mercadolibre.com/sites/MLA/search?q=mesa")
        .then((res) => res.json())
        .then((data) => {
       
          const result = data.results[0];
          
          arr.push(result);
          setValue(arr);
        })
        .catch((e) => console.log(e));
    }, 2000);
  }, []);

  
  return (
    <>
        
    <div className="d-flex flex-row p-5">
      {value.map((v) => (
        <ItemDetail
          key={v.id}
          id={v.id}
          title={v.title}
          stock={v.available_quantity}
          picture={v.thumbnail}
          price={v.price}
          category={v.category_id}
        />
       
      ))}
      ;
    </div>
    </>
  );
};
export default ItemDetailContainer;