const sortByColumn = (columnName) => ({
  type: 'SORT_BY_COLUMN',
  payload: columnName,
});

const searchByShows = (phrase) => ({
  type: 'SEARCH_BY_SHOWS',
  payload: phrase,
});

const updateTotal = (total) => ({
  type: 'UPDATE_TOTAL_NUMBER',
  payload: total,
});

const goToPage = (page) => ({
  type: 'GO_TO_PAGE',
  payload: page,
});

export {
  sortByColumn,
  searchByShows,
  updateTotal,
  goToPage,
};
