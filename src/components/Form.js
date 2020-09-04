import React, { Fragment, useState } from 'react';
import '../assets/css/App.css';
import { v4 as uuidv4 } from 'uuid';


const Form = ({crearLista}) => {
  //Crear State de Lista
  const [lista, actualizarLista] = useState({
    name: '',
    lastname: '',
    department: '',
    position: '',
    phone: ''
  });
  //Segundo state para evento error al agregar 
  const [error, actualizarError] = useState(false)


  //Función que se ejecuta cada vez que el usuario escribe en un input
  const actualizarState = e => {
    actualizarLista({
      ...lista,
      [e.target.name] : e.target.value
    });
    
  }

  //extraer los valores 
  const {name, lastname, department, position, phone} = lista

  //Cuando el usuario presiona agregar 
  const submitLista = e =>{
    e.preventDefault();
    console.log('enviando');

    //Validar 
    if(name.trim() === '' || lastname.trim() === '' || department.trim() === '' ||
    position.trim() === '' || phone.trim() === ''){
        actualizarError(true);
      return;
    }

    //Eliminar mensaje precio de evento error
    actualizarError(false);

    //Asignar Id
    lista.id = uuidv4();
    console.log(lista);

    //Crear Lista
    crearLista(lista);

    //Reiniciar el Form
    actualizarLista({
      name: '',
      lastname: '',
      department: '',
      position: '',
      phone: ''
    })

  }
    return ( 
        <Fragment>
          <div>
                {error ? <p className="error">Todos Los campos son obligatorios</p>
            : null}
          </div>
        
      <div className="content">
        <form 
            onSubmit={submitLista}
            className="two"
            >
            <h2 className="prod">Enter the Data</h2>
            <label id="text" >Name</label>
            <input
              type="text"
              name="name"
              className="field"
              placeholder="Enter your name"
              onChange={actualizarState}
              value={name}
            />
            <label id="text">last name</label>
            <input
              type="text"
              name="lastname"
              className="field"
              placeholder="Enter your lastname"
              onChange={actualizarState}
              value={lastname}                         
            />
            <label id="text">Department</label>
            <input
              type="text"
              name="department"
              className="field"
              placeholder="Enter your Department"
              onChange={actualizarState}
              value={department}                        
            />
            <label id="text">Position</label>
            <input
              type="text"
              name="position"
              className="field"
              placeholder="Enter your Position"
              onChange={actualizarState}
              value={position}  
            />
            <label id="text">phone</label>
            <input
              type="text"
              name="phone"
              className="field"
              placeholder="Enter your phone"
              onChange={actualizarState}
              value={phone}     
            />
            <button 
            type="submit"
            className="btn-save"
            > Save
            </button>       
          </form>
      </div>
      </Fragment>
     );
}
export default Form;