import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import App from '../imports/components/App';

import store from './store';
import './main.html';

Meteor.startup(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});
