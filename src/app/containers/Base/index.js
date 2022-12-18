import React from 'react';

import BarraTopo from './BarraTopo';
import Menu from './Menu';

class Base extends React.Component{
    render(){
        return(
            <div className='flex horizontal full-height'>
                <div className='flex vertical'>
                    {/* Carregar o componente filho através do history */}
                    <Menu history={this.props.history} />
                </div>
                <div className='flex vertical full-width'>
                    <div className='flex horizontal'>
                        <BarraTopo />
                    </div>
                    <main className='flex full-height'>
                        {this.props.children}
                        {/* Aqui vai o conteúdo da página que está sendo renderizada */}
                    </main>
                </div>
            </div>
        );
    }
}

export default Base;