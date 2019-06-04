import React from 'react';

import '../styles/page-button.css';

const PageButton = ({ setPageNumber, text, isActive }) => (
  <a
    href={`/page/${text}`}
    onClick={() => setPageNumber(text)}
    className={isActive ? 'active' : 'voyu'}
  >
    {text}
  </a>
);

PageButton.displayName = 'SearchPanel';

export default PageButton;
