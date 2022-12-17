import React from 'react';

const Paginacao = ({ total, atual, limite, onClick }) => {
    // Calcula o total de páginas a partir do total de itens e do limite de itens por página (total de itens / limite de itens por página) e arredonda para cima
    const totalPaginas = Math.ceil(total/limite);

    return (
        <div className="Paginacao flex horizontal">
            {
                // Cria um array com o número de páginas e percorre o array para criar os botões de paginação (um botão para cada página) e renderiza cada botão de paginação
                [...Array(totalPaginas).keys()].map((item, index) => {
                    // Calcula o número da página atual a partir do número da página e do limite de itens por página (número da página * limite de itens por página)
                    const numeroAtualDaPagina = item * limite;
                    return(
                        <div className={`paginacao-item ${numeroAtualDaPagina === atual ? "paginacao-item-active" : ""}` } 
                        onClick={(numeroAtualDaPagina) => onClick(numeroAtualDaPagina)}
                        key={index}>
                            {item + 1}
                        </div>
                    )

                })
                        
              
            }
        </div>
    )
}

export default Paginacao;
