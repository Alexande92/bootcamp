import sortShowList from './sortShowList';
import searchByShows from './searchByShows';
import goToPage from './goToPage';

const reducer = (state, action) => ({
  sorting: sortShowList(state, action),
  search: searchByShows(state, action),
  pagination: goToPage(state, action),
});

export default reducer;
