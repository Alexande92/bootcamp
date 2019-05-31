import sortShowList from './sortShowList';
import searchByShows from './searchByShows';

const reducer = (state, action) => ({
  sorting: sortShowList(state, action),
  search: searchByShows(state, action),
});

export default reducer;
