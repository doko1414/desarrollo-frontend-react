import { useSelector } from "react-redux";

const Description=()=>{
    const defaultState=useSelector(state=>state.default);//con esto recuperaros tadas las variables globales de

    return(
        <>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <h4>{defaultState.name}</h4>
        </>
    );
}

export default Description;