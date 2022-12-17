import React, { Component } from 'react';

import Titulo from '../../components/Texto/Titulo';
import Input from '../../components/Inputs/Simples';

import Button from '../../components/Button/Simples';

class ResetarSenha extends Component {

    state = {
        senha: "",
        confirmarSenha: ""
    }

    onChangeInput = (field, ev) => this.setState({ [field]: ev.target.value });

    render() {
        const { senha, confirmarSenha } = this.state;
        return (
            <div className='Resetar-Senha'>
                <Titulo tipo="h1" titulo="LOJA TI" />
                <br />
                <div>
                    <p>Informe sua nova senha no campo abaixo e clique em "Resetar Senha"</p>

                </div>
                <br />
                <div>
                <Input 
                label="Confirmar Senha" 
                value={senha} 
                onChange={(ev) => this.onChangeInput("senha", ev)} 
                type="password" />
                <Input label="Senha" value={confirmarSenha} onChange={(ev) => this.onChangeInput("confirmarSenha", ev)} type="password" />
                </div>
                <br />
                <div>
                    <Button type="success" rota="/login" label="RESETAR SENHA" />
                </div>
            </div>
        );
    }
}

export default ResetarSenha;