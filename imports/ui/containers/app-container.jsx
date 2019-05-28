import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import App from '../components/app';

import { Shows } from '../../api/db/shows';
import Spinner from '../spinner';


const trackedData = withTracker(() => {
  const showHandle = Meteor.subscribe('shows');
  const loading = !showHandle.ready();
  const showList = Shows.find()
    .fetch();

  return {
    loading,
    showList,
  };
});

const AppContainer = ({ loading, showList, test }) => {
  if (loading) {
    return <Spinner />;
  }
  return <App loading={loading} showList={showList} test={test} />;
};

AppContainer.displayName = 'AppContainer';

AppContainer.propTypes = {
  test: PropTypes.string,
  loading: PropTypes.bool,
  showList: PropTypes.array,
};

const mapStateToProps = (props) => ({
  test: 'testString',
  ...props,
});

export default connect(mapStateToProps)(trackedData(AppContainer));
