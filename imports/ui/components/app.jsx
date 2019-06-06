import React from 'react';

import '../styles/app.css';

import AppHeader from './app-header';
import SearchContainer from '../containers/search-container';
import TableContainer from '../containers/table-container';
import PaginationContainer from '../containers/pagination-container';

const App = ({ page }) => (
  <main className="">
    <AppHeader />
    <SearchContainer />
    <TableContainer page={page} />
    <PaginationContainer />
  </main>
);

App.displayName = 'App';

export default App;
