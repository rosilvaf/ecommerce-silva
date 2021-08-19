import { useEffect,useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail"

  const getItems= ()=>{
    return fetch('https://api.mercadolibre.com/sites/MLA/search?q=mesa')
    .then(res=>{
        return res.json()
    })
    }

export default function ItemDetailContain(){
    const [value,setValue] = useState(new Set())

    useEffect (async ()=>{
        const data = await getItems()
        const arr=[]
        data.results.forEach(item=>{
            
            arr.push(<ItemDetail key ={item.id}title={item.title} description={item.description}/>)
            
        })
        setValue(arr)
    },[])
    
    return(
        <>
        {value}
        </>
    )
}