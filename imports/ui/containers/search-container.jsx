import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SearchPanel from '../components/search-panel';
import { searchByShows, goToPage } from '../../actions';


const SearchContainer = ({ onSearch }) => (
  <SearchPanel onSearch={onSearch} />
);

SearchContainer.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

SearchContainer.displayName = 'SearchContainer';

const mapDispatchToProps = (dispatch) => ({
  onSearch: (phrase) => {
    dispatch(goToPage(1));
    dispatch(searchByShows(phrase));
  },
});

export default connect(null, mapDispatchToProps)(SearchContainer);
