import React from 'react';

import AppHeader from './app-header';
import SearchPanel from './search-panel';
import TableContainer from '../containers/table-container';


const App = () => (
  <main className="container">
    <AppHeader />
    <SearchPanel />
    <TableContainer />
  </main>
);

App.displayName = 'App';

export default App;
