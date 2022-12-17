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
            <div className='Login'>
                <div className='card'>
                    <Titulo tipo="h1" titulo="LOJA TI" />
                    <p>Faça seu login abaixo</p>
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
                    <div>
                        <div>
                            <Checkbox value={opcaoLembrar} label="Lembrar?" onChang={() => this.onChangeCheckbox("opcaoLembrar")} />
                        </div>
                        <div>
                            <Link to="/recuperar-senha">Esqueceu sua senha?</Link>
                        </div>
                    </div>

                    <Button type="sucess" rota="/" label="ENTRAR" />
                </div>
            </div>
        );
    }
}

export default Login;
