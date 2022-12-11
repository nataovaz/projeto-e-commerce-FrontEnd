import React from 'react';
import { Link } from 'react-router-dom';


const  ListItems = ({open, history}) => (
    <div className='items-wrapper'>
        <Link to={"/"}>
            <div className='menu-item flex horizontal'>
                <div className='flex-1 flex flex-center'>
                    <i className='fas fa-copy' />
                </div>
               {open && ( <div className='flex-2 flex flex-start'>
                    <span>Pedidos</span>
                </div>)}
            </div>
        </Link>
    </div>
    )

export default ListItems;