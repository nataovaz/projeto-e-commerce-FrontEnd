import React from 'react';
import { Link } from 'react-router-dom';

// Componente de barra de topo com botões de sair e ver loja
const BarraTopo = () => (
    <div className='Barra-Topo flex horizontal full-width'>
        <div className='flex-1 flex flex-start'>
            <a href="/">Ver Loja</a>
        </div>
        <div className='flex-1 flex flex-end'>
            <Link to='logout'>Sair</Link>
        </div>
    </div>
);

export default BarraTopo;