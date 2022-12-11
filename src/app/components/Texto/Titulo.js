import React from 'react';
const Titulo = ({tipo, titulo}) => {
    switch(tipo){
        case 'h1':
        default:
            // Se o tipo for h1 ou não for informado, retorna um h1
            return <h1 className='Titulo-principal'>{titulo}</h1>
    }
}

export default Titulo;