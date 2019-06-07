import React from 'react';

import '../styles/app.css';

import AppHeaderContainer from '../containers/app-header';
import SearchContainer from '../containers/search-container';
import TableContainer from '../containers/table-container';
import PaginationContainer from '../containers/pagination-container';

const App = ({ page }) => (
  <main className="">
    <AppHeaderContainer />
    <SearchContainer />
    <TableContainer page={page} />
    <PaginationContainer />
  </main>
);

App.displayName = 'App';

export default App;
