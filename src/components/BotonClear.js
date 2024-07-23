//Componente Boton.
import "../styles/BotonClear.css"

function BotonClear (props) {
  return (<button className="boton-clear" onClick={props.manejarClear}>
    
    {props.children}
  </button>
  );
};

export default BotonClear;