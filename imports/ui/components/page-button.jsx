import React from 'react';

import '../styles/page-button.css';

const PageButton = ({ setPageNumber, text, isActive }) => (
  <button
    onClick={() => setPageNumber(text)}
    className={isActive ? 'active' : null}
  >
    {text}
  </button>
);

PageButton.displayName = 'PageButton';

export default PageButton;
