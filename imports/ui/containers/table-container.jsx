import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { sortByColumn } from '../../actions';

import { Shows } from '../../api/db/shows';
import Spinner from '../spinner';
import TableWrapper from '../components/table-wrapper';

import '../styles/show-table.css';

const trackedData = withTracker(({ onSort, options }) => {
  const showHandle = Meteor.subscribe('shows');
  const loading = !showHandle.ready() && !options.total;

  let showList = Shows.find(
    options.search, {
      sort: options.sorting,
      limit: options.limit,
      skip: (options.skip - 1) * options.limit,
    }
  );

  showList = showList.fetch();

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
  return (
    <TableWrapper showList={showList} onSort={onSort} />
  );
};

TableContainer.displayName = 'AppContainer';

TableContainer.propTypes = {
  onSort: PropTypes.func,
  loading: PropTypes.bool,
  showList: PropTypes.array,
};

const mapStateToProps = ({ sorting, search, pagination }) => {
  const options = {
    sorting: {},
    search: {},
    pagination: {},
  };

  options.skip = pagination.currentPage;
  options.limit = pagination.pageLimit;
  options.total = pagination.total;

  options.sorting[sorting.name] = sorting.order;
  options.search = {};

  if (search.phrase) {
    options.search = {
      title: {
        $regex: search.phrase,
        $options: 'i',
      },
    };
  }

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
