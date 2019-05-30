import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';

import { Shows } from '../../api/db/shows';
import Spinner from '../spinner';
import Table from '../components/table-content';

const trackedData = withTracker(() => {
  const showHandle = Meteor.subscribe('shows');
  const loading = !showHandle.ready();
  const showList = Shows.find({}, {
  }).fetch();

  return {
    loading,
    showList,
  };
});

const TableContainer = ({ loading, showList }) => {
  if (loading) {
    return <Spinner />;
  }
  return <Table showList={showList} />;
};

TableContainer.displayName = 'AppContainer';

TableContainer.propTypes = {
  loading: PropTypes.bool,
  showList: PropTypes.array,
};

export default trackedData(TableContainer);
