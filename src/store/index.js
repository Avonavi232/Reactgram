import { createStore } from 'redux';

import reducer from '../reducers';
import state from './state.json';

const mystore = createStore(reducer, state);

export default mystore;