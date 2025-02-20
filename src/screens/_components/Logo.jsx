import logo from '../../logo.svg';
import { useSelector } from 'react-redux';

const Logo=()=>{
    const defaultState=useSelector(state=>state.default)
    return (
        <>
           <img src={logo} className="App-logo" alt="logo" />
           <h1>{defaultState.name}</h1>
        </>
    );
};

export default Logo;

/* 
estructura basica de un componente: debe tener extencion .jsx para trabajar con react el componente si o si
const NombreComponente=()=>{
    return (
        <div>
            componente
        </div>
    );
};

export default NombreComponente;
*/