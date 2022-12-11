import React from 'react';
import { Link } from 'react-router-dom';

// Array de itens do menu lateral esquerdo
const items = [
    {
        rota: "/",
        icone: (<i className='fas fa-copy' />),
        titulo: "Pedidos"
    },
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
]
const ListItems = ({ open, history }) => (
    <div className='items-wrapper'>
        {
            // Percorre o array de itens e renderiza cada um deles
            items.map((item, index) => (

                <Link to={item.rota} key={index}>
                    <div className='menu-item flex horizontal'>
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

export default ListItems;