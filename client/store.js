import { createStore } from 'redux';
import reducer from '../imports/reducers';

const store = createStore(reducer);

export default store;
