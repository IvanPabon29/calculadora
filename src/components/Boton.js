// Componente Boton.
import "../styles/Boton.css"

function Boton(props){
  return(
    <div className={`boton-contenedor ${props.claseBoton ? "boton-operador" : "boton-numero"}`} 
    onClick = { () => props.manejarClic(props.children) }> 
{/* se valido que con un operador TERNARIO cual clase usar para los estilos */}
      {props.children}
    </div>
  );
};

export default Boton;