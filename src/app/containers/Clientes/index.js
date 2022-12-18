import React, { Component } from 'react';


import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Basica';
import Paginacao from '../../components/Paginacao/Simples';


class Clientes extends Component{
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
        "E-mail": "cliente@hotmail.com",
        "botaoDetalhes": "/cliente/cliente1@hotmail.com"
      },
      {
        "Cliente": "Cliente 2",
        "E-mail": "cliente@hotmail.com",
        "botaoDetalhes": "/cliente/cliente2@hotmail.com"

      }

    ]
    const { pesquisa } = this.state;
    return(
      <div className='Clientes full-width'>
        <div className='Card'>
        <Titulo tipo='h1' titulo='Clientes' />
        <br />
        <Pesquisa valor={pesquisa} placeholder={"Pesquise pelo nome do cliente..."} onChange={(ev) => this.onChangePesquisa(ev)} onClick={() => alert("Pesquisar")} />
        <br />
        <Tabela 
          cabecalho={["Cliente", "E-mail"]}
          dados = {dados}
        />
        <Paginacao atual={this.state.atual} total={120} limite={20} onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)} />
        </div>
      </div>
    );
  }
}

export default Clientes;
