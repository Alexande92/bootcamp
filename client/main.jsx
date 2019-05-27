import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import App from '../imports/components/App';

import store from './store';

import ShowService from '../imports/api/showService';
import './main.html';


Meteor.startup(() => {
  const shows = new ShowService();
  Meteor.setInterval(() => {
    shows.getShows();
  }, shows.updateRate);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});
