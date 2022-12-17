import React from 'react';

const Pesquisa = ({ valor, placeholder, onChange }) => (
    <div className='Pesquisa'>
        <input value={valor} onChange={onChange} placeholder={placeholder} />
    </div>
)

export default Pesquisa;