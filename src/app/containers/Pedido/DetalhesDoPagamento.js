import React, { Component } from 'react';
import Titulo from '../../components/Texto/Titulo';
import ListaDinamica from '../../components/Listas/ListaDinamicaSimples';


class DetalhesDoPagamento extends Component {

    state = {
        dados: [
            "Aguardando Pagamento",
            "Processando Pagamento",

        ]
    }

    onRemoveListaDinamica = (index) => {
        let { status } = this.state;

        // quando o index for igual ao index do item que eu quero remover eu retorno false e ele não vai ser adicionado no novo array que eu vou criar
        status = status.filter((item, _index) => _index !== index)
        this.setState({ status });
    }

    onAddListaDinamica = (texto) => {
        if(!texto) return false;
        let { status } = this.state;
        status.push(texto);
        this.setState({ status });
    }
  
    render() {
        const {status} = this.state;
    return (
      <div className="DetalhesDoPagamento">
        <Titulo tipo="h4" titulo="Pagamento" />
        <br />
        <ListaDinamica dados={status} onRemove={this.onRemoveListaDinamica} onAdd={this.onAddListaDinamica} />
      </div>
    );
  }
}

export default DetalhesDoPagamento;