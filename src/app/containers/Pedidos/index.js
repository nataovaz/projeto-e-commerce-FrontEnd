import React, { Component } from 'react';

import moment from 'moment';

import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Basica';
import Paginacao from '../../components/Paginacao/Simples';


class Pedidos extends Component{
  state = {
    pesquisa: "",
    atual: 0
  }

  onChangePesquisa = (ev) => this.setState({ pesquisa: ev.target.value });
  changeNumeroAtual = (atual) => this.setState({ atual });

  render(){
    // DADOS DE TESTE PARA A TABELA
    const dados = [
      {
        "Cliente": "Cliente 1",
        "Valor Total": 89.90,
        "Data": moment().toString(),
        "Situacao": "Pendente",
        "botaoDetalhes": "/pedidos/9323ASD"
      },
      {
        "Cliente": "Cliente 2",
        "Valor Total": 89.90,
        "Data": moment().toString(),
        "Situacao": "Pagamento concluído",
        "botaoDetalhes": "/pedidos/9SA5DASD"
      }
    ]
    const { pesquisa } = this.state;
    return(
      <div className='Pedidos'>
        <div className='Card'>
        <Titulo tipo='h1' titulo='Pedidos' />
        <br />
        <Pesquisa valor={pesquisa} placeholder={"Pesquise pelo nome do cliente..."} onChange={(ev) => this.onChangePesquisa(ev)} onClick={() => alert("Pesquisar")} />
        <br />
        <Tabela 
          cabecalho={["Cliente", "Valor Total", "Data", "Situacao"]}
          dados = {dados}
        />
        <Paginacao atual={this.state.atual} total={120} limite={20} onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)} />
        </div>
      </div>
    );
  }
}

export default Pedidos;
