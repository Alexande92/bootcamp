import React from 'react';
import { connect } from 'react-redux';

import SearchPanel from '../components/search-panel';
import { searchByShows } from '../../actions';

const SearchContainer = ({ onSearch }) => (
  <SearchPanel onSearch={onSearch} />
);

SearchContainer.displayName = 'SearchContainer';

const mapDispatchToProps = (dispatch) => ({
  onSearch: (phrase) => {
    // if (phrase.length > 2) {
    dispatch(searchByShows(phrase));
    // }
  },
});

export default connect(null, mapDispatchToProps)(SearchContainer);
