import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withTracker } from 'meteor/react-meteor-data';
import { Shows } from '../../api/db/shows';
import { updateTotal, goToPage } from '../../actions';
import { getPaginatedArray } from '../utils';

import PageButton from '../components/page-button';

const PaginationContainer = ({ total, current, limit, setPageNumber }) => {
  const pages = getPaginatedArray(current, Math.ceil(total / limit));
  return (
    <div className="pagination">
      {
        pages.map((text, index) => {
          if (text === '...') {
            return (
              <span key={index}>...</span>
            );
          }

          return (
            <PageButton
              isActive={current === text ? 1 : 0}
              setPageNumber={setPageNumber}
              text={text}
              key={index}
            />
          );
        })
      }
    </div>
  );
};

PaginationContainer.displayName = 'PaginationContainer';

PaginationContainer.propTypes = {
  total: PropTypes.number,
  limit: PropTypes.number,
  current: PropTypes.number,
  setPageNumber: PropTypes.func,
};

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
    current: pagination.currentPage,
    limit: pagination.pageLimit,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getTotal: (total) => dispatch(updateTotal(total)),
  setPageNumber: (page) => dispatch(goToPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(trackedData(PaginationContainer));
