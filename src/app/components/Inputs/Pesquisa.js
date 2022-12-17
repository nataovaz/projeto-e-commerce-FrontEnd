import React from 'react';

const Pesquisa = ({ valor, placeholder, onChange, onClick }) => (
    <div className='Pesquisa flex horizontal'>
        <input value={valor} onChange={onChange} placeholder={placeholder} />
        <button>
            <i className="fas fa-search" onClick={onClick}></i>

        </button>
    </div>
)

export default Pesquisa;