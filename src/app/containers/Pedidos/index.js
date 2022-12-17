import React, { Component } from 'react';

import moment from 'moment';

import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Basica';


class Pedidos extends Component{
  state = {
    pesquisa: "",
  }

  onChangePesquisa = (ev) => this.setState({ pesquisa: ev.target.value });

  render(){
    // DADOS DE TESTE PARA A TABELA
    const dados = [
      {
        "Cliente": "Cliente 1",
        "Valor Total": 89.90,
        "Data": moment.toISOString(),
        "Situacao": "Pendente",
        "botaodetalhes": "/pedidos/9323ASD"
      },
      {
        "Cliente": "Cliente 2",
        "Valor Total": 89.90,
        "Data": moment.toISOString(),
        "Situacao": "Pagamento concluído",
        "botaodetalhes": "/pedidos/9SA5DASD"
      }
    ]
    const { pesquisa } = this.state;
    return(
      <div className='Pedidos'>
        <div className='Card'>
        <Titulo tipo='h1' titulo='Pedidos' />
        <br />
        <Pesquisa valor={pesquisa} placeholder={"Pesquise pelo nome do cliente..."} onChange={(ev) => this.onChangePesquisa(ev)} />
        <br />
        <Tabela 
          cabecalho={["Cliente", "Valor Total", "Data", "Situação"]}
          dados = {dados}
        />
        <Paginacao />
        </div>
      </div>
    );
  }
}

export default Pedidos;
