import React, { Component } from 'react';

import DetalhesDoCliente from './detalhesDoCliente';


class Cliente extends Component{
    render(){
        return(
            <div className='Cliente full-width flex vertical'>
                <div className='Card'>
                    <DetalhesDoCliente />
                </div> 
            </div>
        )

    }
}

export default Cliente;