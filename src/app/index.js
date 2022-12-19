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
import Cliente from './containers/Cliente';

import Produtos from './containers/Produtos';
import Produto from './containers/Produto';

import Opcao from './containers/Opcao';
import Painel from './containers/Painel';

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
              <Route path={"/clientes"} component={base(Clientes)} />
              <Route path={"/cliente/:email"} component={base(Cliente)} />
              <Route path={"/produtos"} component={base(Produtos)} />
              <Route path={"/produto/:id"} component={base(Produto)} />              
              <Route path={"/painel"} component={base(Painel)} />
              <Route path={"/opcao"}  component={base(Opcao)} />

              {/* Rotas sem o usuário estar logado */}
              <Route path="/" exact component={Login} />
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