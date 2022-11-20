import { useState, useEffect } from "react";

export function Service(){
    const [isLoading, setIsLoading] = useState(true);   
    const [text, setText] = useState(''); 

    useEffect(() =>{
        fetch("http://localhost:8080/RestApp/webresources/generic")
        .then((respose) => respose.json())
        .then((service) => {
             console.log(service.message);
             setText(service.message);
            
        });
     },[]);
     
     
     return(
          <h2>{text}</h2>
     )

    

}