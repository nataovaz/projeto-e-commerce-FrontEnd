import React, { Component } from 'react';
import Titulo from './../../components/Texto/Titulo';

import Button from '../../components/Button/Simples'
import { TextoDados } from '../../components/Texto/Dados';
import InputValor from './../../components/Inputs/InputValor';

class DetalhesProdutos extends Component{

    state = {
        produto: "Polo 1",
        modelo: "VW",
        ano: "2019",
        quilometragem: "1200",

    }

    renderCabecalho(){
        const {produto} = this.state; 
        return(
            <div className='flex'>
                <div className='flex-1 flex'>
                    <Titulo tipo='h1' titulo={produto} />
                    
                </div>
                <div className='flex-1 flex flex-end'>
                    <Button type="success" label="Salvar" onClick={() => alert("Salvar")} />
                </div>
            </div>

        )
    }

    renderDados(){
        const { produto, modelo, ano, quilometragem } = this.state;
        return(
            <div className='Dados-Produto'>
                <TextoDados
                    chave="Produto"
                    valor={(<InputValor value={produto} noStyle name={"Produto"} onChange={(ev) => this.setState({produto: ev.target.value}) } />)} />
                <TextoDados
                    chave="Modelo"
                    valor={(<InputValor value={modelo} noStyle name={"Modelo"} onChange={(ev) => this.setState({modelo: ev.target.value}) } />)} />
                <TextoDados
                    chave="Ano"
                    valor={(<InputValor value={ano} noStyle name={"Ano"} onChange={(ev) => this.setState({ano: ev.target.value}) } />)} />
                <TextoDados
                    chave="Quilometragem"
                    valor={(<InputValor value={quilometragem} noStyle name={"Quilometragem"} onChange={(ev) => this.setState({quilometragem: ev.target.value}) } />)} />
            </div>
        )
    }

    render(){
        const { produto } = this.state;
        return(
            <div className='Detalhes-do-Produto'>
                {this.renderCabecalho()}
                <br />
                <div className='flex horizontal'>
                    <div className='flex vertical'>
                        {this.renderDados()}
                    </div>
                </div>

            </div>
        )
    }
}

export default DetalhesProdutos;