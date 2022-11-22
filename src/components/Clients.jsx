import { useState, useEffect } from "react";
export function Clients(){
    const [text, setText] = useState([]);    
    useEffect(() =>{
        fetch("http://localhost:9890/clients")
        .then((respose) => respose.json())
        .then((service) => {
             console.log(service.clients);
             setText(service.clients);             
        });
     },[]);   
   
    return(
       <div>
           <ul>{text.map(task => <li key={`task_${task}`}>{task}</li>)}</ul>
       </div>
    )   
   }