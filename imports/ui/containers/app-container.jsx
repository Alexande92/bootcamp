import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import store from '../../../client/store';

import App from '../components/app';

const AppContainer = ({ page }) => {
  return (
    <Provider store={store}>
      <App page={page} />
    </Provider>
  );
};

AppContainer.propTypes = {
  page: PropTypes.number.isRequired,
};

AppContainer.displayName = 'AppContainer';

export default AppContainer;
