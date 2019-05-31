import React from 'react';

import '../styles/search-panel.css';

const SearchPanel = ({ onSearch }) => (
  <div className="search-panel">
    <label htmlFor="search">
      <input name="search" id="search" onChange={(e) => onSearch(e.target.value)} />
      <span><i className="search-icon fa fa-search" /></span>
    </label>
  </div>
);

SearchPanel.displayName = 'SearchPanel';

export default SearchPanel;
