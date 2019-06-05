import React from 'react';

import '../styles/search-panel.css';

const SearchPanel = ({ onSearch }) => (
  <section className="search-panel container">
    <div className="wrap">
      <span className="search-icon">
        <span className="fa fa-search" />
      </span>
      <input type="text" placeholder="Search ..." name="search" className="input-with-icon" onChange={(e) => onSearch(e.target.value)} />
    </div>
  </section>

);

SearchPanel.displayName = 'SearchPanel';

export default SearchPanel;
