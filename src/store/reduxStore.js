import {createStore, compose} from 'redux';
import setColorModeReducer from './setColorModeReducer';

const defaultStore = {
  darkMode: false,
  lightMode: false
}

export  const store = createStore(setColorModeReducer, defaultStore, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))