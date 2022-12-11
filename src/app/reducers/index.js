import { combineReducers } from "redux";
// Este pacote é responsável por combinar todos os reducers em um único reducer

const reducers = combineReducers({
    root: (state, action) => state  || {}
    // Este reducer é responsável por retornar o estado atual da aplicação (state) e a ação que está sendo executada (action)
});

export default reducers;