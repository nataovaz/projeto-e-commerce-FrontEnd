import { createStore, applyMiddleware} from 'redux';
// Este pacote é responsável por criar o store da aplicação e aplicar middlewares (pacotes que interceptam as ações antes de serem enviadas para o reducer)

import thunk from 'redux-thunk';
// Este pacote é responsável por fazer o dispatch de uma ação assíncrona (action creator) para o reducer

import rootReducer from './reducers';
// Este pacote é responsável por importar o reducer da aplicação (que é responsável por atualizar o estado da aplicação)

// Cria o store da aplicação e aplica o middleware thunk para que as ações assíncronas sejam enviadas para o reducer
//Reducer: função que recebe o estado atual da aplicação e a ação que está sendo executada e retorna o novo estado da aplicação
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;