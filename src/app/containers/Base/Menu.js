import React, { Component } from 'react';

import ListItems from './ListItems';

class Menu extends Component{
    // Estado do menu lateral esquerdo (aberto ou fechado)
    state = {open: true}
    seOpen = () => this.setState({open: !this.state.open});

    render(){
    const { open } = this.state;
    return(
        <div className={`Menu ${open ? "menu-open" : ""}`}>
            <div className={`item-top flex ${open ? "flex-end" : "flex-center"}`} onClick={() => this.seOpen()}>
                    {(<i className={`fas fa-arrow-${open ? "left" : "right"}`}/>)}    
            </div>
            <hr />
            {/* Passa o estado do menu e o history para o componente ListItems (itens do menu) */}
            <ListItems open={open} history={this.props.history} />
        </div>
    );}
}

export default Menu;