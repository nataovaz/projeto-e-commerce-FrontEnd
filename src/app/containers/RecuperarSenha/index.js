import React, { Component } from 'react';

import Titulo from '../../components/Texto/Titulo';
import Input from '../../components/Inputs/Simples';

import Button from '../../components/Button/Simples';

class RecuperarSenha extends Component {
    state = {
        email: ""
    }

    onChangeInput = (field, ev) => this.setState({ [field]: ev.target.value });
    render() {
        return (
            <div className='Recuperar-Senha'>
                <Titulo tipo="h1" titulo="LOJA TI" />
                <br />
                <div>
                    <p>Informe seu e-mail para recuperar sua senha abaixo</p>
                    <p>Iremos enviar um link para você acessar e entrar uma nova senha.</p>
                </div>
                <br />
                <div>
                    <Input
                        label="E-mail"
                        value={this.state.email}
                        onChange={(ev) => this.onChangeInput("email", ev)}
                        type="email" />
                </div>
                <br />
                <div>
                    <Button type="success" rota="/resetar-senha/1" label="RECUPERAR" />
                </div>
            </div>

        );
    }
}

export default RecuperarSenha;
