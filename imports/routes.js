import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import AppContainer from './ui/containers/app-container';

FlowRouter.route('/page/:id', {
  name: 'Shows.show',
  action (params) {
    mount(AppContainer, {
      page: params.id,
    });
  },
});

FlowRouter.route('/', {
  name: 'Shows.show',
  action () {
    mount(AppContainer, {
      page: 1,
    });
  },
});
