import React , {Fragment} from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'


function App() {
  
  return (
   
  <Fragment>
     <NavBar/>

      <br />
    
     <ItemListContainer presentacion="PROOVEDOR,Ventas por mayor y por menor,Consultas mediante nuestras redes sociales,Precios accesibles y promociones dentro del mercado de Pc, Electrodomesticos, Artefactos electronicos, etc." />
   
   <ItemCount className="container"/>
   </Fragment>
  );
}

export default App;
