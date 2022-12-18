import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Titulo from '../../components/Texto/Titulo';
import Input from '../../components/Inputs/Simples';
import Checkbox from '../../components/Inputs/Checkbox';

import Button from '../../components/Button/Simples';

class Login extends Component {
    state = {
        email: "",
        senha: "",
        opcaoLembrar: true
    }

    // O campo do formulário que está sendo alterado é passado como parâmetro para a função onChangeInput
    // Esse campo é responsável para não precisar digitar "letra a letra" no input para validar
    onChangeInput = (field, ev) => this.setState({ [field]: ev.target.value });

    onChangeCheckbox = (field) => this.setState({ [field]: !this.state[field] });

    render() {
        const { email, senha, opcaoLembrar } = this.state;
        return (
            <div className='Login flex flex-center'>
                <div className='Card'>
                    <div className="flex vertical flex-center">
                    <Titulo tipo="h1" titulo="LOJA TI" />
                    <p>Faça seu login abaixo</p>
                    </div>
                    <br />
                    <br />
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
                    <div className="flex vertical">
                        <div className="flex horizontal">
                            <div className="flex-1">
                                <Checkbox value={opcaoLembrar} label="Lembrar?" onChang={() => this.onChangeCheckbox("opcaoLembrar")} />
                            </div>
                            <div className="flex-1 flex flex-end">
                                <Link to="/recuperar-senha"> <small>Esqueceu sua senha?</small> </Link>
                            </div>
                        </div>
                        <div className="flex-1 flex vertical">
                            <Link to="/cadastro">É seu primeiro acesso? Faço seu cadastro.</Link>
                        </div>
                    </div>

                    <br />
                    <br />
                    <div className="flex flex-center">
                    <Button type="sucess" rota="/" label="ENTRAR" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
