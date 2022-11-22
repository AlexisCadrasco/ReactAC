import { useState, useEffect } from "react";
export function Products(){
    const [text, setText] = useState([]);    
    useEffect(() =>{
        fetch("http://localhost:9890/products")
        .then((respose) => respose.json())
        .then((service) => {
             console.log(service.products);
             setText(service.products);             
        });
     },[]);   
   
    return(
       <div>
           <ul>{text.map(task => <li key={`task_${task}`}>{task}</li>)}</ul>
       </div>
    )   
   
   }