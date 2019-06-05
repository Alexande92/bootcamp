const goToPage = (state, action) => {
  if (state === undefined) {
    return {
      currentPage: 1,
      pageLimit: 5,
      total: 0,
    };
  }

  switch (action.type) {
    case 'UPDATE_TOTAL_NUMBER':
      return {
        ...state.pagination,
        total: action.payload,
      };
    case 'GO_TO_PAGE':
      return {
        ...state.pagination,
        currentPage: action.payload,
      };
    default:
      return state.pagination;
  }
};

export default goToPage;
