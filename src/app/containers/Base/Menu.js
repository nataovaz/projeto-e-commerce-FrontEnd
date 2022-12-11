import React, { Component } from 'react';

import ListItems from './ListItems';

class Menu extends Component{
    // Estado do menu lateral esquerdo (aberto ou fechado)
    state = {open: true}
    seOpen = () => this.setState({open: !this.state.open});

    render(){
    const { open } = this.state;
    return(
        <div className='Menu'>
            <div className='item-top' onClick={() => this.seOpen()}>
                {
                    open ? (<i className='fas fa-arrow-left' />) : (<i className='fas fa-arrow-right' />)
                }
            </div>
            <hr />
            {/* Passa o estado do menu e o history para o componente ListItems (itens do menu) */}
            <ListItems open={open} history={this.props.history} />
        </div>
    );}
}

export default Menu;