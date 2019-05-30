const sortByColumn = (columnName) => ({
  type: 'SORT_BY_COLUMN',
  payload: columnName,
});

export {
  sortByColumn,
};
