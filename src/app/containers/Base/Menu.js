import React, { Component } from 'react';

import ListItems from './ListItems';

class Menu extends Component{
    state = {open: true}


    render(){
    const { open } = this.state;
    return(
        <div className='Menu'>
            <div>
                <i className='fas fa-arrow-left' />
            </div>
            <hr />
            <ListItems open={open} history={this.props.history} />
        </div>
    );}
}

export default Menu;