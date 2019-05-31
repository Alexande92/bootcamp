const sortByColumn = (columnName) => ({
  type: 'SORT_BY_COLUMN',
  payload: columnName,
});

const serchByShows = (phrase) => ({
  type: 'SEARCH_BY_SHOWS',
  payload: phrase,
});

export {
  sortByColumn,
  serchByShows,
};
