// stateless, no tiene ciclo de vida, no tiene state y tampoco requerimos de this
import React from 'react';
const Paginacion = props => {
    return (
        <div className="py-3">
            <button type="button" 
                className="btn btn-info mr-1"
                onClick={props.paginaAnterior}>
                Anterior &larr;
            </button>
            <button type="button" 
                onClick={props.paginaSiguiente}
                className="btn btn-info mr-1">
                Siguiente &rarr;
            </button>
        </div>
    )
}

export default Paginacion;