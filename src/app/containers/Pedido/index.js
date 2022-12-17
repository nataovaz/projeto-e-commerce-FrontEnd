import React, { Component } from 'react';

import DetalhesDoPedido from './DetalhesDoPedido';



class Pedido extends Component {
  render() {
    return (
      <div className="Pedidos flex vertical">
        <div>
            <DetalhesDoPedido />
        </div>
        
      </div>
    );
  }
}

export default Pedido;