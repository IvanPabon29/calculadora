import logo from"./img/logo-calculadora.png"
import "./App.css";
import Boton from "./components/Boton";
import Pantalla from "./components/Pantalla";
import BotonClear from "./components/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs"

function App() {

  const [input, setInput ] = useState("");

  // Funcion agregar ala pantalla
  const agregarInput = (valor) =>{
    setInput(input + valor);
  };

  // Funcion eleminar.
  const clear = () => {
    setInput("");
  };

  // Funcion resultado
  const resultado = () =>{
    // Manejar el input vacio:
    if(input) {
      setInput(evaluate(input)); // Es una libreria para funciones matematicas.
      //Toma el valor no importa si esta en STRING.
    }else{
      alert("¡ERROR! Ingrese un Valor, para realizar los Calculos.");
    }
  };
 

  return (
    <div className="App">
      <div className="logo-contenedor">Calculadora en React 
        <img src={logo} className="logo" alt="Logo Calculadora"/>
      </div>
      <main className="contenedor-calculadora">

        <Pantalla input={input}/>

        <div className="fila">
          <Boton claseBoton = {false} manejarClic = {agregarInput}>1</Boton>
          <Boton claseBoton = {false} manejarClic = {agregarInput}>2</Boton>
          <Boton claseBoton = {false} manejarClic = {agregarInput}>3</Boton>
          <Boton claseBoton = {true}  manejarClic = {agregarInput}>/</Boton>

        </div>
        <div className="fila">
          <Boton claseBoton = {false} manejarClic = {agregarInput} >4</Boton>
          <Boton claseBoton = {false} manejarClic = {agregarInput}>5</Boton>
          <Boton claseBoton = {false} manejarClic = {agregarInput}>6</Boton>
          <Boton claseBoton = {true}  manejarClic = {agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton claseBoton = {false} manejarClic = {agregarInput} >7</Boton>
          <Boton claseBoton = {false} manejarClic = {agregarInput}>8</Boton>
          <Boton claseBoton = {false} manejarClic = {agregarInput}>9</Boton>
          <Boton claseBoton = {true} manejarClic = {agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton claseBoton = {false} manejarClic = {resultado} >=</Boton>
          <Boton claseBoton = {false} manejarClic = {agregarInput}>0</Boton>
          <Boton claseBoton = {false} manejarClic = {agregarInput}>.</Boton>
          <Boton claseBoton = {true} manejarClic = {agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear= {clear}>
            Clear
          </BotonClear>

        </div>

      </main>

    </div>
  );
}

export default App;
