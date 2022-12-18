import React from 'react';
import { Link } from 'react-router-dom';

// Array de itens do menu lateral esquerdo
const items = [
    {
        rota: "/clientes",
        icone: (<i className='fas fa-users' />),
        titulo: "Clientes"
    },
    {
        rota: "/produtos",
        icone: (<i className='fas fa-boxes' />),
        titulo: "Produtos"
    },
    {
        rota: "/painel",
        icone: (<i className='fas fa-file' />),
        titulo: "Painel"
    },
    {
        rota: "/opcao",
        icone: (<i className='fas fa-gear' />),
        titulo: "Opções"
    },

]
const ListItems = ({ open, history }) => {
    // Verifica se o item está ativo (se a rota atual é igual a rota do item)
    const localAtual = history.location.pathname;
    
    return (
        <div className='items-wrapper'>
            {
                // Percorre o array de itens e renderiza cada um deles
                items.map((item, index) => (
    
                    <Link to={item.rota} key={index}>
                        <div className={`menu-item ${localAtual === item.rota ? "menu-item-active" : ""} flex horizontal`}>
                            <div className='flex-1 flex flex-center'>
                                {item.icone}
                            </div>
                            {open && (<div className='flex-2 flex flex-start'>
                                <span>{item.titulo}</span>
                            </div>)}
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default ListItems;