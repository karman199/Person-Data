import React, { Fragment } from 'react';


const Item = ({lista, eliminarLista}) => {

        return(
            <Fragment>
                    <div className="list">
                        <p>Name:<span>{lista.name}</span></p>
                        <p>Lastname:<span>{lista.lastname}</span></p>
                        <p>Department:<span>{lista.department}</span></p>
                        <p>Position:<span>{lista.position}</span></p>
                        <p>Phone:<span>{lista.phone}</span></p>
                        <p><button
                            className="btn-delete"
                            onClick={ () => eliminarLista(lista.id) }              
                        >Eliminar &times;</button></p>   
                </div>               
            </Fragment>
     );
}
 
export default Item;