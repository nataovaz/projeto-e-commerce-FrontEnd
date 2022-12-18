import React, {Component} from 'react';
import ButtonSimples from '../../components/Button/Simples';
import Titulo from './../../components/Texto/Titulo';
import InputValor from './../../components/Inputs/InputValor';
import { TextoDados } from './../../components/Texto/Dados';

class DetalhesDoCliente extends Component{

    state = {
        nome: "Cliente 1",
        CPF: "111.222.333-45",
        telefone: "11 1234-5678",
        email: "cliente1@hotmail.com"

    }
    renderCabecalho(){
        return(
            <div className='flex'>
                <div className='flex-1 flex'>
                    <Titulo tipo='h1' titulo='Cliente 1' />
                </div>
                <div className='flex-1 flex flex-end'>
                    <ButtonSimples onClick={() => alert("Salvo!")} label="Salvar" type="success" />
                    <ButtonSimples onClick={() => alert("Removido!")} label="Remover" type="danger" />
                </div>
            </div>
        );
    }

    handleSubmit = (field, value) => {
        this.setState({ [field]: value });
    }


    renderDetalhesCadastro(){
        const {nome, CPF, telefone, email} = this.state;
        return (
            <div className='Detalhes-do-Cadastro'>
                <TextoDados chave="Nome" valor={(
                    <InputValor name="nome" noStyle handleSubmit={(valor) => this.handleSubmit("nome", valor) } value={nome} />
                )} />
                <TextoDados chave="CPF" valor={(
                    <InputValor name="CPF" noStyle handleSubmit={(valor) => this.handleSubmit("CPF", valor) } value={CPF} />
                )} />
                <TextoDados chave="Telefone"  valor={(
                    <InputValor name="Telefone" noStyle handleSubmit={(valor) => this.handleSubmit("Telefone", valor) } value={telefone} />
                )} />
                <TextoDados chave="E-mail" valor={(
                    <InputValor name="E-mail" noStyle handleSubmit={(valor) => this.handleSubmit("E-mail", valor) } value={email} />
                )} />
            </div>
        )
    }

    render(){
        return(
            <div className='DetalhesDoCliente full-width flex vertical'>
                {this.renderCabecalho()}
                <div className='flex horizontal'>
                {this.renderDetalhesCadastro()}
                </div>
            </div>
        )
    }
}

export default DetalhesDoCliente;