const goToPage = (state, action) => {
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
