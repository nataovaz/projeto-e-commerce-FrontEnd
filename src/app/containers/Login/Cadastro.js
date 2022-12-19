import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Titulo from '../../components/Texto/Titulo';
import Input from '../../components/Inputs/Simples';
import Checkbox from '../../components/Inputs/Checkbox';
import axios from "axios";

import Button from '../../components/Button/Simples';

export default function Cadastro() {
    
    const [users, setUsers] = useState([]);
    const [id, setId] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [permissao, setPermission] = useState("");
    const [opcaoLembrar, setLembrar] = useState("");
    const [secondPassword, setSecond] = useState("");


    const url = "https://web-development2.vercel.app/";

    useEffect(() => {
        fetch(url + "users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((err) => console.log(err));
    }, [url]);

    function comparaSenha(){
        if(secondPassword === password){
            register();
        
        }
    }

    function register(){
        axios.post(url + "users/sign", {
            name: nome,
            email: email,
            password: password,
            permissions: permissao,
        })
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
    }

    return (
        <div className='Login flex flex-center'>
            <div className='Card'>
                <div className='flex vertical flex-center'>
                    <Titulo tipo="h1" titulo="LOJA TI" />
                </div>
                <p>Faça seu cadastro abaixo</p>
                <Input
                    label="Nome"
                    value={nome}
                    onChange={(ev) =>setNome(ev.target.value)}
                />
                <Input
                    label="E-mail"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                />               
                <Input
                    label="Qual permissão deseja atribuir?"
                    value={permissao}
                    onChange={(ev) => setPermission(ev.target.value)}
                />
                <Input
                    label="Senha"
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                />
                <Input
                    label="Confirme a senha"
                    value={secondPassword}
                    onChange={(ev) => setSecond(ev.target.value)}
                />
                <div>
                    
                    <div>
                        <Link to="/">Deseja voltar e fazer o login?</Link>
                    </div>
                </div>

                <div className="flex flex-center">
                <Button type="sucess" rota="/" label="Registrar-se"  onClick={comparaSenha}/>
                </div>
            </div>
        </div>
    );
    
}

