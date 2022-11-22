import { useState, useEffect } from "react";

export function Service(){
    const [isLoading, setIsLoading] = useState(true);   
    const [text, setText] = useState(''); 

    useEffect(() =>{
        fetch("http://localhost:9890/")
        .then((respose) => respose.json())
        .then((service) => {
             console.log(service.mensaje);
             setText(service.mensaje);
            
        });
     },[]);
          
     return(
          <h2>{text}</h2>
     )

    

}