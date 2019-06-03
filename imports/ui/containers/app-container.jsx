import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../client/store';

import App from '../components/app';

const AppContainer = ({ page }) => {
  return (
    <Provider store={store}>
      <App page={page} />
    </Provider>
  );
};

AppContainer.displayName = 'AppContainer';

export default AppContainer;
