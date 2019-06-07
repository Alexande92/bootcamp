import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AppHeader from '../components/app-header';
import { setToDefault } from '../../actions';

const AppHeaderContainer = ({ onSet }) => (
  <AppHeader onSet={onSet} />
);

AppHeaderContainer.displayName = 'AppHeaderContainer';

AppHeaderContainer.propTypes = {
  onSet: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onSet: () => dispatch(setToDefault()),
});

export default connect(null, mapDispatchToProps)(AppHeaderContainer);
