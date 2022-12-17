import React from 'react';
import { Link } from 'react-router-dom';

const TabelaSimples = ({ cabecalho, dados  }) => (
    <div className="TabelaSimples">
        <table className='simples'>
            <thead>
                <tr>
                    {
                        /* Percorre o array de cabeçalho e retorna um th para cada item */
                        cabecalho.map((item, index) => (
                            <th key={index}>{item}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    // Percorre o array de dados e retorna uma tr para cada item (linha) do array de dados
                    dados.map((linha, index) => (
                        <tr key={index}>
                            {
                                Object.keys(cabecalho).map((item, index) => (
                                   linha[item] ? <td key={index}>{linha[item]}</td> : <td key={index}></td>


                                ))
                            }
                            {
                                linha["botaoDetalhes"] && (
                                    <td>
                                        <Link to={linha["botaoDetalhes"]}>
                                        <button>
                                            Detalhes
                                        </button>
                                        </Link>
                                    </td>

                                )
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>


)

export default TabelaSimples;