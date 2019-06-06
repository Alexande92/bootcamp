import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withTracker } from 'meteor/react-meteor-data';
import { Shows } from '../../api/db/shows';
import { goToPage, updateTotal } from '../../actions';
import { getPaginatedArray } from '../utils';

import PageButton from '../components/page-button';
import Spinner from '../spinner';

import '../styles/pagination.css';

const PaginationContainer = ({ total, current, limit, setPageNumber, loading }) => {
  if (loading) {
    return <Spinner />;
  }

  const pages = getPaginatedArray(current, Math.ceil(total / limit));

  return (
    <section className="pagination">
      <div className="container">
        { current > 1
          ? <a href={`/page/${current - 1}`} className="hide arrows" onClick={() => setPageNumber(current - 1)}>Prev</a>
          : null
        }
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
        { current < Math.ceil(total / limit)
          ? (<a href={`/page/${current + 1}`} className="hide arrows" onClick={() => setPageNumber(current + 1)}>Next</a>)
          : null
        }

      </div>
    </section>
  );
};

PaginationContainer.displayName = 'PaginationContainer';

PaginationContainer.propTypes = {
  total: PropTypes.number,
  limit: PropTypes.number,
  current: PropTypes.number,
  setPageNumber: PropTypes.func,
  loading: PropTypes.bool,
};

const trackedData = withTracker((state) => {
  const { phrase } = state;
  const options = {};
  let loading = false;

  if (phrase) {
    options.search = {
      title: {
        $regex: phrase,
        $options: 'i',
      },
    };
  }

  const total = phrase
    ? Shows.find(options.search)
      .count()
    : Shows.find()
      .count();

  if (total !== state.total) {
    state.getTotal(total);
    loading = true;
  }

  return {
    loading,
  };
});


const mapStateToProps = ({ pagination, search }) => {
  return {
    total: pagination.total,
    current: pagination.currentPage,
    limit: pagination.pageLimit,
    phrase: search.phrase,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getTotal: (total) => dispatch(updateTotal(total)),
  setPageNumber: (page) => dispatch(goToPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(trackedData(PaginationContainer));
