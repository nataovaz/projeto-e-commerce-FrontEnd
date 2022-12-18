import React, { Component } from 'react';
// HashRouter é o componente que envolve a aplicação e permite que a aplicação seja renderizada dentro de um elemento do DOM
import { HashRouter as Router, Route} from 'react-router-dom';
// Provider é o componente que envolve a aplicação e permite que a aplicação tenha acesso ao estado da aplicação
import { Provider } from 'react-redux';
// Store: Importa o componente que envolve a aplicação e permite que a aplicação tenha acesso ao estado da aplicação
import store from './store';
import base from './containers/HOC/Base';

// CONTAINER COM BASE
import Clientes from './containers/Clientes';
import Produtos from './containers/Produtos';

//CONTAINER SEM BASE
import Login from './containers/Login';
import Cadastro from './containers/Login/Cadastro';
import RecuperarSenha from './containers/RecuperarSenha';
import ResetarSenha from './containers/RecuperarSenha/ResetarSenha';


class App extends Component {
  render() {
    return (
      // Provider é o componente que envolve a aplicação e permite que a aplicação tenha acesso ao estado da aplicação
      <Provider store={store}>
        <Router>
          <div className="App">
            {/* Route é o componente que renderiza o conteúdo de uma página e base(Pedidos) é o componente que envolve o conteúdo da página que está sendo renderizada para que o conteúdo seja renderizado dentro do componente Base */}
              <Route path="/" exact component={base(Clientes)} />
              <Route path="/produtos" exact component={base(Produtos)} />

              {/* Rotas sem o usuário estar logado */}
              <Route path="/login" component={Login} />
              <Route path="/cadastro" component={Cadastro} />
              <Route path="/recuperar-senha" component={RecuperarSenha} />
              <Route path="/resetar-senha/:token" component={ResetarSenha} />
          </div>

        </Router>
      </Provider>
    );
  }
}

export default App;