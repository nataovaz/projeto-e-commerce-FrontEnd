import React from 'react';
const Titulo = ({tipo, titulo}) => {
    switch(tipo){
        case 'h1':
            return (<h1 className='Titulo-principal'>{titulo}</h1>)
        case 'h2':
            return (<h2 className='Titulo-secundario'>{titulo}</h2>)
        case 'h3':
            return (<h3 className='Subtitulo'>{titulo}</h3>)
        case 'h4':
            return (<h4 className='Subtitulo'>{titulo}</h4>)
        case 'h5':
            return (<h5 className='Subtitulo'>{titulo}</h5>)
        default:
            // Se o tipo for h1 ou não for informado, retorna um h1
            return <h1 className='Titulo-principal'>{titulo}</h1>
    }
}

export default Titulo;