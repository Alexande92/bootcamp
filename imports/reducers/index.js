import sortShowList from './sortShowList';
import searchByShows from './searchByShows';
import goToPage from './goToPage';

const INITIAL_STATE = {
  sorting: {
    name: 'watchers',
    order: -1,
  },
  search: {
    phrase: null,
  },
  pagination: {
    currentPage: 1,
    pageLimit: 10,
    total: 0,
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'SET_TO_DEFAULT') {
    return INITIAL_STATE;
  }
  return {
    sorting: sortShowList(state, action),
    search: searchByShows(state, action),
    pagination: goToPage(state, action),
  };
};

export default reducer;
