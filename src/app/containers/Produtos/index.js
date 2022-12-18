import React, { Component } from 'react';


import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Basica';
import Paginacao from '../../components/Paginacao/Simples';


class Produtos extends Component {
    state = {
        pesquisa: "",
        atual: 0
    }

    onChangePesquisa = (ev) => this.setState({ pesquisa: ev.target.value });
    changeNumeroAtual = (atual) => this.setState({ atual });

    render() {
        // DADOS DE TESTE PARA A TABELA
        const dados = [
            {
                "Produto": "Polo 1",
                "Modelo": "VW",
                "Ano": "2019",
                "Quilometragem": "1200",
                "botaoDetalhes": "/produto/926251SADASD"
            },
            {
                "Produto": "Polo 2",
                "Modelo": "VW",
                "Ano": "2019",
                "Quilometragem": "1200",
                "botaoDetalhes": "/produto/SAAS5DAS1D5D"
            },
            {
                "Produto": "Polo 3",
                "Modelo": "VW",
                "Ano": "2019",
                "Quilometragem": "1200",
                "botaoDetalhes": "/produto/ASD4AS1DASD2"
            },
            {
                "Produto": "Polo 4",
                "Modelo": "VW",
                "Ano": "2019",
                "Quilometragem": "1200",
                "botaoDetalhes": "/produto/ASD4AS1DASD3"
            }
            

        ]
        const { pesquisa } = this.state;
        return (
            <div className='Produtos full-width'>
                <div className='Card'>
                    <Titulo tipo='h1' titulo='Produtos' />
                    <br />
                    <div className='flex'>
                        <div className='flex-3 '>
                            <Pesquisa valor={pesquisa} placeholder={"Pesquise pelo nome do produto, modelo ou ano..."} onChange={(ev) => this.onChangePesquisa(ev)} onClick={() => alert("Pesquisar")} />
                        </div>
                        <div className='flex-1 flex vertical'>
                            <label>
                                <small>
                                    Ordenar por
                                </small>
                            </label>
                            <select defaultValue="">
                                <option>Aleatorio</option>
                                <option value={"oaA-Z"}>Alfabética A-Z</option>
                                <option value={"oaZ-A"}>Alfabética Z-A</option>
                                <option value={"op-menor"}>Preço Menor</option>
                                <option value={"op-maior"}>Preço Maior</option>
                            </select>
                        </div>
                    </div>
                    <br />
                    <Tabela
                        cabecalho={["Produto", "Modelo", "Ano", "Quilometragem"]}
                        dados={dados}
                    />
                    <Paginacao atual={this.state.atual} total={120} limite={20} onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)} />
                </div>
            </div>
        );
    }
}

export default Produtos;
