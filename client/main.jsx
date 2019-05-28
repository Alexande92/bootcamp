import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Shows } from '../imports/api/db/shows';

import App from '../imports/ui/App';

import store from './store';

import './main.html';


Meteor.startup(() => {
  Tracker.autorun(() => {
    Meteor.subscribe('shows');
    ReactDOM.render(
      <Provider store={store}>
        {JSON.stringify(Shows.find()
          .fetch())}
        <App />
      </Provider>,
      document.getElementById('root')
    );
  });
});
