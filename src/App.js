import Coche from "./coche";
import array from "./array";

function App() {
  const mostrarGaraje = array.map(function (coche) {
    return (<Coche altura={coche.altura} longitud={coche.longitud} ruedas={coche.ruedas} color={coche.color} />)
  })
  return mostrarGaraje;
}

export default App;
