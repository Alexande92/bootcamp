import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import AppContainer from '../imports/ui';

import store from './store';

Meteor.startup(() => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
    document.getElementById('root')
  );
});
