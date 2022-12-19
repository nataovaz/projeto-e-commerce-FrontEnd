import React, { useState } from "react";
import { Link } from "react-router-dom";
import Titulo from "../../components/Texto/Titulo";
import Input from "../../components/Inputs/Simples";
import Button from "../../components/Button/Simples";
import axios from "axios";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});

    const url = "https://web-development2.vercel.app/";

    function loginUser() {
        axios
            .post(url + "users/login", {
                email: email,
                password: password,
            })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleInputChange(field, value) {
        if (field === "email") {
            setEmail(value);
        } else if (field === "password") {
            setPassword(value);
        }
        validate();
    }

    function validate() {
        const erro = {};
        if (!email) erro.email = "Campo E-mail é obrigatório";
        if (!password) erro.password = "Campo Senha é obrigatório";
        setError(erro);
        return !(Object.keys(erro).length > 0);
    }

    return (
        <div className="Login flex flex-center">
            <div className="Card">
                <div className="flex vertical flex-center">
                    <Titulo tipo="h1" titulo="LOJA TI" />
                    <p>Faça seu login abaixo</p>
                </div>
                <br />
                <br />
                <Input
                    label="E-mail"
                    value={email}
                    onChange={(ev) => handleInputChange("email", ev.target.value)}
                />
                <Input
                    label="Senha"
                    value={password}
                    onChange={(ev) => handleInputChange("password", ev.target.value)}
                />
                <div className="flex vertical">
                    <div className="flex horizontal">
                        <div className="flex-1 flex flex-end">
                            <Link to="/recuperar-senha">
                                <small>Esqueceu sua senha?</small>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 flex vertical">
                        <Link to="/cadastro">É seu primeiro acesso? Faço seu cadastro.</Link>
                    </div>
                </div>
                <br />
                <br />
                <div className="flex flex-center">
                    <Button type="success" rota="/clientes" label="ENTRAR" onClick={loginUser} />
                </div>

            </div>
        </div>
    );
}
