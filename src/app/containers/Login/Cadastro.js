import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Titulo from '../../components/Texto/Titulo';
import Input from '../../components/Inputs/Simples';
import Checkbox from '../../components/Inputs/Checkbox';

import Button from '../../components/Button/Simples';

class Cadastro extends Component {
    state = {
        email: "",
        senha: "",
        confirmarSenha: "",
    }

    // O campo do formulário que está sendo alterado é passado como parâmetro para a função onChangeInput
    // Esse campo é responsável para não precisar digitar "letra a letra" no input para validar
    onChangeInput = (field, ev) => this.setState({ [field]: ev.target.value });

    render() {
        const { email, senha, confirmarSenha } = this.state;
        return (
            <div className='Login flex flex-center'>
                <div className='Card'>
                    <div className='flex vertical flex-center'>
                        <Titulo tipo="h1" titulo="LOJA TI" />
                    </div>
                    <p>Faça seu cadastro abaixo</p>
                    <Input
                        label="E-mail"
                        value={email}
                        onChange={(ev) => this.onChangeInput("email", ev)}
                    />
                    <Input
                        label="Senha"
                        value={senha}
                        onChange={(ev) => this.onChangeInput("senha", ev)}
                    />
                    <Input
                        label="Confirme a senha"
                        value={senha}
                        onChange={(ev) => this.onChangeInput("senha", ev)}
                    />
                    <div>
                        
                        <div>
                            <Link to="/login">Deseja voltar e fazer o login?</Link>
                        </div>
                    </div>

                    <div className="flex flex-center">
                    <Button type="sucess" rota="/login" label="Registrar-se" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Cadastro;
