import React from 'react';
import Base from '../Base';

// Componente que envolve o conteúdo da página que está sendo renderizada para que o conteúdo seja renderizado dentro do componente Base
const base = Component => {
    return class extends React.Component{
        render(){
            return(
                // O componente Base é renderizado com o conteúdo da página que está sendo renderizada como filho
                <Base history={this.props.history}>
                    {/* Este componente é o conteúdo da página que está sendo renderizada e é passado como filho do componente Base */}
                    <Component {...this.props} />
                </Base>
            );
        }
    }
}

export default base;