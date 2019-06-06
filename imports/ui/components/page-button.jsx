import React from 'react';

import '../styles/page-button.css';

const PageButton = ({ setPageNumber, text, isActive }) => (
  <a
    href={`/page/${text}`}
    onClick={() => setPageNumber(text)}
    className={isActive ? 'active' : null}
  >
    {text}
  </a>
);

PageButton.displayName = 'PageButton';

export default PageButton;
