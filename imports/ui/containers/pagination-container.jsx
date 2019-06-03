import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withTracker } from 'meteor/react-meteor-data';
import { Shows } from '../../api/db/shows';
import { updateTotal, goToPage } from '../../actions';


const trackedData = withTracker((state) => {
  const total = Shows.find().count();
  if (total) {
    state.getTotal(total);
  }

  return {
    test: 'TestMessage',
  };
});


const mapStateToProps = ({ pagination }) => {
  return {
    total: pagination.total,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getTotal: (total) => dispatch(updateTotal(total)),
  setPageNumber: (page) => dispatch(goToPage(page)),
});

const PaginationContainer = ({ total, setPageNumber }) => (
  <a href="/page/2" onClick={() => setPageNumber(2)}>Total from state {total}</a>
);
export default connect(mapStateToProps, mapDispatchToProps)(trackedData(PaginationContainer));
