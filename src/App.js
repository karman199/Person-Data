import React, { Fragment , useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Item from './components/Item';



function App() {
  //Arreglo de listas
  const [listas,guardarListas] = useState([]);
  //Función que tome las lista actuales y agregue la nueva
  const crearLista = lista =>{
    guardarListas([
      ...listas,
      lista
    ]);
  }
  //función que elimina una lista por su id
  const eliminarLista = id => {
    const nuevasListas = listas.filter(lista => lista.id !== id );
    guardarListas(nuevasListas)
  }
  return (
      <Fragment>
        <div className="container">
            <Header />
            <article> 
          <div>
             <Form 
            crearLista={crearLista}
           />
         </div>       
            </article>
            <div>
              <aside>
                {listas.map(lista =>(
                  <Item
                  key={lista.id}
                  lista={lista}
                  eliminarLista={eliminarLista}
                  />
                ))}
              </aside>
            </div>
            
         </div>  
      </Fragment> 
    
  );
}

export default App;
