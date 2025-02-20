import { useState, useEffect } from "react";

//useState permite manejar variables de estado locales
const Contador=()=>{

    const [contador,setContador]=useState(10);//variable de estado local, el segundo parametro sera una funcion
    
    const handleContador=()=>{
        setContador(contador+1);
    }
    const DisminuirContador=()=>{
        setContador(contador-1);
    }
    //cuando el contador tenga valor de 15 mostrar un alert(contador es 15), se puede hacer utilizando useEffect
    //esta funcion especial se ejecuta cuando el componente se haya montado
    //[]
    useEffect(()=>{
        setContador(12);
    },[]);
    // esta funcion se ejecuta cuando haya cambiado el valor del contador
    //[contador]
    useEffect(()=>{
        if (contador===15){
            alert("contador es 15");
        }
    },[contador]);
    //esta funcion especial se ejecuta cuando el componente
    //se desmonta

    useEffect(()=>{
        return()=>{
            console.log('el componente se desmonta')
        };
    });

    return(
        <>
        <h1>componente contador</h1>
        <h3>{contador}</h3>
        <div>
            <button onClick={handleContador}>aumentar</button>
            <button onClick={DisminuirContador}>disminuir</button>
        </div>
        </>
    );
}

export default Contador;