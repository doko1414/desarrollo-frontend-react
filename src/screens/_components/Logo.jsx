import logo from '../../logo.svg';

const Logo=()=>{
    return (
        <>
           <img src={logo} className="App-logo" alt="logo" />
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