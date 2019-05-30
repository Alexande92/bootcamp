import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { sortByColumn } from '../../actions';

import { Shows } from '../../api/db/shows';
import Spinner from '../spinner';
import Table from '../components/table-content';

const trackedData = withTracker(({ onSort, options }) => {
  const showHandle = Meteor.subscribe('shows');
  const loading = !showHandle.ready();
  const showList = Shows.find({}, {
    sort: options,
  }).fetch();

  return {
    loading,
    showList,
    onSort,
  };
});

const TableContainer = ({ loading, showList, onSort }) => {
  if (loading) {
    return <Spinner />;
  }
  return <Table showList={showList} onSort={onSort} />;
};

TableContainer.displayName = 'AppContainer';

TableContainer.propTypes = {
  onSort: PropTypes.func,
  loading: PropTypes.bool,
  showList: PropTypes.array,
};

const mapStateToProps = (state) => {
  const options = {};
  options[state.sorting.name] = state.sorting.order;

  return {
    options,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSort: (title) => {
    dispatch(sortByColumn(title));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(trackedData(TableContainer));
