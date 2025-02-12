/*este sera nuestro componente generico PROPS son manejo de parametros en caso de que los componentes sean iguales en este caso son iguales 
Content.jsx y Github.js y creamos un componente generico Openlink y le pasaremos atributos o parametros que estaran en llaves{} */


const OpenLink = ({Title,url})=>{
    return (
        <> 
            <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {Title}
        </a>
        </>
    );
}
export default OpenLink;