import React from 'react';

import AppHeader from './app-header';
import SearchContainer from '../containers/search-container';
import TableContainer from '../containers/table-container';


const App = () => (
  <main className="container">
    <AppHeader />
    <SearchContainer />
    <TableContainer />
  </main>
);

App.displayName = 'App';

export default App;
